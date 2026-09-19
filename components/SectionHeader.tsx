type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
};

export function SectionHeader({ eyebrow, title, copy, light }: SectionHeaderProps) {
  return (
    <div>
      <p className={`eyebrow ${light ? "text-gold" : "text-steel"}`}>{eyebrow}</p>
      <h2 className={`section-title ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {copy ? (
        <p className={`section-copy ${light ? "text-slate-200" : "text-slate-700"}`}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
