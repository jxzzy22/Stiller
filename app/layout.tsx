import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stiller Golf Carts',
  description: 'Luxury electric golf carts built for performance and style.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
