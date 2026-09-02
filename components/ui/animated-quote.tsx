'use client';

import { ScrollVelocity } from '@/components/ui/scroll-velocity';

export function AnimatedQuote() {
  // Split across two rows so they drift in opposite directions.
  const lines = ['Computers are good at following instructions', 'but not at reading your mind.'];
  const author = 'Donald Knuth';

  return (
    // overflow-hidden keeps the moving text inside the box's border
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 overflow-hidden">
      <ScrollVelocity
        texts={lines}
        velocity={40}
        numCopies={6}
        damping={50}
        stiffness={400}
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight pr-8"
      />
      <p className="text-lg md:text-xl text-primary dark:text-secondary font-semibold pt-2">
        — {author}
      </p>
    </div>
  );
}
