# Fusión de diseño Axion + Prisma para Intelion — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Unify the two half-applied design languages (Axion Studio light/orange, Prisma dark/cream) already present in this React + Vite + Tailwind landing page into one coherent system — single orange accent, consistent light/dark section banding, one shared button component — and fix the two spots where placeholder text leaked in (`HeroSection`, `FeaturesSection`), replacing it with real Intelion copy that already exists elsewhere in the codebase or in `docs/Brochure Intelion (1).pdf`.

**Architecture:** No new sections, no routing, no state management changes. This is a targeted content + Tailwind class edit pass across ~8 existing component files, plus one new shared component file (`src/components/Buttons.tsx`) extracted from `Navbar.tsx` so the CTA button pattern can be reused sitewide.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS v4 (via `@tailwindcss/vite`), `framer-motion`, `lucide-react`, `shaders` (`shaders/react`: `Shader`, `Swirl`, `FilmGrain`).

## Global Constraints

- Do not change any menu item text, any nav link label, or any copy that is already correct Spanish/Intelion content. Only touch the specific strings called out in each task below.
- Single accent color across the whole site: `#F26522` (hover `#e05a1a`). Never introduce a new color; always use this exact hex via Tailwind arbitrary-value classes (`text-[#F26522]`, `bg-[#F26522]`, etc.) to match the convention already used in `GallerySection.tsx` / `ServicesSection.tsx` / `UseCasesSection.tsx`.
- The Tailwind `primary` token (`#DEDBC8`, defined in `tailwind.config.js`) stays as-is and keeps being used, but **only** for body/heading text color on dark backgrounds — never for buttons, icons, active states, badges, or borders.
- No new npm dependencies. `framer-motion`, `lucide-react`, and `shaders` are already in `package.json`.
- After every task: run `npm run build` (must exit 0) before committing.

---

### Task 1: Extract shared `CtaButton`/`TextRoll`/`LondonClock` into `src/components/Buttons.tsx`

**Files:**
- Create: `src/components/Buttons.tsx`
- Modify: `src/components/Navbar.tsx`

**Interfaces:**
- Produces: `CtaButton({ text: string, variant?: "dark" | "orange", className?: string })`, `TextRoll({ text: string, className?: string })`, `LondonClock()` — all exported from `src/components/Buttons.tsx`. Tasks 2, 3, 4, 5 import `CtaButton` from this file.

- [ ] **Step 1: Create `src/components/Buttons.tsx`**

```tsx
import { useState, useEffect } from "react";
import { ArrowRight, Clock } from "lucide-react";

function getLondonTime() {
  return new Date().toLocaleTimeString("en-GB", {
    timeZone: "Europe/London",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function LondonClock() {
  const [time, setTime] = useState(getLondonTime());

  useEffect(() => {
    const interval = setInterval(() => setTime(getLondonTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex items-center gap-1.5 text-gray-600">
      <Clock size={14} />
      <span className="text-[13px]">{time} en Londres</span>
    </div>
  );
}

export function TextRoll({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`relative inline-flex flex-col overflow-hidden h-[20px] ${className}`}>
      <span className="group-hover:-translate-y-1/2 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
        <span className="block h-[20px] leading-[20px]">{text}</span>
        <span className="block h-[20px] leading-[20px]">{text}</span>
      </span>
    </span>
  );
}

export function CtaButton({
  text,
  variant = "dark",
  className = "",
}: {
  text: string;
  variant?: "dark" | "orange";
  className?: string;
}) {
  const bgColor = variant === "dark" ? "bg-gray-900" : "bg-[#F26522]";
  const hoverBg = variant === "dark" ? "hover:bg-gray-800" : "hover:bg-[#e05a1a]";
  const arrowColor = variant === "dark" ? "text-gray-900" : "text-[#F26522]";
  const sizeClasses = variant === "dark" ? "pl-5 pr-2 py-2" : "pl-5 sm:pl-6 pr-2 py-2";
  const circleSize = variant === "dark" ? "w-6 h-6" : "w-7 h-7 sm:w-8 sm:h-8";
  const arrowSize = variant === "dark" ? 14 : 16;

  return (
    <button
      className={`group inline-flex items-center ${bgColor} ${hoverBg} ${sizeClasses} text-white text-[13px] font-medium rounded-full transition-colors duration-300 ${className}`}
    >
      <span className="relative inline-flex flex-col overflow-hidden h-[20px] mr-1">
        <span className="group-hover:-translate-y-1/2 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
          <span className="block h-[20px] leading-[20px]">{text}</span>
          <span className="block h-[20px] leading-[20px]">{text}</span>
        </span>
      </span>
      <span
        className={`inline-flex items-center justify-center bg-white rounded-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 ${circleSize}`}
      >
        <ArrowRight size={arrowSize} className={arrowColor} />
      </span>
    </button>
  );
}
```

