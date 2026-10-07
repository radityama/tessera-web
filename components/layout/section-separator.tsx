import React from 'react';

export interface SectionSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  id?: string;
}

/**
 * Macro separator band between primary content groups.
 * Shares the same 1080px site-rail, with persistent vertical left/right borders,
 * full-viewport diagonal stripe fill, and a 1px screen-line-bottom.
 */
export function SectionSeparator({
  className = '',
  id,
  ...props
}: SectionSeparatorProps) {
  return (
    <div
      id={id}
      aria-hidden="true"
      className={`section-separator screen-line-bottom select-none ${className}`}
      {...props}
    />
  );
}
