import { type Metadata, type Viewport } from 'next'
import Navbar from '../components/Navbar'
import './global.css'

export const metadata: Metadata = {
  title: 'JS Design Patterns',
  description: 'Practising JS Design Patterns with Next JS',
  icons: {
    apple: [
      { url: '/favicons/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/favicons/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/favicons/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/favicons/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/favicons/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/favicons/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/favicons/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/favicons/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/favicons/apple-icon-180x180.png', sizes: '180x180' },
    ],
    icon: [
      {
        url: '/favicons/android-icon-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      { url: '/favicons/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicons/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicons/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
  },
  manifest: '/favicons/manifest.json',
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/favicons/ms-icon-144x144.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen overflow-y-auto bg-neutral-800">
          <div className="container">
            <Navbar />
            <main className="flex flex-col">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
