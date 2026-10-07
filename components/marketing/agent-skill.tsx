import React from 'react';
import { PanelHeader } from '@/components/layout/panel';

export function AgentSkill() {
  const steps = [
    {
      step: '01',
      title: 'Decompose Intent',
      desc: 'Agent breaks complex UI requests into discrete primitive requirements (e.g. animated hero vs. metric counter).',
    },
    {
      step: '02',
      title: 'Detect Design Tokens',
      desc: 'Agent reads the local project config (Tailwind tokens, CSS variables, border radius scale) before searching.',
    },
    {
      step: '03',
      title: 'Search & Evaluate',
      desc: 'Agent calls Tessera MCP, inspects ranking explanations, and checks whether external dependencies conflict with local ones.',
    },
    {
      step: '04',
      title: 'License & Provenance Check',
      desc: 'Agent confirms acceptable license terms and evidence before retrieving code files.',
    },
    {
      step: '05',
      title: 'Adapt Composition',
      desc: 'Agent keeps the underlying layout and accessibility logic, but strips third-party styling classes to adopt local project tokens.',
    },
    {
      step: '06',
      title: 'Cohesion Audit',
      desc: 'If a retrieved component feels visually discordant or over-engineered, the agent rejects it in favor of an intentional local design.',
    },
  ];

  return (
    <div className="w-full">
      <PanelHeader
        kicker="skill"
        title="More than retrieval: design language adaptation."
        description="Retrieval alone does not guarantee a good UI. The Tessera agent skill instructs coding models on when to search, how to evaluate ranking reasons, when to reject matches, and how to adapt retrieved components into your project's design language."
        aside={
          <div className="text-xs text-[var(--mute)]">
            <span>philosophy: </span>
            <strong className="text-[var(--ink)]">reuse composition, not identity</strong>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--line)]">
        {/* Visual flow on left */}
        <div className="p-6 md:p-8 bg-[var(--surface-soft)] space-y-4">
          <div className="text-xs font-bold text-[var(--mute)] uppercase tracking-wider">
            AGENT DECISION PIPELINE
          </div>
          <div className="font-mono text-xs text-[var(--ink)] space-y-2 border-l border-[var(--hairline-strong)] pl-3">
            <div>decompose requirements</div>
            <div className="text-[var(--mute)] select-none">↓</div>
            <div>inspect project design tokens</div>
            <div className="text-[var(--mute)] select-none">↓</div>
            <div className="font-semibold text-[var(--accent-text)]">tessera search & inspect</div>
            <div className="text-[var(--mute)] select-none">↓</div>
            <div>evaluate ranking factors</div>
            <div className="text-[var(--mute)] select-none">↓</div>
            <div>verify license & dependencies</div>
            <div className="text-[var(--mute)] select-none">↓</div>
            <div className="font-semibold text-[var(--ink)]">retrieve upstream source</div>
            <div className="text-[var(--mute)] select-none">↓</div>
            <div>strip original visual identity</div>
            <div className="text-[var(--mute)] select-none">↓</div>
            <div className="font-semibold text-[var(--success-text)]">commit coherent implementation</div>
          </div>
        </div>

        {/* 6 explanatory steps on right */}
        <div className="md:col-span-2 divide-y divide-[var(--hairline)] bg-[var(--canvas)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[var(--hairline)]">
            {steps.slice(0, 2).map((s) => (
              <div key={s.step} className="p-5 space-y-2">
                <span className="text-xs font-bold text-[var(--mute)]">[{s.step}]</span>
                <h3 className="text-xs font-bold text-[var(--ink)]">{s.title}</h3>
                <p className="text-xs text-[var(--body)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[var(--hairline)]">
            {steps.slice(2, 4).map((s) => (
              <div key={s.step} className="p-5 space-y-2">
                <span className="text-xs font-bold text-[var(--mute)]">[{s.step}]</span>
                <h3 className="text-xs font-bold text-[var(--ink)]">{s.title}</h3>
                <p className="text-xs text-[var(--body)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[var(--hairline)]">
            {steps.slice(4, 6).map((s) => (
              <div key={s.step} className="p-5 space-y-2">
                <span className="text-xs font-bold text-[var(--mute)]">[{s.step}]</span>
                <h3 className="text-xs font-bold text-[var(--ink)]">{s.title}</h3>
                <p className="text-xs text-[var(--body)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