- [ ] **Step 2: Update `src/components/Navbar.tsx` to import from `Buttons.tsx` instead of defining locally, and unify the nav-link hover color to orange**

Replace the entire file content with:

```tsx
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { CtaButton, LondonClock } from "./Buttons";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative z-20 w-full">
        <div className="max-w-[1440px] mx-auto p-2 sm:p-3">
          <div className="bg-white rounded-full px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] sm:text-[11px] font-bold tracking-tight">AX</span>
              </div>
              <div className="hidden md:flex items-center gap-4 lg:gap-6">
                {["Nosotros", "Soluciones", "Proceso", "Tecnología", "Contacto"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-[14px] text-gray-900 hover:text-[#F26522] transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span className="text-[13px] text-gray-600 hidden xl:block">
                Proyectos disponibles para 2026
              </span>
              <LondonClock />
              <CtaButton text="Solicitar diagnóstico" variant="dark" />
            </div>
            <button
              className="md:hidden bg-gray-900 rounded-full p-2 text-white"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl mx-3 mb-3 p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            menuOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <div className="bg-gray-100 rounded-full px-3 py-1.5">
              <span className="text-[13px] text-gray-600 font-medium">
                {new Date().toLocaleTimeString("en-GB", { timeZone: "Europe/London", hour: "2-digit", minute: "2-digit" })} en Londres
              </span>
            </div>
            <button
              className="bg-gray-900 rounded-full p-2 text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-6 mb-8">
            {["Nosotros", "Soluciones", "Proceso", "Tecnología", "Contacto"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[28px] leading-[32px] font-medium text-gray-900 hover:text-[#F26522] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
          <button className="w-full bg-[#F26522] hover:bg-[#e05a1a] text-white text-[15px] font-medium rounded-full py-4 flex items-center justify-center gap-2 transition-colors duration-300">
            Iniciar proyecto
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </>
  );
}
```

Note: the mobile-menu clock badge now computes the time inline instead of calling the old local `getLondonTime()` (which no longer lives in this file) — same output, same format.

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: exits 0, no TypeScript errors (in particular, no "Cannot find module './Buttons'" and no unused-import errors).

- [ ] **Step 4: Commit**

```bash
git add src/components/Buttons.tsx src/components/Navbar.tsx
git commit -m "Extract CtaButton/TextRoll/LondonClock into shared Buttons.tsx"
```

---

### Task 2: Fix `HeroSection` — remove duplicate nav, replace placeholder copy with real Intelion content

**Files:**
- Modify: `src/components/HeroParts.tsx`

