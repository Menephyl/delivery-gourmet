import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const siteName = "Mineiro Gourmet";
  const description = "A verdadeira essência da culinária mineira em sua mesa. Pedidos rápidos pelo WhatsApp.";
  const url = "https://delivery-gourmet.vercel.app/";
  const image = `${url}og-image.png`;

  return (
    <Html lang="pt-BR">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />

        {/* Global Meta Tags */}
        <meta name="title" content={siteName} />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#3D1F0D" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={`${siteName} | Tradição & Requinte`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={`${siteName} | Tradição & Requinte`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
