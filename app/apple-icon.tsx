import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fdfcfc',
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            border: '8px solid #201d1d',
            display: 'flex',
            flexWrap: 'wrap',
            padding: 10,
            gap: 8,
          }}
        >
          <div style={{ width: 38, height: 38, backgroundColor: '#201d1d' }} />
          <div style={{ width: 38, height: 38, backgroundColor: '#201d1d' }} />
          <div style={{ width: 38, height: 38, backgroundColor: '#201d1d' }} />
          <div style={{ width: 38, height: 38, border: '4px solid #646262' }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
