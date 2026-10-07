import { CodexHeader } from "@/components/brainless/codex/codex-header";
import { CodexMessage } from "@/components/brainless/codex/codex-message";
import { CodexExec } from "@/components/brainless/codex/codex-exec";
import { CodexWorking } from "@/components/brainless/codex/codex-working";
import { CodexPrompt } from "@/components/brainless/codex/codex-prompt";

/**
 * CodexSession — a Tessera retrieval turn: prompt → reply → exec lines →
 * selected MIT candidate → adapt, with the pinned › composer.
 */
export function CodexSession() {
  return (
    <div className="space-y-3 font-mono text-[13px] leading-[1.6] text-[#ededed]">
      <CodexHeader directory="~/dev/acme-app" />

      <div className="text-[#4ea96f]">
        <span aria-hidden>● </span>
        tessera MCP connected · search runs locally
      </div>

      <div className="space-y-3 pt-1">
        <CodexMessage role="user">
          Build a dark developer-tool hero with a terminal.
        </CodexMessage>

        <CodexMessage>
          I&apos;ll look for existing UI before generating it. Selected
          magicui/terminal (MIT) and adapting its composition.
        </CodexMessage>

        <div className="space-y-1">
          <CodexExec
            command='search_components {"query":"dark technical terminal hero","category":"terminal"}'
            result="3 candidates"
          >
            {`magicui/terminal 0.68 · MIT, redistribution permitted
aceternity/terminal 0.64 · redistribution restricted
beui/not-found-terminal 0.523 · MIT · 3 deps`}
          </CodexExec>
          <CodexExec
            command="get_component magicui/terminal"
            result="MIT · retrievable"
          />
          <CodexExec
            command="get_component_artifact magicui/terminal"
            result="1 file · MIT"
          >
            registry/magicui/terminal.tsx
          </CodexExec>
        </div>

        <CodexWorking running={false} />
      </div>

      <div className="pt-2">
        <CodexPrompt directory="~/dev/acme-app" />
      </div>
    </div>
  );
}
