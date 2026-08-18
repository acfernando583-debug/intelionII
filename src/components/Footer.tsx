import { Button } from "./HeroParts";
import { LogoIcon } from "./HeroParts";

export function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-10 md:py-14 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 80%, rgba(242,101,34,0.3) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(242,101,34,0.2) 0%, transparent 40%)",
        }}
      />
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='90' cy='30' r='40' fill='none' stroke='rgba(255,255,255,0.35)' stroke-width='1'/%3E%3Ccircle cx='90' cy='30' r='25' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1'/%3E%3Ccircle cx='90' cy='30' r='10' fill='rgba(255,255,255,0.25)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundPosition: "right center",
        }}
      />
      <div className="max-w-[1200px] mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <LogoIcon className="w-12 h-12" />
              <span className="text-2xl font-medium tracking-tight text-white">
                INTELION
              </span>
            </div>
            <p className="text-white/60 text-base leading-snug max-w-sm mb-6">
              Diseño, instalación y mantenimiento de sistemas solares fotovoltaicos. Transformando el consumo energético de hogares, edificios e industria.
            </p>
            <Button variant="primary" className="px-7 py-3 text-base">
              Contactar
            </Button>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Navegación</h4>
            <div className="flex flex-col gap-2">
              {["Nosotros", "Soluciones", "Proceso", "Tecnología", "Contacto"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white/60 hover:text-[#F26522] transition-colors duration-300 text-base"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Contacto</h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:intelionsolar@gmail.com"
                className="text-white/60 hover:text-[#F26522] transition-colors duration-300 text-base"
              >
                intelionsolar@gmail.com
              </a>
              <a
                href="https://wa.me/573508336293"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#F26522] transition-colors duration-300 text-base"
              >
                WhatsApp
              </a>
              <span className="text-white/40 text-sm">350-8336293</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-white/40 text-sm">© 2026 INTELION Solar. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-[#F26522] transition-colors duration-300 text-sm">Privacidad</a>
            <a href="#" className="text-white/40 hover:text-[#F26522] transition-colors duration-300 text-sm">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
