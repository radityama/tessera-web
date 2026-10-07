import React from 'react';
import { AlertTriangle, Ban, CheckCircle2, Info } from 'lucide-react';

const ROLES = {
  info: {
    label: 'Note',
    className: 'border-[var(--primary-border)] bg-[var(--primary-soft)] text-[var(--ink)]',
    iconClass: 'text-[var(--primary-solid)]',
    Icon: Info,
  },
  success: {
    label: 'Verified',
    className: 'border-[var(--verified-border)] bg-[var(--verified-soft)] text-[var(--ink)]',
    iconClass: 'text-[var(--verified-solid)]',
    Icon: CheckCircle2,
  },
  warning: {
    label: 'Warning',
    className: 'border-[var(--caution-border)] bg-[var(--caution-soft)] text-[var(--ink)]',
    iconClass: 'text-[var(--caution-solid)]',
    Icon: AlertTriangle,
  },
  danger: {
    label: 'Restricted',
    className: 'border-[var(--danger-border)] bg-[var(--danger-soft)] text-[var(--ink)]',
    iconClass: 'text-[var(--danger-solid)]',
    Icon: Ban,
  },
} as const;

export function Note({
  role = 'info',
  title,
  children,
}: {
  role?: keyof typeof ROLES;
  title?: string;
  children: React.ReactNode;
}) {
  const { label, className, iconClass, Icon } = ROLES[role];
  return (
    <aside className={`my-4 rounded-[4px] border px-3.5 py-3 ${className}`}>
      <div className="mb-1 flex items-center gap-1.5 font-mono text-xs font-bold">
        <Icon className={`h-3.5 w-3.5 ${iconClass}`} aria-hidden="true" />
        <span>{title ?? label}</span>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </aside>
  );
}
