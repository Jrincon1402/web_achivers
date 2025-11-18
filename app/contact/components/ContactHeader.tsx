/**
 * Header de la página Contact
 */
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { translations } from "@/config/i18n";

export function ContactHeader() {
  const t = translations.es;
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (headerRef.current) {
            const scrolled = window.scrollY;
            const parallax = Math.min(scrolled * 0.3, 100);
            headerRef.current.style.transform = `translateY(${parallax}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mb-16 text-center">
      <div 
        ref={headerRef}
        className="relative mx-auto mb-8 h-80 w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000"
      >
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=600&fit=crop"
          alt="Contacto"
          fill
          className="object-cover scale-110 transition-transform duration-700 hover:scale-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-pulse" />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-white space-y-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <h1 className="mb-3 text-5xl md:text-6xl font-bold tracking-tight animate-in fade-in zoom-in-95 duration-700 delay-500">
            {t.contact.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
            {t.contact.description}
          </p>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full animate-in slide-in-from-left-8 duration-1000 delay-1000" />
        </div>
      </div>
    </div>
  );
}

