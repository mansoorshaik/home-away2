import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Inter } from 'next/font/google';
import Providers from "./providers";
import {ClerkProvider} from '@clerk/nextjs'
const inter = Inter({ subsets: ['latin'] });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Eco-Bin",
  description: "A recycling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} `}>
          <Providers>
            <Navbar />
            <main className="container py-10">{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
