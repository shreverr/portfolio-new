import type { Metadata } from 'next'
import './globals.css'
import { raleway } from '@/components/ui/Fonts'

export const metadata: Metadata = {
  title: 'Aditya Prasad',
  description: 'Aditya Prasad\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  ) 
}
