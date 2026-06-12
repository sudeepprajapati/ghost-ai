import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export function EditorNavbar({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <nav className="flex h-14 items-center justify-between border-b border-border-subtle bg-bg-base px-4">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="h-5 w-5 text-text-secondary" />
          ) : (
            <PanelLeftOpen className="h-5 w-5 text-text-secondary" />
          )}
        </Button>
      </div>
      <div className="flex items-center justify-center">
        {/* Center section */}
      </div>
      <div className="flex items-center justify-end">
        <UserButton />
      </div>
    </nav>
  );
}
