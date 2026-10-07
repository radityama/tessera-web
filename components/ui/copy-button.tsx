'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
    <Button
      type="button"
      variant="secondary"
      size="sm"
      onClick={handleCopy}
      aria-label={ariaLabel}
      className={cn('gap-1.5 shrink-0', className)}
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
    </Button>
  );
}
