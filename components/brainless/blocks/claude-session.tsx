import { ClaudeHeader } from "@/components/brainless/claude/claude-header";
import { ClaudeMessage } from "@/components/brainless/claude/claude-message";
import { ClaudeTodoList } from "@/components/brainless/claude/claude-todo-list";
import { ClaudeToolCall } from "@/components/brainless/claude/claude-tool-call";
import { ClaudeDiff } from "@/components/brainless/claude/claude-diff";
import { ClaudePermission } from "@/components/brainless/claude/claude-permission";
import { ClaudeThinking } from "@/components/brainless/claude/claude-thinking";
import { ClaudePrompt } from "@/components/brainless/claude/claude-prompt";

/**
 * ClaudeSession — a Tessera retrieval turn: prompt → search → candidates →
 * inspect → retrieve → adapt, with the pinned input composer.
 */
export function ClaudeSession() {
  return (
    <div className="space-y-3 font-mono text-[13px] leading-[1.6] text-[#c0caf5]">
      <ClaudeHeader cwd="~/dev/acme-app" />

      <div style={{ color: "#4ea96f" }}>
        <span aria-hidden>● </span>tessera MCP connected · search runs locally
      </div>

      <div className="space-y-3 pt-1">
        <ClaudeMessage role="user">
          Build a dark developer-tool hero with a terminal.
        </ClaudeMessage>

        <ClaudeMessage>
          I&apos;ll look for existing UI before generating it.
        </ClaudeMessage>

        <ClaudeTodoList
          todos={[
            { label: "Search local component index", status: "done" },
            { label: "Inspect license and dependencies", status: "done" },
            { label: "Retrieve upstream source", status: "active" },
            { label: "Adapt composition to project tokens", status: "todo" },
          ]}
        />

        <ClaudeToolCall
          tool="search_components"
          arg='{"query":"dark technical terminal hero","category":"terminal","limit":3}'
          result="3 candidates · magicui/terminal 0.68"
        >
          {`magicui/terminal 0.68 · MIT, redistribution permitted · 0 declared deps
aceternity/terminal 0.64 · LicenseRef-Aceternity, redistribution restricted
beui/not-found-terminal 0.523 · MIT · 3 required deps`}
        </ClaudeToolCall>

        <ClaudeToolCall
          tool="get_component"
          arg="magicui/terminal"
          result="MIT · react · shadcn-registry · 0 declared deps"
        />

        <ClaudeToolCall
          tool="get_component_artifact"
          arg="magicui/terminal"
          result="registry/magicui/terminal.tsx · MIT"
        />

        <ClaudeDiff
          file="components/hero/terminal-hero.tsx"
          summary="Adapted retrieved composition to project tokens"
          lines={[
            { type: "del", n: 8, text: 'className="rounded-xl border bg-background"' },
            { type: "add", n: 8, text: 'className="rounded-[4px] border project-tokens"' },
            { type: "ctx", n: 22, text: "<code>{wrappedChildren}</code>" },
          ]}
        />

        <ClaudePermission
          title="Retrieve upstream source"
          command="tessera fetch magicui/terminal"
          question="Retrieve this source? Nothing will be installed or executed."
        />

        <ClaudeThinking running={false} />
      </div>

      <div className="pt-2">
        <ClaudePrompt />
      </div>
    </div>
  );
}