**Interfaces:**
- Consumes: `CtaButton` from `src/components/Buttons.tsx` (Task 1).
- Produces: `LogoIcon` (unchanged, still exported — consumed by `Footer.tsx` and `BottomNav.tsx`), `HeroSection` (unchanged export name, consumed by `App.tsx`), `QuoteSection` (unchanged, currently unused/dead code — leave it exactly as-is, do not delete, it is out of scope since it isn't rendered by `App.tsx`).

- [ ] **Step 1: Replace the file content**

Replace the entire content of `src/components/HeroParts.tsx` with:

```tsx
import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { Quote } from "lucide-react";
import { WordsPullUpMultiStyle } from "./TextReveal";
import { CtaButton } from "./Buttons";


export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/intelion-logo.png"
      alt="INTELION"
      className={className}
    />
  );
}

const heroHeadlineSegments = [
  { text: "Energía Solar", className: "" },
  { text: "Inteligente", className: "text-[#F26522] font-serif italic" },
];

export function HeroSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section ref={ref} className="relative h-screen bg-black overflow-hidden p-4 md:p-6">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise overlay */}
        <div className="noise-overlay" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 lg:px-10 pb-10">
          <div className="grid grid-cols-12 gap-4 lg:gap-8 items-end">
            {/* Left column - Heading */}
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] relative"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUpMultiStyle segments={heroHeadlineSegments} />
              </h1>
            </div>

            {/* Right column - Description + CTA */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2] max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Diseño, instalación y mantenimiento de sistemas de energía solar fotovoltaica, enfocada en brindar soluciones seguras, eficientes y personalizadas para hogares, edificios e industria.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <CtaButton text="Solicitar diagnóstico" variant="orange" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function QuoteSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section ref={ref} className="py-24 px-6 max-w-5xl mx-auto relative overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="relative">
        <motion.div
          className={`${inView ? "opacity-100" : "opacity-0"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <Quote className="w-8 h-8 text-primary mb-6" />
        </motion.div>
        <motion.h2
          className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-primary tracking-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ color: "#E1E0CC" }}
        >
          Nuestra misión es transformar el consumo energético de hogares, edificios e industria mediante{" "}
          <span className="text-primary">soluciones solares inteligentes</span>, confiables y sostenibles.
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Combinamos ingeniería, tecnología y un enfoque cercano al cliente para convertir el recurso solar en ahorro energético, eficiencia operativa y sostenibilidad a largo plazo. Un solo aliado para todo el ciclo de su sistema solar.
        </motion.p>
      </div>
    </section>
  );
}
```

Notes on what changed vs. what didn't:
- Removed: the internal `<nav>` block (duplicate of the global `Navbar`), the old `Button` component definition, the `ArrowRight` import (no longer used directly in this file — `CtaButton` owns its own arrow icon).
- Changed: headline now uses `WordsPullUpMultiStyle` with real copy ("Energía Solar Inteligente", accent word in orange italic serif) instead of "Prisma" + asterisk; description paragraph is the real Intelion copy already used verbatim in `InfoSection.tsx`; CTA is `CtaButton` with "Solicitar diagnóstico" (same phrase already used in `ServicesSection.tsx` / `PartnerSection.tsx`).
- Unchanged: video background, noise overlay, gradient overlay, outer layout/grid, `LogoIcon`, `QuoteSection` (dead code, left untouched, out of scope).

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 3: Verify no duplicate nav and no leftover placeholder strings**

Run: `grep -n "Our story\|Collective\|Workshops\|Programs\|Inquiries\|Join the lab\|<nav" src/components/HeroParts.tsx`
Expected: no output (empty).

- [ ] **Step 4: Commit**

```bash
git add src/components/HeroParts.tsx
git commit -m "Fix HeroSection: remove duplicate nav, replace placeholder copy with real Intelion content"
```

---

### Task 3: Migrate `PartnerSection.tsx` off the retired `Button` component

**Files:**
- Modify: `src/components/PartnerSection.tsx`

**Interfaces:**
- Consumes: `CtaButton` from `src/components/Buttons.tsx` (Task 1).

- [ ] **Step 1: Update imports and the button row**

Old:
```tsx
import { Leaf } from "lucide-react";
import { Button } from "./HeroParts";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
```

New:
```tsx
import { Leaf } from "lucide-react";
import { CtaButton } from "./Buttons";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
```

Old:
```tsx
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" arrow className="mx-auto">
              Solicitar diagnóstico gratuito
            </Button>
            <Button
              variant="secondary"
              className="mx-auto"
            >
              Llamar ahora
            </Button>
          </div>
```

New:
```tsx
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CtaButton text="Solicitar diagnóstico gratuito" variant="orange" />
            <button className="border border-gray-900/15 text-gray-900 hover:bg-white text-[13px] sm:text-[14px] font-medium rounded-full px-6 py-3 transition-colors duration-300">
              Llamar ahora
            </button>
          </div>
```

(Both button texts are unchanged — "Solicitar diagnóstico gratuito" and "Llamar ahora" — only the markup/component changes.)

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: exits 0, no "Button is not exported" or unused-import errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/PartnerSection.tsx
git commit -m "Migrate PartnerSection to shared CtaButton"
```

