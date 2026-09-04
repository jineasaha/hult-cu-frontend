import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "px-6 py-3",
    "text-sm font-bold",
    "transition-all duration-200",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-hult-pink",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-hult-pink text-white",
          "hover:bg-hult-pink-dark",
          "hover:-translate-y-0.5",
        ],

        secondary: [
          "bg-hult-pink-pale text-charcoal",
          "hover:bg-hult-pink-light",
        ],

        outline: [
          "border border-hult-pink bg-transparent text-hult-pink",
          "hover:bg-hult-pink-pale",
        ],

        dark: [
          "bg-charcoal text-white",
          "hover:bg-navy",
          "hover:-translate-y-0.5",
        ],
      },

      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3",
        lg: "px-7 py-4 text-base",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

/* ---------- Shared styling props ---------- */

type ButtonStyleProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: ReactNode;
};

/* ---------- Normal button ---------- */

type NativeButtonProps = ButtonStyleProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof ButtonStyleProps
  > & {
    href?: never;
  };

/* ---------- Link button ---------- */

type LinkButtonProps = ButtonStyleProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof ButtonStyleProps
  > & {
    href: string;
  };

/* ---------- Final props ---------- */

type ButtonProps = NativeButtonProps | LinkButtonProps;

/* ---------- Type guard ---------- */

function isLinkButton(
  props: ButtonProps
): props is LinkButtonProps {
  return props.href !== undefined;
}

/* ---------- Component ---------- */

export function Button(props: ButtonProps) {
  if (isLinkButton(props)) {
    const {
      href,
      variant,
      size,
      className,
      children,
      ...linkProps
    } = props;

    const classes = cn(
      buttonVariants({
        variant,
        size,
      }),
      className
    );

    return (
      <Link
        href={href}
        className={classes}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const {
    variant,
    size,
    className,
    children,
    ...buttonProps
  } = props;

  const classes = cn(
    buttonVariants({
      variant,
      size,
    }),
    className
  );

  return (
    <button
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
}