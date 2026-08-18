import { useEffect, useState } from "react";

interface TypewriterOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter(words: string[], options: TypewriterOptions = {}) {
  const { typeSpeed = 90, deleteSpeed = 45, pauseDuration = 2200 } = options;
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(() => words[0] ?? "");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      return;
    }

    const currentWord = words[wordIndex % words.length];

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        const t = setTimeout(
          () => setText(currentWord.slice(0, text.length + 1)),
          typeSpeed
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("deleting"), pauseDuration);
      return () => clearTimeout(t);
    }

    if (text.length > 0) {
      const t = setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        deleteSpeed
      );
      return () => clearTimeout(t);
    }
    requestAnimationFrame(() => {
      setWordIndex((i) => (i + 1) % words.length);
      setPhase("typing");
    });
  }, [text, phase, wordIndex, words, typeSpeed, deleteSpeed, pauseDuration]);

  return text;
}
