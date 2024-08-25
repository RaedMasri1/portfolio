import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import React from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Raed | Portfolio',
  description: 'Raed El-Masri - Personal portfolio site',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body
      className={twMerge(
        inter.variable,
        calistoga.variable,
        'bg-gray-900 text-white antialiased font-sans',
      )}
    >
      {children}
    </body>
  </html>
);

export default RootLayout;
