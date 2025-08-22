// <CARD> IMPORT SECTION
import React from "react";
import { cn } from "./cn";

// <CARD> LOGIC SECTION
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  footer?: React.ReactNode;
}

// <CARD> UI SECTION
export const Card: React.FC<CardProps> = ({ title, footer, className, children, ...rest }) => (
  <div className={cn("rounded-2xl bg-white/5 ring-1 ring-white/10 p-5", className)} {...rest}>
    {title && <h3 className="text-lg font-semibold mb-2 text-white/90">{title}</h3>}
    <div className="text-sm text-white/80">{children}</div>
    {footer && <div className="mt-4 pt-3 border-t border-white/10">{footer}</div>}
  </div>
);
export default Card;
