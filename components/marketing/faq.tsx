'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '@/lib/constants';
import { PanelHeader } from '@/components/layout/panel';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full">
      <PanelHeader
        kicker="faq"
        title="Frequently asked questions."
        description="Clear, factual answers regarding Tessera's architecture, security boundaries, and licensing approach."
      />

      {/* Consistent border-based row system across the full rail width */}
      <div className="w-full bg-[var(--canvas)]">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="w-full border-b border-[var(--line)] bg-[var(--canvas)] transition-colors overflow-hidden"
            >
              {/* Row Trigger */}
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full text-left px-6 py-5 md:px-8 md:py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[var(--surface-soft)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--ink)] select-none"
              >
                <div className="flex items-center gap-3 md:gap-4 min-w-0">
                  <span
                    className="font-mono text-xs md:text-sm font-bold text-[var(--ink)] shrink-0 select-none"
                    aria-hidden="true"
                  >
                    {isOpen ? '[-]' : '[+]'}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[var(--ink)] truncate sm:whitespace-normal">
                    {faq.question}
                  </span>
                </div>

                <ChevronDown
                  className={`w-3.5 h-3.5 text-[var(--mute)] transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-[var(--ink)]' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Full Rail Width Answer Row with motion animation */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={`answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="w-full border-t border-[var(--line)] px-6 py-5 md:px-8 md:py-6 bg-[var(--surface-soft)] text-xs sm:text-sm text-[var(--body)] leading-relaxed font-mono">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
