import '@/styles/index.scss';
import { Header } from '@/components/Header';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import GoogleAnalytics from "./GoogleAnalytics";

const nunito = Nunito_Sans({
  weight: ['300', '600', '800'],
  style: ['normal', 'italic'],
  variable: '--nunito',
  subsets: ['latin'],
  display: "swap"
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <GoogleAnalytics trackPageViews />
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
