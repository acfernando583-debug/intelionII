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
