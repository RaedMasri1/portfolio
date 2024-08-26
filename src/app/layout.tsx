import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import React from 'react';
// import memojiImage from '../assets/images/memoji-computer.png';

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
    <meta name="description" content="Raed Masri is a full-stack web developer specializing in building high-performance websites and applications. Explore his portfolio showcasing expertise in front-end and back-end development, UI/UX design, and scalable web solutions." />
    <meta name="keywords" content="Raed Masri, full-stack web developer, front-end, back-end, web development, JavaScript, TypeScript, React, Node.js, Next.js, web applications, UI/UX design, scalable solutions" />
    <meta property="og:title" content="Raed Masri | Full-Stack Web Developer" />
    <meta property="og:description" content="Explore my portfolio showcasing high-performance websites and scalable web solutions." />
    <meta property="og:image" content="../assets/images/logo.jpeg" />
    <meta property="og:url" content="https://raed-elmasri.netlify.app" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="logo.svg" />

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
