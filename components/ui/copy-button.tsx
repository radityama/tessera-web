'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
  ariaLabel?: string;
}

export function CopyButton({
  text,
  label = 'copy',
  className = '',
  ariaLabel = 'Copy code to clipboard',
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is unavailable
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={ariaLabel}
      className={`inline-flex items-center gap-1.5 justify-center text-xs font-mono px-2.5 py-1 rounded-[4px] border border-[var(--hairline-strong)] text-[var(--ink)] hover:bg-[var(--surface-card)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--ink)] cursor-pointer select-none shrink-0 ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3 h-3 text-[var(--success)]" strokeWidth={2} aria-hidden="true" />
          <span>[copied]</span>
        </>
      ) : (
        <>
          <Copy className="w-3 h-3 text-[var(--mute)]" strokeWidth={1.5} aria-hidden="true" />
          <span>[{label}]</span>
        </>
      )}
    </button>
  );
}
