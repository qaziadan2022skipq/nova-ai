import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iron Halo AI",
  description: "Developed by Qazi Adan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.className} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
