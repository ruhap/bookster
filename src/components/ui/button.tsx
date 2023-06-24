import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ComponentProps<"button"> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return <button className={cn("", { className })} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";
