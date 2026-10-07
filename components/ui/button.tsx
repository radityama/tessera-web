import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-mono font-medium rounded-[4px] border transition-colors select-none focus-visible:outline-2 focus-visible:outline-[var(--ink)] cursor-pointer whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--ink)] text-[var(--canvas)] border-[var(--ink)] hover:bg-[#353030]",
        secondary:
          "bg-[var(--canvas)] text-[var(--ink)] border-[var(--hairline-strong)] hover:bg-[var(--surface-card)]",
        ghost:
          "bg-transparent text-[var(--ink)] border-transparent hover:bg-[var(--surface-card)] hover:border-[var(--hairline)]",
      },
      size: {
        sm: "text-xs px-2.5 py-1",
        md: "text-xs md:text-sm px-4 py-2",
        lg: "text-sm md:text-base px-5 py-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "md",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
