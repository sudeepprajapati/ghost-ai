"use client";

import { useState } from "react";
import { EditorNavbar } from "./editor-navbar";
import { ProjectSidebar } from "./project-sidebar";

export function EditorLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full flex-col bg-bg-base overflow-hidden">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />
      
      <div className="relative flex flex-1 overflow-hidden">
        {/* Mobile backdrop scrim */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 z-30 bg-bg-base/80 backdrop-blur-sm lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
          />
        )}
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        
        <main className="flex-1 overflow-auto bg-bg-base">
          {children}
        </main>
      </div>
    </div>
  );
}
