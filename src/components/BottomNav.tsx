import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoIcon } from "./HeroParts";
import { MessageCircle } from "lucide-react";

export function BottomNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="sec-018" className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute bottom-20 right-0 mb-3"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 min-w-[200px] border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">WhatsApp</p>
                  <p className="text-xs text-gray-500">350-8336293</p>
                </div>
              </div>
              <a
                href="https://wa.me/573508336293"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-xl transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Abrir chat</span>
              </a>
            </div>
            {/* Flecha */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-full bg-white/90 backdrop-blur-xl shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)] border border-white/50 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
        whileTap={{ scale: 0.95 }}
      >
        <LogoIcon className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
          <MessageCircle className="w-3 h-3 text-white" />
        </span>
      </motion.button>
    </div>
  );
}
