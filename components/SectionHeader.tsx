type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
};

export function SectionHeader({ eyebrow, title, copy, light }: SectionHeaderProps) {
  return (
    <div>
      <p className={light ? "eyebrow text-gold" : "eyebrow"}>{eyebrow}</p>
      <h2 className={light ? "section-title text-white" : "section-title"}>
        {title}
      </h2>
      {copy ? (
        <p className={light ? "section-copy text-slate-200" : "section-copy"}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
