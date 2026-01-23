import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Samuel Corsan | Portfolio';
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
          fontSize: 60,
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'monospace',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              letterSpacing: '-0.02em',
            }}
          >
            Samuel Corsan
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#a0a0a0',
              fontWeight: 'normal',
            }}
          >
            15-year-old full stack developer
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#666666',
              marginTop: '40px',
              maxWidth: '800px',
            }}
          >
            Building AI, web, and infrastructure projects. 
            Passionate about startups and creating companies that matter.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

