import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/header/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Titiksha',
  description: 'Institute of Engineering and Technology, Agra',
}

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  links: { name: string; url: string }[];
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>
        <div className="container mx-auto">{children}</div>
      </body>
      <Footer />
    </html>
  )
}