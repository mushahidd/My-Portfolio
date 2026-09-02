'use client';

import { ThemeSwitcher } from '@/components/theme-switcher';

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center text-muted-foreground md:flex-row md:justify-between md:gap-4 md:text-left">
        <p>© {new Date().getFullYear()} Mushahid Portfolio.</p>
        <ThemeSwitcher />
      </div>
    </footer>
  );
}
