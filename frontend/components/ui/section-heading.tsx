type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-2">
      {eyebrow && <p className="text-xs uppercase tracking-[0.35em] text-accent/80">{eyebrow}</p>}
      <h1 className="text-3xl font-semibold uppercase tracking-tightestTech md:text-4xl">{title}</h1>
      {subtitle && <p className="max-w-2xl text-sm text-muted">{subtitle}</p>}
    </div>
  );
}
