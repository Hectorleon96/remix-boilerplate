import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "danger" | "outline";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
};

const baseStyles =
  "px-4 py-2 rounded font-medium transition duration-200 disabled:opacity-50";
const variantStyles: Record<Variant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const combinedClassName = clsx(baseStyles, variantStyles[variant], className);

  return (
    <button className={combinedClassName} {...props}>
      {props.children}
    </button>
  );
}
