import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import Script from "next/script";
import GoogleAnalytics from "@/lib/analytics";

export const metadata: Metadata = {
  title: {
    template: '%s - Clément de Louvencourt',
    default:
      'Clément de Louvencourt - Software engineer, entrepreneur, and amateur runner',
  },
  description:
    'I’m Clément, a software designer and entrepreneur based in Paris. I’m Clément, a software designer and entrepreneur based in Paris. I’m the CTO of MeilleursBiens, where we develop technologies that enable real estate pros to save twice as much time and money in their business.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
      <GoogleAnalytics/>
    </html>
  )
}
