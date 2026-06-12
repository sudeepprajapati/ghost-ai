import { EditorLayout } from "@/components/editor/editor-layout";

export default function Home() {
  return (
    <EditorLayout>
      <div className="flex h-full items-center justify-center">
        <div className="text-center text-text-muted">
          <h1 className="mb-2 text-2xl font-semibold text-text-primary">Editor Canvas</h1>
          <p>Select a project from the sidebar or create a new one.</p>
        </div>
      </div>
    </EditorLayout>
  );
}
