'use client';

import { useDocumentEditor } from '@/hooks/useDocumentEditor';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { ExportButton } from '@/components/ExportButton';

export default function Home() {
  const { markdown, setMarkdown, loading, exportDocx } = useDocumentEditor();

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Markdown to DOCX with Native Math</h1>
      <p className="text-gray-600">
        Enter Markdown with LaTeX math (using <code>$...$</code> or <code>$$...$$</code>) and export it to a DOCX file with native Word equations (OMML).
      </p>
      
      <MarkdownEditor value={markdown} onChange={setMarkdown} />
      
      <ExportButton onClick={exportDocx} loading={loading} />
    </main>
  );
}