---

### Task 4: Migrate `Footer.tsx` off the retired `Button` component

**Files:**
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: `CtaButton` from `src/components/Buttons.tsx` (Task 1), `LogoIcon` from `src/components/HeroParts.tsx` (unchanged).

- [ ] **Step 1: Update imports and the CTA button**

Old:
```tsx
import { Button } from "./HeroParts";
import { LogoIcon } from "./HeroParts";
```

New:
```tsx
import { LogoIcon } from "./HeroParts";
import { CtaButton } from "./Buttons";
```

Old:
```tsx
            <Button variant="primary" className="px-7 py-3 text-base">
              Contactar
            </Button>
```

New:
```tsx
            <CtaButton text="Contactar" variant="orange" />
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "Migrate Footer to shared CtaButton"
```

---

### Task 5: Migrate `BottomNav.tsx` off the retired `Button` component

**Files:**
- Modify: `src/components/BottomNav.tsx`

**Interfaces:**
- Consumes: `CtaButton` from `src/components/Buttons.tsx` (Task 1), `LogoIcon` from `src/components/HeroParts.tsx` (unchanged).

- [ ] **Step 1: Replace the file content**

```tsx
import { LogoIcon } from "./HeroParts";
import { CtaButton } from "./Buttons";

export function BottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-xl rounded-full px-8 py-3 shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)] border border-white/50">
      <div className="flex items-center gap-4">
        <LogoIcon className="w-10 h-10" />
        <CtaButton text="Contactar" variant="dark" />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 3: Verify `Button` has no remaining consumers before it gets removed in a later step**

Run: `grep -rn "from \"./HeroParts\"" src/components | grep -v "LogoIcon"`
Expected: no output (empty) — confirms `Button` is no longer imported anywhere except possibly still being exported unused from `HeroParts.tsx`, which Task 2 already removed. If this prints anything, stop and check that file before continuing.

- [ ] **Step 4: Commit**

```bash
git add src/components/BottomNav.tsx
git commit -m "Migrate BottomNav to shared CtaButton"
```

---

### Task 6: Recolor `InfoSection.tsx` accents from cream to the single orange accent

**Files:**
- Modify: `src/components/InfoSection.tsx`

**Interfaces:**
- None (self-contained styling + one label-text fix).

The body paragraph (real Intelion description, currently `text-primary`) stays cream — it's body text, not an accent, and is out of scope. Every other `primary`-colored element in this file is an interactive/accent element and must become `#F26522`. Apply these edits:

- [ ] **Step 1: Fix the eyebrow label (also a leftover Prisma placeholder, not real Intelion content)**

Old:
```tsx
            <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase">Visual arts</span>
```

New:
```tsx
            <span className="text-[#F26522] text-[10px] sm:text-xs tracking-widest uppercase">Quiénes somos</span>
```

- [ ] **Step 2: Fix the accent word in the heading segments**

Old:
```tsx
    { text: "espíritu", className: "text-primary font-serif italic" },
```

New:
```tsx
    { text: "espíritu", className: "text-[#F26522] font-serif italic" },
```

- [ ] **Step 3: Fix the gallery timeline dots (active state)**

Old:
```tsx
                    className={`relative h-px flex-1 transition-all duration-500 ${
                      selectedImage === idx 
                        ? "bg-primary" 
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                  >
                    <span className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full transition-all duration-300 ${
                      selectedImage === idx 
                        ? "bg-primary scale-125" 
                        : "bg-white/40 scale-100"
                    }`} />
```

New:
```tsx
                    className={`relative h-px flex-1 transition-all duration-500 ${
                      selectedImage === idx 
                        ? "bg-[#F26522]" 
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                  >
                    <span className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full transition-all duration-300 ${
                      selectedImage === idx 
                        ? "bg-[#F26522] scale-125" 
                        : "bg-white/40 scale-100"
                    }`} />
```

- [ ] **Step 4: Fix the thumbnail active ring and overlay**

Old:
```tsx
                    className={`relative flex-1 aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedImage === idx
                        ? "ring-1 ring-primary/60"
                        : "opacity-40 hover:opacity-80"
                    }`}
```

New:
```tsx
                    className={`relative flex-1 aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedImage === idx
                        ? "ring-1 ring-[#F26522]/60"
                        : "opacity-40 hover:opacity-80"
                    }`}
```

