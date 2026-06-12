"use client";

import { Plus } from "lucide-react";
import { EditorLayout } from "@/components/editor/editor-layout";
import { ProjectDialogsProvider, useProjectDialogs } from "@/hooks/use-project-dialogs";
import { ProjectDialogs } from "@/components/editor/project-dialogs";
import { Button } from "@/components/ui/button";

function EditorHomeContent() {
  const { openDialog } = useProjectDialogs();
  
  return (
    <div className="flex h-full flex-col items-center justify-center bg-bg-base p-8">
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-semibold text-text-primary">Create a project or open an existing one</h1>
        <p className="mb-8 text-text-muted">Start a new architecture workspace, or choose a project from the sidebar.</p>
        <Button onClick={() => openDialog("create")} variant="default">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>
    </div>
  );
}

export default function EditorPage() {
  return (
    <ProjectDialogsProvider>
      <EditorLayout>
        <EditorHomeContent />
      </EditorLayout>
      <ProjectDialogs />
    </ProjectDialogsProvider>
  );
}
