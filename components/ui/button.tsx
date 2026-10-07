import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-mono font-medium rounded-[4px] border transition-colors select-none focus-visible:outline-2 focus-visible:outline-[var(--ink)] cursor-pointer whitespace-nowrap';

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-xs md:text-sm px-4 py-2',
    lg: 'text-sm md:text-base px-5 py-2.5',
  };

  const variantClasses = {
    primary:
      'bg-[var(--ink)] text-[var(--canvas)] border-[var(--ink)] hover:bg-[#353030]',
    secondary:
      'bg-[var(--canvas)] text-[var(--ink)] border-[var(--hairline-strong)] hover:bg-[var(--surface-card)]',
    ghost:
      'bg-transparent text-[var(--ink)] border-transparent hover:bg-[var(--surface-card)] hover:border-[var(--hairline)]',
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
