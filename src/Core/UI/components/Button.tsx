// <BUTTON> IMPORT SECTION
import React from "react";
import { cn } from "./cn";

// <BUTTON> LOGIC SECTION
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}
function classes(variant: ButtonProps["variant"], className?: string) {
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition";
  const primary = "bg-white text-black hover:bg-gray-200 active:scale-[.98]";
  const ghost = "bg-transparent text-white ring-1 ring-white/20 hover:ring-white/40";
  return cn(base, variant === "ghost" ? ghost : primary, className);
}

// <BUTTON> UI SECTION
export const Button: React.FC<ButtonProps> = ({ variant = "primary", className, ...rest }) => (
  <button className={classes(variant, className)} {...rest} />
);
export default Button;