Old:
```tsx
                    <div className={`absolute inset-0 transition-opacity duration-300 ${
                      selectedImage === idx 
                        ? "bg-primary/10 opacity-100" 
                        : "bg-black/20 opacity-0 hover:opacity-100"
                    }`} />
```

New:
```tsx
                    <div className={`absolute inset-0 transition-opacity duration-300 ${
                      selectedImage === idx 
                        ? "bg-[#F26522]/10 opacity-100" 
                        : "bg-black/20 opacity-0 hover:opacity-100"
                    }`} />
```

- [ ] **Step 5: Fix the two feature-card active states ("Nuestro ecosistema" and "Compromiso" cards) — same two blocks appear twice, identically**

Old (appears twice, identical both times):
```tsx
                  ? "bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30"
```

New (replace both occurrences):
```tsx
                  ? "bg-gradient-to-br from-[#F26522]/20 to-[#F26522]/10 border border-[#F26522]/30"
```

Old (appears twice, identical both times):
```tsx
                    ? "bg-primary text-black"
                    : "bg-white/10 text-primary"
```

New (replace both occurrences):
```tsx
                    ? "bg-[#F26522] text-black"
                    : "bg-white/10 text-[#F26522]"
```

- [ ] **Step 6: Fix the "Servicio Premium" card (icon container, Zap icon, "Nuevo" badge, Shield/Globe/Award icons, arrow button)**

Old:
```tsx
              <div className="w-24 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center overflow-hidden border border-white/10 flex-shrink-0">
                <Zap className="w-8 h-8 text-primary" />
              </div>
```

New:
```tsx
              <div className="w-24 h-16 rounded-xl bg-gradient-to-br from-[#F26522]/20 to-[#F26522]/10 flex items-center justify-center overflow-hidden border border-white/10 flex-shrink-0">
                <Zap className="w-8 h-8 text-[#F26522]" />
              </div>
```

Old:
```tsx
                  <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-medium tracking-wider uppercase">Nuevo</span>
```

New:
```tsx
                  <span className="px-2 py-0.5 rounded-full bg-[#F26522]/20 text-[#F26522] text-[10px] font-medium tracking-wider uppercase">Nuevo</span>
```

Old:
```tsx
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-primary" />
                    Garantía extendida
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-primary" />
                    Cobertura nacional
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-primary" />
                    Certificado
                  </span>
```

New:
```tsx
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#F26522]" />
                    Garantía extendida
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#F26522]" />
                    Cobertura nacional
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#F26522]" />
                    Certificado
                  </span>
```

Old:
```tsx
              <button className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all duration-300 flex-shrink-0">
```

New:
```tsx
              <button className="w-10 h-10 rounded-full bg-[#F26522]/20 flex items-center justify-center text-[#F26522] hover:bg-[#F26522] hover:text-black transition-all duration-300 flex-shrink-0">
```

- [ ] **Step 7: Verify no unintended `primary` accent usage remains**

Run: `grep -n "text-primary\|bg-primary\|ring-primary\|from-primary\|to-primary\|border-primary" src/components/InfoSection.tsx`
Expected: exactly one match — the body paragraph line (`<p className="text-primary text-xs sm:text-sm md:text-base leading-relaxed">`). If any other line appears, an edit was missed.

- [ ] **Step 8: Verify build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 9: Commit**

```bash
git add src/components/InfoSection.tsx
git commit -m "Recolor InfoSection accents from cream to the single orange accent"
```

---

### Task 7: Fix `FeaturesSection.tsx` content (replace film-studio placeholder with real Intelion copy) and recolor accents

**Files:**
- Modify: `src/components/FeaturesSection.tsx`

**Interfaces:**
- None (self-contained content + styling fix). Reuses the same image/video asset URLs already in the file (decorative stock assets, not text content, out of scope to replace).

- [ ] **Step 1: Replace the file content**

