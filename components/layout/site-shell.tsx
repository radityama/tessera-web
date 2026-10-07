import React from 'react';

export interface SiteViewportProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Outer viewport shell: clips horizontal extension lines (overflow-x: clip)
 * and maintains consistent 8px page padding on smaller screens.
 */
export function SiteViewport({
  children,
  className = '',
  ...props
}: SiteViewportProps) {
  return (
    <div className={`site-viewport ${className}`} {...props}>
      {children}
    </div>
  );
}

export interface SiteRailProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Canonical central content rail: enforces 1080px max-width alignment
 * and shared vertical left/right border boundaries.
 */
export function SiteRail({
  children,
  className = '',
  ...props
}: SiteRailProps) {
  return (
    <div className={`site-rail ${className}`} {...props}>
      {children}
    </div>
  );
}
