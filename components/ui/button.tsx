import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "rounded-lg bg-primary text-sm text-primary-foreground hover:bg-primary/80",
        outline:
          "rounded-lg border-border bg-background text-sm hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "rounded-lg bg-secondary text-sm text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "rounded-lg text-sm hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "rounded-lg bg-destructive/10 text-sm text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-sm text-primary underline-offset-4 hover:underline",
        epaid:
          "btn-glow rounded-full border border-solid border-epaid bg-epaid font-semibold uppercase leading-none tracking-normal text-white",
        epaidOutline:
          "btn-outline-glow overflow-visible rounded-full border border-solid font-semibold uppercase leading-none tracking-normal",
        epaidYellow:
          "btn-yellow-glow rounded-full border border-solid border-epaid-yellow bg-epaid-yellow font-semibold uppercase leading-none tracking-normal text-[#0c1424]",
      },
      size: {
        default:
          "h-8 gap-1.5 rounded-lg px-2.5 text-sm has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 text-sm has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        nav: "justify-between gap-2 py-2 pl-4 pr-1.5 text-[13px] sm:py-2 sm:pl-4 sm:pr-1.5 sm:text-sm lg:pl-5 lg:pr-1.5 lg:text-base",
        navPill:
          "h-8 min-w-8 px-3 text-[13px] sm:h-9 sm:min-w-9 sm:px-3.5 sm:text-sm",
        navRound: "size-8 p-0 sm:size-9",
        hero: "w-auto justify-between gap-2 py-2 pl-4 pr-1.5 text-[13px] sm:py-2 sm:pl-4 sm:pr-1.5 sm:text-sm lg:pl-5 lg:pr-1.5 lg:text-base",
        navStack:
          "w-full justify-between gap-2 py-2 pl-4 pr-1.5 text-sm sm:py-2.5 sm:pl-5 sm:pr-1.5",
        icon: "size-8 rounded-lg",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
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
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
