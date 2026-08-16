'use client';
import { motion } from 'framer-motion';

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.35, ease: 'easeOut' },
  }),
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

export function Reveal({ children, className, delay = 0, as: Tag = 'div' }) {
  const Comp = motion[Tag] || motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </Comp>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, center }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} mb-14`}>
      <Reveal>
        <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-inkSoft mb-4 ${center ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-taupe/50" /> {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.03}>
        <h1 className="display text-4xl md:text-5xl lg:text-6xl text-inkDark leading-[1.05] text-balance">{title}</h1>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.06}>
          <p className="mt-5 text-inkSoft text-lg leading-relaxed max-w-xl">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
