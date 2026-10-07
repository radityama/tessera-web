import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 border px-2 py-0.5 rounded-[4px] text-[11px] font-medium whitespace-nowrap",
  {
    variants: {
      variant: {
        muted:
          "bg-[var(--surface-soft)] text-[var(--ink)] border-[var(--hairline)]",
        success:
          "text-[var(--success)] border-[var(--success)] bg-[#eafaf1]",
        accent:
          "text-[var(--accent)] border-[var(--accent)] bg-[#ebf5ff]",
        outline:
          "bg-[var(--canvas)] text-[var(--body)] border-[var(--line)]",
      },
    },
    defaultVariants: {
      variant: "muted",
    },
  }
)

function Badge({
  className,
  variant = "muted",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
