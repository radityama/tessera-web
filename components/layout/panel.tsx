import React from 'react';

export interface PanelProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  hasTopLine?: boolean;
  hasBottomLine?: boolean;
  as?: React.ElementType;
}

/**
 * Standardized section layout primitive for Tessera.
 * Constrains width to the canonical 1080px site-rail with persistent
 * vertical hairline borders on both rails (border-x).
 * By default, terminates with a full-width screen-line-bottom (1px line).
 */
export function Panel({
  id,
  children,
  className = '',
  hasTopLine = false,
  hasBottomLine = true,
  as: Component = 'section',
  ...props
}: PanelProps) {
  return (
    <Component
      id={id}
      className={`panel-frame relative bg-[var(--canvas)] ${
        hasTopLine ? 'screen-line-top' : ''
      } ${hasBottomLine ? 'screen-line-bottom' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export interface PanelHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  kicker?: string;
  title?: string;
  description?: string;
  aside?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  heading?: 'h1' | 'h2';
}

export function PanelHeader({
  kicker,
  title,
  description,
  aside,
  children,
  className = '',
  heading = 'h2',
  ...props
}: PanelHeaderProps) {
  const Title = heading;
  return (
    <div
      className={`border-b border-[var(--line)] px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-8 bg-[var(--canvas)] ${className}`}
      {...props}
    >
      {children ? (
        children
      ) : (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            {kicker && (
              <div className="text-xs tracking-wider uppercase text-[var(--mute)]">
                [{kicker}]
              </div>
            )}
            {title && (
              <Title className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--ink)]">
                {title}
              </Title>
            )}
            {description && (
              <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">
                {description}
              </p>
            )}
          </div>
          {aside && <div className="shrink-0 text-xs md:text-sm">{aside}</div>}
        </div>
      )}
    </div>
  );
}
