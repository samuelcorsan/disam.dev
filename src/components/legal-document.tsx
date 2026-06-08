import type { Metadata } from "next";
import Link from "next/link";

type LegalDocumentProps = {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
};

export function legalMetadata(title: string, description: string): Metadata {
  return {
    title: `${title} | ClearHead`,
    description,
    openGraph: {
      title: `${title} | ClearHead`,
      description,
      type: "website",
      url: "/",
    },
  };
}

export function LegalDocument({ title, effectiveDate, children }: LegalDocumentProps) {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-neutral-100">
      <header className="border-b border-neutral-200 px-6 py-4 dark:border-neutral-800">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
            disam.dev
          </Link>
          <span className="text-sm font-medium text-neutral-500">ClearHead</span>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-12 md:px-8">
        <article className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-blue-600 dark:prose-a:text-blue-400">
          <h1>{title}</h1>
          <p className="text-sm text-neutral-500 not-prose">
            <strong>Effective date:</strong> {effectiveDate}
          </p>
          {children}
        </article>
      </main>
    </div>
  );
}
