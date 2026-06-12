import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export function ProjectSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={cn(
        "fixed left-4 top-20 bottom-4 z-40 w-72 transform rounded-2xl border border-border-subtle bg-bg-surface/95 shadow-lg backdrop-blur transition-transform duration-200 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+1rem)]"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-border-subtle p-4">
          <h2 className="text-sm font-medium text-text-primary">Projects</h2>
          <Button variant="ghost" size="icon-sm" onClick={onClose} className="h-6 w-6">
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
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border-subtle p-8 text-center">
                <p className="text-sm text-text-muted">No projects yet</p>
              </div>
            </TabsContent>
            <TabsContent value="shared" className="mt-4">
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border-subtle p-8 text-center">
                <p className="text-sm text-text-muted">No shared projects</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="border-t border-border-subtle p-4">
          <Button className="w-full justify-start" variant="default">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>
    </div>
  );
}
