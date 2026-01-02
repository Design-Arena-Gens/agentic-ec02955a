import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Digital Marketing Agent | Professional Marketing Strategy & ROI Optimization',
  description: 'Professional digital marketing services including Meta Ads, Google Ads, SEO, social media marketing, lead generation, and performance tracking. Focus on real ROI and business growth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
