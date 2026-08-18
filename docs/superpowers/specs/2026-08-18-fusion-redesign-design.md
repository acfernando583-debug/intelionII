# Fusión de diseño Axion + Prisma para Intelion — Spec

## Contexto

El sitio (React + Vite + Tailwind, `intelion-landing`) fue construido aplicando dos plantillas de
diseño distintas a medio terminar:

- **Axion Studio** (claro, acento naranja `#F26522`, botones con animación "text-roll", navbar
  píldora blanca): ya aplicado correctamente en `Navbar.tsx` y `BackedBySection.tsx`, con el
  contenido real de Intelion (menú Nosotros/Soluciones/Proceso/Tecnología/Contacto).
- **Prisma** (oscuro, Almarai + Instrument Serif, color crema `#DEDBC8`, componentes
  `WordsPullUp`): aplicado en `HeroParts.tsx` e `InfoSection.tsx`, pero `HeroSection` conserva
  texto de relleno de la plantilla original (nav en inglés duplicado, título "Prisma", botón
  "Join the lab", descripción de estudio de artistas).

Además, `FeaturesSection.tsx` tiene contenido de un estudio de cine ("Project Storyboard",
"Smart Critiques", "Immersion Capsule") sin relación con energía solar — un bug de contenido, no
una decisión de diseño.

**Objetivo:** fusionar ambos lenguajes visuales en un sistema de diseño coherente para todo el
sitio, sin inventar copy nuevo ni tocar menús — reutilizando el texto real que ya existe en el
código (verificado contra `docs/Brochure Intelion (1).pdf` y
`docs/Presentación farmacéutica intelion.pdf`, extraídos con `pdftotext`).

**No-objetivos:** no se cambia ningún texto de menú, ningún copy que ya sea correcto y esté en
español sobre energía solar, ni la estructura de secciones en `App.tsx`.

## Fuente de verdad del contenido

`pdftotext -layout` sobre el brochure confirma que el copy ya presente en `InfoSection.tsx`,
`ServicesSection.tsx`, `TestimonialCarousel.tsx` (carrusel de tecnología/productos),
`ProjectsSection.tsx`, `PartnerSection.tsx`, `Footer.tsx`, `Navbar.tsx` y `BackedBySection.tsx`
coincide con el brochure real. Esas secciones **no necesitan cambio de contenido**, solo de
diseño donde aplique.

Dos huecos identificados, a rellenar con frases que **ya existen textualmente en otra parte del
código o en el brochure** (sin inventar copy nuevo):

- Portada del brochure: "ENERGÍA SOLAR INTELIGENTE" / "Diseño, instalación y mantenimiento de
  sistemas solares seguros y confiables" → usado para el Hero.
- Sección "NUESTROS SERVICIOS" del brochure (Sistemas con almacenamiento / Instalación y puesta
  en marcha / Operación y mantenimiento, cada una con sus viñetas) → usado para `FeaturesSection`.

## Sistema de diseño unificado

### Color de acento único

Un solo acento en todo el sitio: **naranja Intelion `#F26522`** (hover `#e05a1a`, variante
degradado `#E8704E`). El crema `#DEDBC8` / `#E1E0CC` deja de usarse como acento y queda
únicamente como **color de texto** sobre fondos oscuros (nunca como color interactivo, de ícono
o de borde de énfasis).

Regla de aplicación:
- Texto en cursiva serif de énfasis (patrón ya usado en `InfoSection` para "espíritu"): pasa de
  `text-primary` a `text-[#F26522]`.
- Iconos, bullets, badges, bordes hover, dots de estado: naranja.
- Texto de titulares/cuerpo sobre fondo oscuro: crema/blanco (sin cambio).

### Bandas claro/oscuro

Se mantiene y se ordena el ritmo alternado ya presente en el sitio (no se aplana a un solo tema):

- **Banda oscura** (Almarai + Instrument Serif itálica de acento, fondo negro/`#0a0a0f`/`#101010`,
  texto crema, acento naranja): Hero, InfoSection, FeaturesSection, GallerySection,
  ServicesSection, Footer/CopyrightBar.
- **Banda clara** (fondo blanco/`#F5F5F5`, texto gray-900/gray-600, acento naranja): Navbar,
  BackedBySection, UseCasesSection, PricingSection (pasos del proceso), TestimonialCarousel
  (carrusel de tecnología), ProjectsSection, PartnerSection.
- `BottomNav` queda neutral (píldora flotante blanca), independiente de la banda que tenga debajo.

Cambio concreto necesario: `GallerySection.tsx` y `ServicesSection.tsx` ya son oscuras con acento
naranja — sin cambio. El único desajuste real de acento está en los botones `Button` (crema) usados
en `PartnerSection`, `Footer` y `BottomNav`.

### Sistema de botón único

Se retira el componente `Button` (fondo crema) de `HeroParts.tsx` en favor del componente
`CtaButton`/`TextRoll` ya construido en `Navbar.tsx` (animación de texto rotando + flecha en
círculo que gira -45°). `CtaButton` ya soporta variantes `dark` (píldora gris-900, para banda
clara) y `orange` (píldora naranja, para CTAs de énfasis).

