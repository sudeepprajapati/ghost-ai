import { SignIn } from "@clerk/nextjs";
import { History, Share2, FileText } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen w-full bg-bg-base font-sans">
      <div className="relative hidden w-1/2 flex-col border-r border-border-subtle bg-bg-surface md:flex">
        <div className="absolute left-12 top-12 flex items-center gap-3">
          <div className="h-6 w-6 rounded bg-accent-primary"></div>
          <span className="font-semibold text-text-primary">Ghost AI</span>
        </div>
        
        <div className="flex h-full flex-col justify-center px-12 xl:px-24">
          <div className="max-w-[420px]">
            <h1 className="mb-6 text-4xl font-semibold tracking-tight text-text-primary">
              Design systems at the<br />speed of thought.
            </h1>
            <p className="mb-12 leading-relaxed text-text-muted">
              Describe your architecture in plain English. Ghost AI maps it to a shared canvas your whole team can refine in real time.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border-subtle bg-bg-base text-accent-primary">
                  <History className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-primary">AI Architecture Generation</h3>
                  <p className="mt-1 text-sm text-text-muted">Describe your system, AI maps it to nodes and edges on a live canvas.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border-subtle bg-bg-base text-accent-primary">
                  <Share2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-primary">Real-time Collaboration</h3>
                  <p className="mt-1 text-sm text-text-muted">Live cursors, presence indicators, and shared node editing across your team.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border-subtle bg-bg-base text-accent-primary">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-primary">Instant Spec Generation</h3>
                  <p className="mt-1 text-sm text-text-muted">Export a complete Markdown technical spec directly from the canvas graph.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center md:w-1/2 p-4">
        <SignIn />
      </div>
    </div>
  );
}
