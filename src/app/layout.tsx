"use client";

import './globals.scss'
import React, { useState } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDark, setIsDark] = useState(false);
    const switchTheme: any = () => {
      setIsDark(!isDark);
    };
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
