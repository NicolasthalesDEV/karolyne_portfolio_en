import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    const buttonStyles = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 disabled:opacity-50 disabled:pointer-events-none",
      {
        "bg-zinc-900 text-white hover:bg-zinc-800": variant === "default",
        "border border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900": variant === "outline",
        "hover:bg-zinc-100 hover:text-zinc-900": variant === "ghost",
        "underline-offset-4 hover:underline text-zinc-900": variant === "link",
        "h-10 py-2 px-4": size === "default",
        "h-9 px-3 rounded-md text-sm": size === "sm",
        "h-11 px-8 rounded-md": size === "lg",
        "h-10 w-10": size === "icon",
      },
      className,
    )

    return <Comp className={buttonStyles} ref={asChild ? undefined : ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button }

