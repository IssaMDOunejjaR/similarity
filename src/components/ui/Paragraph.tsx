import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const paragraphVariants = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
      },
      defaultVariants: {
        size: "default",
      },
    },
  }
);

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(paragraphVariants({ size, className }))}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
