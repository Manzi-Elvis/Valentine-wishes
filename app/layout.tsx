import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Will You Be My Valentine 💖',
  description: 'A romantic Valentine website made with love',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-pink-100 text-gray-800">
        {children}
      </body>
    </html>
  )
}
