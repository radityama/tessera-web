import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';
import { TOTAL_COMPONENTS, TOTAL_SOURCES } from '@/lib/constants';
import { ogFonts, OgShell } from '@/lib/og';

export const alt = 'Tessera documentation';
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
        kicker={`${siteConfig.version} · tessera docs`}
        title="CLI, MCP, integrations, skill."
        body="Reference material for the retrieval layer your coding agent is missing."
        strip={`[${TOTAL_COMPONENTS} components · ${TOTAL_SOURCES} sources]`}
      />
    ),
    { ...size, fonts }
  );
}
