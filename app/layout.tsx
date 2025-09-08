import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yayando',
  description: 'Центр управления для всей семьи',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
