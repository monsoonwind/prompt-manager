'use client'

import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/layout/Navbar';
import { Toaster } from "@/components/ui/toaster"
import { usePathname } from 'next/navigation';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
        {!isHomePage && <Navbar />}
        {children}
        <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
