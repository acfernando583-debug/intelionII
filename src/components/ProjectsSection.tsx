import { useState, useEffect, useRef } from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const PROJECTS = [
  {
    name: "Clínicas y Hospitales",
    description:
      "Energía ininterrumpida para equipos electromédicos y sistemas críticos de salud.",
    image: "/images/project-clinicas.jpg",
  },
  {
    name: "Laboratorios Farmacéuticos",
    description:
      "Continuidad operativa y calidad de onda para protección de cadenas de frío.",
    image: "/images/project-laboratorios.jpg",
  },
  {
    name: "Plantas de Producción",
    description:
      "Reducción de costos energéticos y ventaja competitiva con energía solar de gran escala.",
    image: "/images/project-plantas.jpg",
  },
];

export function ProjectsSection() {
  const { ref } = useInViewAnimation();

  return (
    <section ref={ref} className="bg-white px-6 py-12">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16 md:gap-20">
        {PROJECTS.map((project, i) => (
          <ProjectItem key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectItem({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [itemInView, setItemInView] = useState(false);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setItemInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`${itemInView ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
        <div className="md:col-span-4 md:col-start-1">
          <div className="inline-block mb-3">
            <span className="text-[#F26522] text-xs font-semibold tracking-wider uppercase">Sector salud</span>
          </div>
          <h3
            className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-tight"
            style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
          >
            {project.name}
          </h3>
        </div>
        <div className="md:col-span-6 md:col-start-6">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
        <img
          src={project.image}
          alt={project.name}
          className="w-full object-cover h-[300px] md:h-[500px] lg:h-[600px] transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F26522]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="glass-card inline-block px-6 py-3 rounded-full">
            <span className="text-gray-900 font-medium text-sm">Ver caso de estudio →</span>
          </div>
        </div>
      </div>
    </div>
  );
}
