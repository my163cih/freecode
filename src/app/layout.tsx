'use client'
import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { RecoilRoot } from 'recoil'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FreeCode',
  description: 'LeetCode clone built with NextJS 13',
  viewport: { width: 'device-width', initialScale: 1 },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <RecoilRoot>
        <body className={inter.className}>{children}</body>
      </RecoilRoot>
    </html>
  )
}
