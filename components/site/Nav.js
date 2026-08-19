'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/site';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5">
      <div className="container">
        <div className="glass rounded-full pl-3 pr-4 sm:pr-6 py-2.5 flex items-center justify-between">
          <Link href="/" aria-label={SITE.name} className="flex items-center -my-7">
            <Image
              src="/Unknown.png"
              alt="Krioua"
              width={180}
              height={180}
              priority
              className="h-32 w-32 sm:h-36 sm:w-36 object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));
              return (
                <Link key={l.href} href={l.href}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    active ? 'text-inkDark bg-white/60' : 'text-inkDark/70 hover:text-inkDark hover:bg-white/50'
                  }`}>
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="btn-pill btn-primary hidden sm:inline-flex text-[13px] py-2.5 px-5">
              Prendre rendez-vous <ArrowRight className="h-4 w-4" />
            </Link>
            <button onClick={() => setOpen(v => !v)} aria-label="Menu"
              className="lg:hidden h-10 w-10 rounded-full glass flex items-center justify-center">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-3xl p-4">
            <div className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="px-4 py-3 rounded-2xl text-sm hover:bg-white/60">{l.label}</Link>
              ))}
              <Link href="/contact" className="btn-pill btn-primary mt-2 justify-center">
                Prendre rendez-vous <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
