"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Project, mockOwnedProjects, mockSharedProjects } from "@/lib/mock-data";

type DialogType = "create" | "rename" | "delete" | null;

interface ProjectDialogsContextType {
  activeDialog: DialogType;
  selectedProject: Project | null;
  isLoading: boolean;
  ownedProjects: Project[];
  sharedProjects: Project[];
  openDialog: (type: DialogType, project?: Project) => void;
  closeDialog: () => void;
  submitDialog: (action: () => Promise<void>) => Promise<void>;
  // For mock local updates:
  addProject: (name: string, slug: string) => void;
  renameProject: (id: string, name: string) => void;
  deleteProject: (id: string) => void;
}

const ProjectDialogsContext = createContext<ProjectDialogsContextType | undefined>(undefined);

export function ProjectDialogsProvider({ children }: { children: ReactNode }) {
  const [activeDialog, setActiveDialog] = useState<DialogType>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const [ownedProjects, setOwnedProjects] = useState<Project[]>(mockOwnedProjects);
  const [sharedProjects] = useState<Project[]>(mockSharedProjects);

  const openDialog = (type: DialogType, project?: Project) => {
    if (project) setSelectedProject(project);
    setActiveDialog(type);
  };

  const closeDialog = () => {
    setActiveDialog(null);
    setSelectedProject(null);
  };

  const submitDialog = async (action: () => Promise<void>) => {
    setIsLoading(true);
    try {
      await action();
    } finally {
      setIsLoading(false);
      closeDialog();
    }
  };

  const addProject = (name: string, slug: string) => {
    const newProject: Project = {
      id: `p_${Date.now()}`,
      name,
      slug,
      role: "owner",
      updatedAt: "Just now",
    };
    setOwnedProjects((prev) => [newProject, ...prev]);
  };

  const renameProject = (id: string, name: string) => {
    setOwnedProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, name } : p))
    );
  };

  const deleteProject = (id: string) => {
    setOwnedProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProjectDialogsContext.Provider
      value={{
        activeDialog,
        selectedProject,
        isLoading,
        ownedProjects,
        sharedProjects,
        openDialog,
        closeDialog,
        submitDialog,
        addProject,
        renameProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectDialogsContext.Provider>
  );
}

export function useProjectDialogs() {
  const context = useContext(ProjectDialogsContext);
  if (context === undefined) {
    throw new Error("useProjectDialogs must be used within a ProjectDialogsProvider");
  }
  return context;
}
