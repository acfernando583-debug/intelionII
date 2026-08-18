import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface WordsPullUpProps {
  text: string;
  showAsterisk?: boolean;
  className?: string;
}

export function WordsPullUp({ text, showAsterisk = false, className = "" }: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-flex">
          <motion.span
            className="inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              delay: i * 0.08,
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span className="mx-1">&nbsp;</span>}
        </span>
      ))}
      {showAsterisk && (
        <motion.span
          className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: (words.length - 1) * 0.08 + 0.05, duration: 0.6 }}
        >
          *
        </motion.span>
      )}
    </div>
  );
}

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
}

export function WordsPullUpMultiStyle({ segments, className = "" }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const allWords = segments.flatMap((segment, segmentIndex) => {
    const words = segment.text.split(" ");
    return words.map((word, wordIndex) => ({
      word,
      className: segment.className || "",
      globalIndex: words.slice(0, wordIndex).reduce((acc, w) => acc + w.length + 1, 0) + 
                   segments.slice(0, segmentIndex).reduce((acc, s) => acc + s.text.length + 1, 0)
    }));
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {allWords.map((item, i) => (
        <span key={i} className="inline-flex">
          <motion.span
            className={`inline-block ${item.className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              delay: i * 0.08,
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            {item.word}
          </motion.span>
          {i < allWords.length - 1 && <span className="mx-1">&nbsp;</span>}
        </span>
      ))}
    </div>
  );
}

interface AnimatedLetterProps {
  text: string;
  className?: string;
}

export function AnimatedLetter({ text, className = "" }: AnimatedLetterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const letters = text.split("");

  return (
    <span ref={ref} className={`inline ${className}`}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ opacity: 0.2 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: i * 0.02,
            duration: 0.1
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}
