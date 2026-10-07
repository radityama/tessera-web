import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';
import { TOTAL_COMPONENTS, TOTAL_SOURCES } from '@/lib/constants';
import { ogFonts, OgShell } from '@/lib/og';

export const alt = 'Tessera — UI retrieval for coding agents';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const fonts = await ogFonts();
  return new ImageResponse(
    (
      <OgShell
        kicker={`${siteConfig.version} · npm: @tessera-dev/cli`}
        title="UI retrieval for coding agents."
        body="Search, inspect, and retrieve real UI components before generating another one from scratch."
        strip={`[${TOTAL_COMPONENTS} components · ${TOTAL_SOURCES} sources]`}
      />
    ),
    { ...size, fonts }
  );
}
