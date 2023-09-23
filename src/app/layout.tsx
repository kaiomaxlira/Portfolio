import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kaio Max',
  description: 'portfolio de kaio max',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 
    <html className='bg-background' lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  
  )
}
