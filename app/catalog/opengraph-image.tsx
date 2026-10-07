import { ImageResponse } from 'next/og';
import { TOTAL_COMPONENTS, TOTAL_SOURCES } from '@/lib/constants';
import { ogFonts, OgShell } from '@/lib/og';

export const alt = 'Tessera component catalog';
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
        kicker="tessera / catalog"
        title="Every component in the index."
        body={`Browse all ${TOTAL_COMPONENTS} indexed components across ${TOTAL_SOURCES} sources.`}
        strip="[search before you generate]"
      />
    ),
    { ...size, fonts }
  );
}
