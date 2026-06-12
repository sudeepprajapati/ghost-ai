"use client";

import { useState } from "react";
import { useProjectDialogs } from "@/hooks/use-project-dialogs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Project } from "@/lib/mock-data";

function CreateProjectDialog() {
  const { closeDialog, isLoading, submitDialog, addProject } = useProjectDialogs();
  const [createName, setCreateName] = useState("");
  const createSlug = createName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  const handleCreate = () => {
    if (!createName.trim()) return;
    submitDialog(async () => {
      await new Promise((r) => setTimeout(r, 600));
      addProject(createName, createSlug);
    });
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Create Project</DialogTitle>
        <DialogDescription>
          Enter a name for your new architecture workspace.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Project Name</Label>
          <Input
            id="name"
            value={createName}
            onChange={(e) => setCreateName(e.target.value)}
            placeholder="e.g. Authentication Service"
            autoFocus
          />
          {createName && (
            <p className="text-xs text-text-muted mt-1">
              URL slug: <span className="font-mono text-text-secondary">{createSlug}</span>
            </p>
          )}
        </div>
      </div>
      <DialogFooter>
        <Button variant="ghost" onClick={closeDialog} disabled={isLoading}>Cancel</Button>
        <Button onClick={handleCreate} disabled={!createName.trim() || isLoading}>
          {isLoading ? "Creating..." : "Create"}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

function RenameProjectDialog({ project }: { project: Project }) {
  const { closeDialog, isLoading, submitDialog, renameProject } = useProjectDialogs();
  const [renameName, setRenameName] = useState(project.name);

  const handleRename = () => {
    if (!renameName.trim()) return;
    submitDialog(async () => {
      await new Promise((r) => setTimeout(r, 600));
      renameProject(project.id, renameName);
    });
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Rename Project</DialogTitle>
        <DialogDescription>
          Currently named <strong>{project.name}</strong>.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="rename">New Name</Label>
          <Input
            id="rename"
            value={renameName}
            onChange={(e) => setRenameName(e.target.value)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleRename();
              }
            }}
          />
        </div>
      </div>
      <DialogFooter>
        <Button variant="ghost" onClick={closeDialog} disabled={isLoading}>Cancel</Button>
        <Button onClick={handleRename} disabled={!renameName.trim() || isLoading}>
          {isLoading ? "Saving..." : "Rename"}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

function DeleteProjectDialog({ project }: { project: Project }) {
  const { closeDialog, isLoading, submitDialog, deleteProject } = useProjectDialogs();

  const handleDelete = () => {
    submitDialog(async () => {
      await new Promise((r) => setTimeout(r, 600));
      deleteProject(project.id);
    });
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Delete Project</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete <strong>{project.name}</strong>? This action cannot be undone.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="mt-4">
        <Button variant="ghost" onClick={closeDialog} disabled={isLoading}>Cancel</Button>
        <Button variant="destructive" onClick={handleDelete} disabled={isLoading}>
          {isLoading ? "Deleting..." : "Delete Project"}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

export function ProjectDialogs() {
  const { activeDialog, selectedProject, closeDialog } = useProjectDialogs();

  return (
    <>
      <Dialog open={activeDialog === "create"} onOpenChange={(open) => !open && closeDialog()}>
        {activeDialog === "create" && <CreateProjectDialog />}
      </Dialog>

      <Dialog open={activeDialog === "rename"} onOpenChange={(open) => !open && closeDialog()}>
        {activeDialog === "rename" && selectedProject && (
          <RenameProjectDialog project={selectedProject} />
        )}
      </Dialog>

      <Dialog open={activeDialog === "delete"} onOpenChange={(open) => !open && closeDialog()}>
        {activeDialog === "delete" && selectedProject && (
          <DeleteProjectDialog project={selectedProject} />
        )}
      </Dialog>
    </>
  );
}
