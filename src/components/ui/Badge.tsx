import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full",
        "border border-hult-pink/20",
        "bg-hult-pink-pale",
        "px-3 py-1.5",
        "text-xs font-bold uppercase tracking-[0.14em]",
        "text-hult-pink-dark",
        className
      )}
    >
      {children}
    </span>
  );
}