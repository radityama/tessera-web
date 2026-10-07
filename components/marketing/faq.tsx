'use client';

import React from 'react';
import { FAQS } from '@/lib/constants';
import { PanelHeader } from '@/components/layout/panel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Faq() {
  return (
    <div className="w-full">
      <PanelHeader
        kicker="faq"
        title="Frequently asked questions."
        description="Clear, factual answers regarding Tessera's architecture, security boundaries, and licensing approach."
      />

      {/* Consistent border-based row system across the full rail width */}
      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="w-full bg-[var(--canvas)]"
      >
        {FAQS.map((faq, index) => (
          <AccordionItem key={faq.question} value={`item-${index}`}>
            <AccordionTrigger>
              <span className="flex items-center gap-3 md:gap-4 min-w-0">
                <span
                  className="font-mono text-xs md:text-sm font-bold text-[var(--ink)] shrink-0 select-none group-data-[state=open]:hidden"
                  aria-hidden="true"
                >
                  [+]
                </span>
                <span
                  className="hidden font-mono text-xs md:text-sm font-bold text-[var(--ink)] shrink-0 select-none group-data-[state=open]:inline"
                  aria-hidden="true"
                >
                  [-]
                </span>
                <span className="text-xs sm:text-sm font-bold text-[var(--ink)] whitespace-normal break-words text-left">
                  {faq.question}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
