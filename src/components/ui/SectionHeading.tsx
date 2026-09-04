import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-hult-pink">
          {eyebrow}
        </p>
      )}

      <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-charcoal sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}