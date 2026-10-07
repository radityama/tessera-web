import { GrokStatus } from "@/components/brainless/grok/grok-status";
import { GrokHeader } from "@/components/brainless/grok/grok-header";
import { GrokMessage } from "@/components/brainless/grok/grok-message";
import { GrokEvent } from "@/components/brainless/grok/grok-event";
import { GrokThought } from "@/components/brainless/grok/grok-thought";
import { GrokTool } from "@/components/brainless/grok/grok-tool";
import { GrokWrite } from "@/components/brainless/grok/grok-write";
import { GrokPermission } from "@/components/brainless/grok/grok-permission";
import { GrokTurnEnd } from "@/components/brainless/grok/grok-turn-end";
import { GrokPrompt } from "@/components/brainless/grok/grok-prompt";

/**
 * GrokSession — a Tessera retrieval turn: prompt → thought → tools → write →
 * approval → stop, with the rounded composer. Illustrative harness rendering;
 * Grok is not a verified Tessera integration.
 */
export function GrokSession() {
  return (
    <div className="space-y-3 font-mono text-[13px] leading-[1.6] text-[#e8e8e8]">
      <GrokStatus
        branch="main"
        directory="~/dev/acme-app"
        contextUsed="16K"
        contextLimit="500K"
        turn={2}
        turnTotal={3}
      />

      <GrokHeader />

      <div className="text-[#4ea96f]">
        <span aria-hidden>● </span>tessera MCP connected · search runs locally
      </div>

      <div className="space-y-2 pt-1">
        <GrokMessage role="user" time="4:38 PM">
          Build a dark developer-tool hero with a terminal.
        </GrokMessage>

        <GrokEvent label="user_prompt_submit" hooks={3} hooksOk={1} />
        <GrokThought elapsed="0.4s">
          Existing terminal candidates rank highest; checking license before
          retrieval.
        </GrokThought>

        <GrokMessage time="4:38 PM">
          I&apos;ll reuse the retrieved composition and adapt it to this
          project&apos;s tokens.
        </GrokMessage>

        <GrokTool
          verb="search_components"
          path='{"query":"dark technical terminal hero"}'
          meta="3 candidates · top magicui/terminal 0.68"
        />
        <GrokTool
          variant="card"
          title="get_component magicui/terminal · MIT, redistribution permitted"
        />
        <GrokWrite
          before={[{ n: 8, text: 'className="rounded-xl border bg-background"' }]}
          after={[{ n: 8, text: 'className="rounded-[4px] border project-tokens"' }]}
        />

        <GrokPermission
          title="Retrieve magicui/terminal"
          command="tessera fetch magicui/terminal · MIT, redistribution permitted"
        />

        <GrokEvent label="stop" hooks={3} hooksOk={1} />
        <GrokTurnEnd elapsed="12.4s" />
      </div>

      <div className="pt-3">
        <GrokPrompt mode="always-approve" showShortcuts={false} />
      </div>
    </div>
  );
}
