import type { Metadata, Viewport } from 'next';
import { Barlow_Condensed, Manrope } from 'next/font/google';
import './globals.css';

const display = Barlow_Condensed({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
});

const body = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://ba-containers.leandrocaetanopivova.chatgpt.site',
  ),
  title: 'B.A Containers | Venda de containers',
  description:
    'Containers 20GP, 40GP, 40HC e Reefer com atendimento direto e orçamento rápido pelo WhatsApp.',
  keywords: [
    'containers',
    'container 20GP',
    'container 40GP',
    'container 40HC',
    'container Reefer',
  ],
  icons: {
    icon: '/assets/brand/ba-containers-logo.png',
  },
  openGraph: {
    title: 'B.A Containers | Venda de containers',
    description: 'Containers para armazenagem, operação e novos projetos.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      { url: '/og.png', width: 1730, height: 909, alt: 'B.A Containers' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B.A Containers | Venda de containers',
    description: 'Containers para armazenagem, operação e novos projetos.',
    images: ['/og.png'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#eef2f5' },
    { media: '(prefers-color-scheme: dark)', color: '#091a28' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('ba-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}",
          }}
        />
      </head>
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
