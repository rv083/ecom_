interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  copy?: string;
}

export function SectionHeader({ eyebrow, title, copy }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl text-forest md:text-5xl">{title}</h2>
      {copy ? <p className="mt-4 leading-7 text-moss">{copy}</p> : null}
    </div>
  );
}
