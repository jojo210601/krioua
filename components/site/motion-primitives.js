'use client';
import { motion } from 'framer-motion';

export const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: (i = 0) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function Reveal({ children, className, delay = 0, as: Tag = 'div' }) {
  const Comp = motion[Tag] || motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
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
      <Reveal delay={0.05}>
        <h1 className="display text-4xl md:text-5xl lg:text-6xl text-inkDark leading-[1.05] text-balance">{title}</h1>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-inkSoft text-lg leading-relaxed max-w-xl">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
