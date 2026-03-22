'use client';

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export function MarkdownEditor({ value, onChange }: Props) {
  return (
    <textarea
      className="w-full h-64 p-4 border rounded-lg font-mono text-sm text-gray-900"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
