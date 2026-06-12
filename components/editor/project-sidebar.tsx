import { Plus, X, MoreVertical, Pencil, Trash2, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useProjectDialogs } from "@/hooks/use-project-dialogs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ProjectSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { ownedProjects, sharedProjects, openDialog } = useProjectDialogs();

  return (
    <div
      className={cn(
        "fixed left-4 top-20 bottom-4 z-40 w-72 transform rounded-2xl border border-border-subtle bg-bg-surface/95 shadow-lg backdrop-blur transition-transform duration-200 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+1rem)] pointer-events-none"
      )}
      inert={!isOpen ? true : undefined}
      aria-hidden={!isOpen}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-border-subtle p-4">
          <h2 className="text-sm font-medium text-text-primary">Projects</h2>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={onClose}
            className="h-6 w-6"
            aria-label="Close sidebar"
          >
            <X className="h-4 w-4 text-text-secondary" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <Tabs defaultValue="my-projects" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="my-projects">My Projects</TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
            </TabsList>
            <TabsContent value="my-projects" className="mt-4">
              {ownedProjects.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border-subtle p-8 text-center">
                  <p className="text-sm text-text-muted">No projects yet</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {ownedProjects.map((project) => (
                    <div key={project.id} className="group flex items-center justify-between rounded-lg px-2 py-2 hover:bg-bg-base/50">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <Folder className="h-4 w-4 shrink-0 text-text-muted" />
                        <span className="truncate text-sm text-text-primary">{project.name}</span>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="inline-flex h-6 w-6 items-center justify-center rounded-md text-text-muted hover:bg-bg-base hover:text-text-primary opacity-0 group-hover:opacity-100 focus:opacity-100 outline-none">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => openDialog("rename", project)}>
                            <Pencil className="mr-2 h-4 w-4" />
                            Rename
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => openDialog("delete", project)} className="text-state-error">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
            <TabsContent value="shared" className="mt-4">
              {sharedProjects.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border-subtle p-8 text-center">
                  <p className="text-sm text-text-muted">No shared projects</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {sharedProjects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-bg-base/50">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <Folder className="h-4 w-4 shrink-0 text-text-muted" />
                        <span className="truncate text-sm text-text-primary">{project.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        <div className="border-t border-border-subtle p-4">
          <Button className="w-full justify-start" variant="default" onClick={() => openDialog("create")}>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>
    </div>
  );
}
