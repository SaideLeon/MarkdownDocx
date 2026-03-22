'use client';

interface Props {
  onClick: () => void;
  loading: boolean;
}

export function ExportButton({ onClick, loading }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 disabled:opacity-50 self-start"
    >
      {loading ? 'Generating...' : 'Export to DOCX'}
    </button>
  );
}
