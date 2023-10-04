import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dev Geeks | Invitations',
  description: 'Dev geeks platform is a vibrant hub for developers of all backgrounds and expertise levels to come together and create, learn, and grow. Whether you are a seasoned coder or just starting your programming journey, you will find a welcoming and supportive community eager to help you achieve your goals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
