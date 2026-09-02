'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';

interface ProjectCardProps {
  /** Project name — used for the modal heading and the shared-layout id. */
  title: string;
  /** Screenshot of the live site, e.g. "/projects/khatalens.png". */
  image?: string;
  /** Domain shown in the browser chrome, e.g. "khata-lens.vercel.app". */
  url?: string;
  /** Three technologies, kept visible while collapsed so the card still says
   *  what it's built with without being opened. */
  kicker?: string;
  children: React.ReactNode;
}

export function ProjectCard({ title, image, url, kicker, children }: ProjectCardProps) {
  // Falls back to a plain text card if the screenshot hasn't been added yet.
  const [showShot, setShowShot] = useState(Boolean(image));
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const reduceMotion = useReducedMotion();
  const layoutId = `project-${title}`;

  // The server-rendered <img> can fail before React attaches onError, which would
  // leave the card reserving empty space for a screenshot that never arrives.
  // Re-check once on mount: a finished load with no intrinsic width means it failed.
  useEffect(() => {
    setMounted(true);
    setShowShot(Boolean(image));
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setShowShot(false);
  }, [image]);

  // Close on Escape, and stop the page behind the modal from scrolling.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  // No screenshot: nothing to expand from, so render the details inline as before.
  if (!showShot || !image) {
    return (
      <article className="project-card">
        <div className="project-card-body">{children}</div>
      </article>
    );
  }

  const shot = (className: string) => (
    <motion.img
      layoutId={reduceMotion ? undefined : `shot-${layoutId}`}
      ref={imgRef}
      src={image}
      alt=""
      loading="lazy"
      decoding="async"
      className={className}
      onError={() => setShowShot(false)}
    />
  );

  const chrome = url && (
    <div className="project-card-chrome">
      <span className="project-card-dot" />
      <span className="project-card-dot" />
      <span className="project-card-dot" />
      <span className="project-card-url">{url}</span>
    </div>
  );

  return (
    <>
      <motion.button
        layoutId={reduceMotion ? undefined : layoutId}
        type="button"
        onClick={() => setOpen(true)}
        className="project-card project-card-trigger"
        aria-label={`Open ${title} details`}
      >
        <span className="project-card-shot">
          {shot('')}
          <span className="project-card-wash" />
          <span className="project-card-veil" />
          <span className="project-card-open">View</span>
          {kicker && <span className="project-card-kicker">{kicker}</span>}
        </span>
      </motion.button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <div className="project-modal-root">
                <motion.div
                  className="project-modal-backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                />
                <motion.div
                  layoutId={reduceMotion ? undefined : layoutId}
                  className="project-modal"
                  role="dialog"
                  aria-modal="true"
                  aria-label={title}
                >
                  <button
                    type="button"
                    className="project-modal-close"
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                  >
                    <X size={15} />
                  </button>

                  <div className="project-modal-pane">
                    {shot('')}
                    <span className="project-card-wash" />
                    {chrome}
                  </div>

                  <motion.div
                    className="project-modal-details project-card-body"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.15 }}
                  >
                    {kicker && <p className="project-modal-kicker">{kicker}</p>}
                    <h3 className="project-modal-title">{title}</h3>
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
