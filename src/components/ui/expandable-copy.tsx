"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  intro: ReactNode;
  more: ReactNode;
  className?: string;
};

/**
 * "Show more" copy block that keeps the full text in the server-rendered HTML
 * so crawlers always see it; only the visual height is toggled.
 */
export default function ExpandableCopy({ intro, more, className = "" }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`tracking-wide text-gray-700 space-y-4 ${className}`}>
      {intro}

      <motion.div
        id="expandable-copy-more"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden space-y-4"
        aria-hidden={!open}
      >
        {more}
      </motion.div>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="expandable-copy-more"
        className="text-black font-semibold underline"
      >
        {open ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
