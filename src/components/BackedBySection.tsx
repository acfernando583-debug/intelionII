import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { useParallax } from "../hooks/useParallax";

const BACKERS = [
  { name: "Risen", style: { fontFamily: "Arial, sans-serif", fontWeight: 700, letterSpacing: "0.02em", fontSize: "16px" } },
  { name: "Canadian Solar", style: { fontFamily: "Arial, sans-serif", fontWeight: 800, letterSpacing: "0.04em", fontSize: "15px" } },
  { name: "ZNShine Solar", style: { fontFamily: "Arial, sans-serif", fontWeight: 700, letterSpacing: "0.02em", fontSize: "14px" } },
  { name: "Victron Energy", style: { fontFamily: "Arial, sans-serif", fontWeight: 700, letterSpacing: "0.03em", fontSize: "15px" } },
  { name: "Dyness", style: { fontFamily: "Arial, sans-serif", fontWeight: 800, letterSpacing: "0.04em", fontSize: "16px" } },
  { name: "Pylontech", style: { fontFamily: "Arial, sans-serif", fontWeight: 700, letterSpacing: "0.02em", fontSize: "15px" } },
  { name: "Must", style: { fontFamily: "Arial, sans-serif", fontWeight: 800, letterSpacing: "0.05em", fontSize: "16px" } },
];

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
        <div className="text-center mb-14">
          <div className={`inline-flex items-center gap-3 mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            <span className="text-[#F26522] text-xl">★</span>
            <span className="text-gray-900 text-sm font-semibold tracking-wider uppercase">Marcas</span>
          </div>
          <p
            className={`text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Certificadas que nos respaldan y garantizan la más alta calidad en cada componente.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="backers-track">
            {[...BACKERS, ...BACKERS].map((backer, i) => (
              <span
                key={i}
                className="mx-10 shrink-0 text-gray-600 whitespace-nowrap hover:text-gray-900 transition-all duration-300 hover:scale-105 inline-block"
                style={backer.style}
              >
                {backer.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