```tsx
import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { Check, ArrowRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "./TextReveal";

const features = [
  {
    id: "video",
    type: "video",
    title: "Tu proyecto, en marcha.",
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
  },
  {
    id: "almacenamiento",
    type: "card",
    number: "01",
    title: "Sistemas con Almacenamiento",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
    items: [
      "Integración de baterías de respaldo",
      "Soluciones para continuidad energética",
      "Optimización del autoconsumo"
    ]
  },
  {
    id: "instalacion",
    type: "card",
    number: "02",
    title: "Instalación y Puesta en Marcha",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
    items: [
      "Integración de inversores y estructuras",
      "Pruebas, configuración y arranque",
      "Sistemas conectados a red, híbridos y aislados"
    ]
  },
  {
    id: "mantenimiento",
    type: "card",
    number: "03",
    title: "Operación y Mantenimiento",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
    items: [
      "Monitoreo del rendimiento del sistema",
      "Diagnóstico y optimización",
      "Soporte técnico especializado"
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  })
};

export function FeaturesSection() {
  const { ref, inView } = useInViewAnimation();

  const headerSegments = [
    { text: "Tecnología confiable para", className: "" },
    { text: "soluciones eficientes.", className: "text-[#F26522]" }
  ];

  return (
    <section ref={ref} className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Noise overlay */}
      <div className="bg-noise" />

      <div className="relative z-10 max-w-[88rem] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
            <WordsPullUpMultiStyle segments={headerSegments} />
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#212121] group"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
            >
              {feature.type === "video" ? (
                <>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    src={feature.video}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <h3 className="text-xl font-normal" style={{ color: "#E1E0CC" }}>
                      {feature.title}
                    </h3>
                  </div>
                </>
              ) : (
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden mb-4">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title with number */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-[#F26522] text-xs font-mono">{feature.number}</span>
                    <h3 className="text-lg font-normal text-white tracking-tight">{feature.title}</h3>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {feature.items!.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                        <Check className="w-3.5 h-3.5 text-[#F26522] flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn more link */}
                  <button className="inline-flex items-center gap-2 text-sm text-white group-hover:text-[#F26522] transition-colors duration-300">
                    <span>Conocer más</span>
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify no film-studio placeholder text remains**

Run: `grep -n "Project Storyboard\|Smart Critiques\|Immersion Capsule\|Your creative canvas\|Learn more\|visioneri\|creative canvas" src/components/FeaturesSection.tsx`
Expected: no output (empty).

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: exits 0.

- [ ] **Step 4: Commit**

```bash
git add src/components/FeaturesSection.tsx
git commit -m "Replace FeaturesSection placeholder content with real Intelion copy from brochure"
```

---

### Task 8: Add the Axion-prompt shader flourish (`Swirl` + `FilmGrain`) to `BackedBySection.tsx`, with static fallback

**Files:**
- Modify: `src/components/BackedBySection.tsx`

**Interfaces:**
- Consumes: `Shader`, `Swirl`, `FilmGrain` from `shaders/react` (already in `package.json`, no install needed).

- [ ] **Step 1: Add the `useState` import and the shader layer**

Old (imports):
```tsx
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { useParallax } from "../hooks/useParallax";
```

New (imports):
```tsx
import { useState } from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { useParallax } from "../hooks/useParallax";
import { Shader, Swirl, FilmGrain } from "shaders/react";
```

Old (top of the component body):
```tsx
export function BackedBySection() {
  const { ref, inView } = useInViewAnimation();
  const parallaxStyle = useParallax(0.1);

  return (
    <section ref={ref} className="bg-[#F5F5F5] px-6 py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          transform: `translateY(${parallaxStyle}px)`,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='rgba(0,0,0,0.25)' opacity='0.9'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          opacity: 0.6,
        }}
      />

      <div className="max-w-[88rem] mx-auto relative">
```

New:
```tsx
export function BackedBySection() {
  const { ref, inView } = useInViewAnimation();
  const parallaxStyle = useParallax(0.1);
  const [shaderAvailable, setShaderAvailable] = useState(true);

  return (
    <section ref={ref} className="bg-[#F5F5F5] px-6 py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          transform: `translateY(${parallaxStyle}px)`,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='rgba(0,0,0,0.25)' opacity='0.9'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          opacity: 0.6,
        }}
      />

      {shaderAvailable && (
        <Shader
          className="absolute inset-0 w-full h-full pointer-events-none"
          onUnavailable={() => setShaderAvailable(false)}
        >
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <FilmGrain strength={0.05} />
        </Shader>
      )}

      <div className="max-w-[88rem] mx-auto relative">
