'use client';

export const fadeUp = {
  hidden: {},
  visible: {},
};

export const stagger = {
  hidden: {},
  visible: {},
};

export function Reveal({ children, className, as: Tag = 'div' }) {
  const Comp = Tag || 'div';
  return <Comp className={className}>{children}</Comp>;
}

export function SectionHeader({ eyebrow, title, subtitle, center }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} mb-14`}>
      <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-inkSoft mb-4 ${center ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-taupe/50" /> {eyebrow}
      </div>
      <h1 className="display text-4xl md:text-5xl lg:text-6xl text-inkDark leading-[1.05] text-balance">{title}</h1>
      {subtitle && (
        <p className="mt-5 text-inkSoft text-lg leading-relaxed max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}
