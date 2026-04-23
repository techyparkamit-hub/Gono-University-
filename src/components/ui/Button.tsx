import * as React from "react";
import { cn } from "@/src/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-sm ring-1 ring-primary-700/10",
      secondary: "bg-slate-800 text-white hover:bg-slate-700 shadow-sm ring-1 ring-slate-900/10",
      outline: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900",
      ghost: "text-slate-600 hover:bg-slate-100/50 hover:text-slate-900",
    };
    const sizes = {
      sm: "h-8 px-3 py-1 text-xs font-medium",
      md: "h-10 px-4 py-2 text-sm font-medium",
      lg: "h-12 px-6 py-3 text-base font-medium",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50",
          "active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
