'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { href: '/home', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/education', label: 'Education' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-primary dark:text-secondary hover:opacity-80 transition-opacity"
        >
          Mushahid
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors ${
                  isActive 
                    ? 'text-primary dark:text-secondary font-semibold' 
                    : 'text-muted-foreground hover:text-primary dark:hover:text-secondary'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary dark:bg-secondary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <a
            href="/Mushahid_CV.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Download size={16} />
            CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary dark:hover:text-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col py-4 px-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-3 px-4 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary font-semibold'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="/Mushahid_CV.pdf"
                download
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-4 mt-2 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
