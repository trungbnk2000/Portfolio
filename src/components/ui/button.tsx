import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-10 items-center justify-center gap-2 rounded-[2px] px-5 text-xs font-semibold uppercase tracking-[0.018em] transition focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#004e4e] text-white hover:bg-[#063f3f] focus-visible:outline-[#004e4e]",
        secondary:
          "border border-[#3f322a] bg-white text-[#3f322a] hover:bg-[#fff9ee] focus-visible:outline-[#004e4e]",
        ghost:
          "text-[#3f322a] underline-offset-4 hover:underline focus-visible:outline-[#004e4e]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  );
}
