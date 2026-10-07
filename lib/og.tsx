import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function ogFonts() {
  const [regular, bold] = await Promise.all([
    readFile(join(process.cwd(), 'app/fonts/JetBrainsMono-Regular.ttf')),
    readFile(join(process.cwd(), 'app/fonts/JetBrainsMono-Bold.ttf')),
  ]);
  return [
    { name: 'JetBrains Mono', data: regular, style: 'normal' as const, weight: 400 as const },
    { name: 'JetBrains Mono', data: bold, style: 'normal' as const, weight: 700 as const },
  ];
}

export function OgShell({
  kicker,
  title,
  body,
  strip,
}: {
  kicker: string;
  title: string;
  body: string;
  strip: string;
}) {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fdfcfc',
        color: '#201d1d',
        padding: '60px',
        fontFamily: '"JetBrains Mono", monospace',
        justifyContent: 'space-between',
        border: '16px solid #201d1d',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '2px solid rgba(15, 0, 0, 0.15)',
          paddingBottom: '24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '24px',
              height: '24px',
              border: '2px solid #201d1d',
              display: 'flex',
              flexWrap: 'wrap',
              padding: '2px',
              gap: '2px',
            }}
          >
            <div style={{ width: '7px', height: '7px', backgroundColor: '#201d1d' }} />
            <div style={{ width: '7px', height: '7px', backgroundColor: '#201d1d' }} />
            <div style={{ width: '7px', height: '7px', backgroundColor: '#201d1d' }} />
            <div style={{ width: '7px', height: '7px', border: '1px solid #646262' }} />
          </div>
          <span style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em' }}>
            tessera
          </span>
        </div>
        <div style={{ fontSize: '18px', color: '#646262' }}>{kicker}</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ fontSize: '56px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          {title}
        </div>
        <div style={{ fontSize: '24px', color: '#424245', maxWidth: '900px' }}>{body}</div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#201d1d',
          color: '#fdfcfc',
          padding: '20px 28px',
          fontSize: '20px',
        }}
      >
        <div>$ npx -y @tessera-dev/cli search &quot;terminal hero&quot;</div>
        <div style={{ color: '#30d158' }}>{strip}</div>
      </div>
    </div>
  );
}
