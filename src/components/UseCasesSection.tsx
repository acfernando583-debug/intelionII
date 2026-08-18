import { ArrowRight, Home, Building2, Factory } from "lucide-react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { GeometricPattern } from "./GeometricPattern";

export function UseCasesSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section ref={ref} className="bg-white px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 90%, rgba(242,101,34,0.15) 0%, transparent 40%), radial-gradient(circle at 90% 10%, rgba(232,112,78,0.1) 0%, transparent 40%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <GeometricPattern type="hex-grid" color="rgba(0,0,0,0.15)" size={100} />
      </div>
      <div className="max-w-[88rem] mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div className="md:pr-8">
            <div className={`inline-block mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
              <span className="text-[#F26522] text-sm font-semibold tracking-wider uppercase">Soluciones</span>
            </div>
            <h2
              className={`text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] mb-6 tracking-tight text-gray-900 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ letterSpacing: "-0.04em", animationDelay: "0.15s" }}
            >
              Hogar, Edificio,<br />
              <span className="text-[#F26522]">Industria</span>
            </h2>
            <p
              className={`text-gray-600 text-base md:text-lg leading-relaxed max-w-md ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.25s" }}
            >
              Sistemas fotovoltaicos adaptados a cada necesidad, desde el autoconsumo residencial hasta proyectos de alta potencia industrial.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Hogar",
              description: "Reduce tu factura eléctrica, aumenta tu independencia energética y aporta al cuidado del medio ambiente. Opción de integración con baterías para respaldo ante cortes de red.",
              Icon: Home,
              image: "/images/usecase-hogar.jpg",
              color: "from-gray-900 to-[#F26522]"
            },
            {
              title: "Edificio",
              description: "Optimiza el consumo energético en zonas comunes, reduce costos operativos y gestiona sistemas para ascensores, bombas de agua y presurización.",
              Icon: Building2,
              image: "/images/usecase-edificio.jpg",
              color: "from-[#F26522] to-gray-900"
            },
            {
              title: "Industria",
              description: "Proyectos solares de alta capacidad para reducir costos energéticos, mejorar competitividad y avanzar hacia la sostenibilidad empresarial.",
              Icon: Factory,
              image: "/images/usecase-industria.jpg",
              color: "from-gray-900 to-[#F26522]"
            }
          ].map((item, i) => (
            <div
              key={item.title}
              className={`relative photo-frame card-hover ${inView ? "animate-fade-in-scale" : "opacity-0"}`}
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <img
                src={item.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: i === 0 ? "center 80%" : "center" }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-75 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-gray-900/10" />
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at ${30 + i * 20}% ${70 - i * 20}%, rgba(242,101,34,0.3) 0%, transparent 50%)`,
                }}
              />
              <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-10 min-h-[400px]">
                <div>
                  <item.Icon className="w-10 h-10 mb-6 text-[#F26522]" strokeWidth={1.5} />
                  <h3 className="text-3xl md:text-4xl font-medium leading-tight mb-4 text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <div>
                  <p className="text-white/80 text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 group">
                    <span className="w-10 h-10 rounded-full bg-[#F26522]/80 backdrop-blur flex items-center justify-center group-hover:bg-[#F26522] transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </span>
                    <span className="text-white font-medium text-base group-hover:text-[#F26522] transition-colors duration-300">
                      Conocer más
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
