import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center font-mono bg-[var(--canvas)] text-[var(--ink)]">
      <div className="panel-frame p-10 max-w-md border border-[var(--hairline)] space-y-4">
        <div className="text-xs text-[var(--mute)]">[404]</div>
        <h1 className="text-xl font-bold">Page not found</h1>
        <p className="text-xs text-[var(--body)] leading-relaxed">
          The requested path does not exist in the Tessera registry.
        </p>
        <div className="pt-2">
          <Button asChild variant="primary" size="md" className="text-xs md:text-xs font-semibold">
            <Link href="/">← Return to homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
