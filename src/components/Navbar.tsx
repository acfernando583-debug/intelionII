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
