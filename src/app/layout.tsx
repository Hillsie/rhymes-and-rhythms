import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar, { MobileNav } from '@/components/navbar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learn Guitar',
  description: 'Learn Guitar - Just another attempt to Learn Guitar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <MobileNav />
      </body>
    </html>
  )
}
