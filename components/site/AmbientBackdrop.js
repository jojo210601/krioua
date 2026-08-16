export default function AmbientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-terracotta/25 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-sage/25 blur-[130px] animate-float-slower" />
      <div className="absolute bottom-0 left-1/3 h-[520px] w-[520px] rounded-full bg-brownLight/30 blur-[130px] animate-float-slow" />
      <div className="noise-overlay" />
    </div>
  );
}