Se mueve `CtaButton`/`TextRoll`/`LondonClock` de `BackedBySection.tsx` a un nuevo módulo
compartido `src/components/Buttons.tsx`, importado desde `Navbar.tsx`, `BackedBySection.tsx`,
`HeroParts.tsx`, `Footer.tsx`, `PartnerSection.tsx` y `BottomNav.tsx`. Se actualizan los usos de
`Button` en esos últimos 4 archivos a `CtaButton` (variante `orange` para CTAs primarios, `dark`
para secundarios), conservando el texto exacto de cada botón. El componente `Button` y `LogoIcon`
en `HeroParts.tsx` quedan reducidos a solo `LogoIcon` (sigue en uso por `Footer`/`BottomNav`).

## Cambios por sección

### HeroParts.tsx — `HeroSection` (contenido + estructura)

- Eliminar el `<nav>` interno duplicado (el `Navbar` global de `App.tsx` ya lo cubre).
- Título gigante (`WordsPullUp`, misma animación): "Energía Solar Inteligente", con la palabra
  "Inteligente" en `text-[#F26522] font-serif italic` (mismo patrón que `InfoSection`).
- Párrafo descripción (columna derecha): reemplazar el texto de Prisma por el copy ya usado en
  `InfoSection.tsx`: "Diseño, instalación y mantenimiento de sistemas de energía solar
  fotovoltaica, enfocada en brindar soluciones seguras, eficientes y personalizadas para hogares,
  edificios e industria."
- CTA: reemplazar "Join the lab" por `CtaButton` variante `orange` con texto "Solicitar
  diagnóstico" (frase ya usada en `ServicesSection` y `PartnerSection`).
- Se mantiene: video de fondo, `noise-overlay`, gradiente, layout de grid inferior, animación
  `WordsPullUp`.

### FeaturesSection.tsx (contenido, mismo layout/diseño)

Mantener el layout (video + 3 tarjetas con checklist) y las animaciones tal cual. Reemplazar
únicamente el contenido:

- Header (`WordsPullUpMultiStyle`): de "Soluciones de estudio para creadores visionarios" a dos
  segmentos tomados del brochure ("TECNOLOGÍA CONFIABLE PARA SOLUCIONES EFICIENTES"): segmento 1
  `"Tecnología confiable para"` (crema, `font-normal`) + segmento 2 `"soluciones eficientes."`
  (naranja, mismo tratamiento que el resto de acentos).
- Tarjeta video: título "Tu proyecto, en marcha." en vez de "Your creative canvas." (mismo tono
  breve, video ya existente).
- Tarjeta 01 "Sistemas con Almacenamiento" — viñetas del brochure: "Integración de baterías de
  respaldo", "Soluciones para continuidad energética", "Optimización del autoconsumo".
- Tarjeta 02 "Instalación y Puesta en Marcha" — viñetas: "Integración de inversores y
  estructuras", "Pruebas, configuración y arranque", "Sistemas conectados a red, híbridos y
  aislados".
- Tarjeta 03 "Operación y Mantenimiento" — viñetas: "Monitoreo del rendimiento del sistema",
  "Diagnóstico y optimización", "Soporte técnico especializado".
- Botón "Learn more" → "Conocer más" (idéntico al resto del sitio).

Se evita duplicar literalmente las 6 tarjetas de `ServicesSection` — se usan ángulos/viñetas
distintas del mismo brochure.

### BackedBySection.tsx (diseño: fondo con shader)

Añadir un fondo animado sutil usando `shaders/react`:

```tsx
import { Shader, Swirl, FilmGrain } from "shaders/react";
```

- `<Shader>` como contenedor absoluto (`inset-0`, detrás del contenido, `pointer-events-none`),
  con `onUnavailable` que activa un fallback (el `radial-gradient`/patrón de puntos que ya existe
  hoy en la sección, que se conserva como capa estática por debajo siempre — así nunca hay una
  sección en blanco si el navegador no soporta WebGPU).
- `<Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />` (tonos neutros del propio fondo
  `#F5F5F5`, no se introduce color nuevo).
- `<FilmGrain strength={0.05} />` encima, para el grano sutil del prompt Axion.
- Se omiten `ChromaFlow` y `FlutedGlass` (más pesados/experimentales) para mantener el riesgo
  técnico bajo, tal como se acordó.
- El contenido (marquee de marcas, texto) queda en una capa `relative z-10` encima, sin cambios
  de texto.

### Resto de secciones (solo verificación, sin cambio esperado)

`InfoSection`, `GallerySection`, `ServicesSection`, `UseCasesSection`, `PricingSection`,
`TestimonialCarousel`, `ProjectsSection`, `Footer`, `CopyrightBar`: ya usan naranja como acento y
contenido real correcto. Solo se tocan si al aplicar el `CtaButton` unificado (ver arriba) queda
algún `Button` crema suelto, o si se detecta algún resto de `text-primary`/`bg-primary` usado
como acento (a auditar con grep durante la implementación).

## Verificación

- `npm run build` (TypeScript + Vite) sin errores.
- `npm run lint`.
- Levantar `npm run dev` y revisar visualmente cada sección (banda clara/oscura consistente, un
  solo acento, botones con animación text-roll, Hero sin nav duplicado y con copy real, Features
  con copy solar).
- Confirmar que ningún texto de menú ni copy ya correcto cambió (diff visual contra el estado
  actual, sección por sección).
- Probar `BackedBySection` con y sin soporte WebGPU (forzar `onUnavailable` o revisar en un
  navegador sin WebGPU) para confirmar que el fallback estático se ve bien.
