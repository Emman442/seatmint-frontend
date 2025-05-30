import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useMemo} from "react";
import AppWalletProvider from "@/components/AppWalletProvider";
import { Footer } from "@/components/ui/footer";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Providers from "@/provider";
import { ClusterProvider } from "@/anchor/cluster/cluster-data-access";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
 
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClusterProvider>
          <AppWalletProvider>
            <Providers>{children}</Providers>
            <Sonner />
            <Footer />
          </AppWalletProvider>
        </ClusterProvider>
      </body>
    </html>
  );
}
