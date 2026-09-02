'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
} from 'framer-motion';

interface ScrollVelocityProps {
  texts: string[];
  /** Base pixels-per-second drift when the page is still. */
  velocity?: number;
  className?: string;
  /** How many times each line repeats, so the strip never shows a gap. */
  numCopies?: number;
  damping?: number;
  stiffness?: number;
}

function useElementWidth(ref: React.RefObject<HTMLElement | null>) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => setWidth(el.offsetWidth);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return width;
}

/** Keeps v inside [min, max), so the strip loops seamlessly. */
function wrap(min: number, max: number, v: number) {
  const range = max - min;
  const mod = (((v - min) % range) + range) % range;
  return mod + min;
}

function VelocityRow({
  children,
  baseVelocity,
  className,
  numCopies,
  damping,
  stiffness,
}: {
  children: string;
  baseVelocity: number;
  className: string;
  numCopies: number;
  damping: number;
  stiffness: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const reduceMotion = useReducedMotion();

  const copyRef = useRef<HTMLSpanElement>(null);
  const copyWidth = useElementWidth(copyRef);

  const x = useTransform(baseX, (v) => (copyWidth === 0 ? '0px' : `${wrap(-copyWidth, 0, v)}px`));

  // Scrolling down pushes the text one way, scrolling up reverses it.
  const directionFactor = useRef(1);
  useAnimationFrame((_t, delta) => {
    if (reduceMotion) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    const factor = velocityFactor.get();
    if (factor < 0) directionFactor.current = -1;
    else if (factor > 0) directionFactor.current = 1;

    moveBy += directionFactor.current * moveBy * factor;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div className="flex whitespace-nowrap will-change-transform" style={{ x }}>
        {Array.from({ length: numCopies }, (_, i) => (
          <span key={i} ref={i === 0 ? copyRef : null} className={className}>
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ScrollVelocity({
  texts,
  velocity = 100,
  className = '',
  numCopies = 6,
  damping = 50,
  stiffness = 400,
}: ScrollVelocityProps) {
  const [mounted, setMounted] = useState(false);

  // The strip measures itself, so render it only once there's a DOM to measure.
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div className="w-full">
        {texts.map((text, i) => (
          <div key={i} className="w-full overflow-hidden">
            <span className={className}>{text}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full">
      {texts.map((text, i) => (
        <VelocityRow
          key={i}
          baseVelocity={i % 2 === 0 ? velocity : -velocity}
          className={className}
          numCopies={numCopies}
          damping={damping}
          stiffness={stiffness}
        >
          {text}
        </VelocityRow>
      ))}
    </div>
  );
}

export default ScrollVelocity;
