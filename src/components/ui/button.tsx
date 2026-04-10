import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> & {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600",
  secondary:
    "bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-400",
  outline:
    "border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-50 focus-visible:ring-slate-400",
  ghost:
    "bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export default function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-60",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading && (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}
      <span>{children ?? "Click Me"}</span>
    </button>
  );
}