```

The dot-pattern `div` (existing) stays exactly where it is, as the permanent static base layer described in the spec. The `Shader` block sits above it; if the browser can't run it, `onUnavailable` flips `shaderAvailable` to `false`, the block unmounts, and the dot pattern remains visible on its own — never a blank section.

Nothing else in this file changes (backers list, marquee markup, and all text stay identical).

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: exits 0. If it fails on `shaders/react` type resolution, run `grep -n "\"shaders\"" package.json` first to confirm the dependency is present (it should be, version `^3.1.455`) — do not add a new dependency, the import path is correct as written.

- [ ] **Step 3: Manual visual check**

Run: `npm run dev`, open the site, scroll to the "Marcas" section (BackedBySection). Confirm: the brand marquee still scrolls and reads correctly, and there's a very subtle animated white/off-white shimmer + grain behind it (not a loud or colored effect — `Swirl`'s colors are near-white on purpose, matching the section's own `#F5F5F5` background).

- [ ] **Step 4: Commit**

```bash
git add src/components/BackedBySection.tsx
git commit -m "Add subtle Swirl+FilmGrain shader background to BackedBySection with static fallback"
```

---

### Task 9: Full-site verification pass

**Files:** none (verification only).

- [ ] **Step 1: Confirm `Button` is fully retired**

Run: `grep -rn "export function Button\|from \"./HeroParts\" import.*Button\|{ Button" src/`
Expected: no output (empty) — `Button` no longer exists in `HeroParts.tsx` and nothing imports it.

- [ ] **Step 2: Confirm no stray accent-color leftovers outside the one allowed body-text usage**

Run: `grep -rn "text-primary\|bg-primary\|ring-primary\|from-primary\|to-primary\|border-primary" src/`
Expected: exactly 6 matching lines, all intentionally unchanged: 1 in `InfoSection.tsx` (the real description paragraph — body text, Task 6 leaves it as-is) and 5 in `HeroParts.tsx` inside the unused, unrendered `QuoteSection` (two `bg-primary/5` glow divs, the `Quote` icon, the h2, and the accent `span` — dead code, not rendered by `App.tsx`, out of scope). If any other file appears, or a different line count shows up, go back and fix it.

- [ ] **Step 3: Confirm no leftover placeholder text anywhere**

Run: `grep -rniE "prisma|our story|collective|workshops|inquiries|join the lab|storyboard|smart critiques|immersion capsule|visual arts" src/`
Expected: no output (empty).

- [ ] **Step 4: Full build and lint**

Run: `npm run build`
Expected: exits 0.

Run: `npm run lint`
Expected: exits 0 (or only pre-existing warnings unrelated to this change — do not introduce new lint errors).

- [ ] **Step 5: Manual walkthrough**

Run: `npm run dev`, open the site, and scroll through top to bottom confirming:
- Navbar: white pill, real menu (Nosotros/Soluciones/Proceso/Tecnología/Contacto), orange hover on links, dark CTA with text-roll + arrow animation.
- Hero: video background, no duplicate nav visible, giant "Energía Solar *Inteligente*" headline (orange italic accent word), real description, orange "Solicitar diagnóstico" CTA.
- InfoSection: dark card, "Quiénes somos" eyebrow label, orange accents on gallery dots/active cards/icons (no cream/beige interactive elements left).
- FeaturesSection: dark cards showing solar content (Sistemas con Almacenamiento / Instalación y Puesta en Marcha / Operación y Mantenimiento), "Conocer más" buttons.
- BackedBySection: subtle shimmer behind the brand marquee.
- Rest of the page (Gallery, Services, UseCases, Proceso, Tecnología, Projects, Partner, Footer, BottomNav): unchanged content, orange accent throughout, buttons using the text-roll/arrow-circle pattern.

- [ ] **Step 6: Commit (only if Step 5 surfaced fixes; otherwise this task has no commit)**

If any visual issue was found and fixed during the walkthrough, stage and commit it with a message describing the specific fix. If nothing needed fixing, this task ends at Step 5 with no additional commit.
