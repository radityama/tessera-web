import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Tessera — UI retrieval for coding agents';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fdfcfc',
          color: '#201d1d',
          padding: '60px',
          fontFamily: 'monospace',
          justifyContent: 'space-between',
          border: '16px solid #201d1d',
        }}
      >
        {/* Header bar */}
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
            <span style={{ fontSize: '28px', fontWeight: 'bold', letterSpacing: '-0.02em' }}>
              tessera
            </span>
          </div>
          <div style={{ fontSize: '18px', color: '#646262' }}>
            v0.1.0 · npm: @tessera-dev/cli
          </div>
        </div>

        {/* Central message */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ fontSize: '56px', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            UI retrieval for coding agents.
          </div>
          <div style={{ fontSize: '24px', color: '#424245', maxWidth: '900px' }}>
            Search, inspect, and retrieve real UI components before generating another one from scratch.
          </div>
        </div>

        {/* Terminal strip */}
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
          <div style={{ color: '#30d158' }}>[73 components · 5 sources]</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
