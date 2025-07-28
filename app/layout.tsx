'use client'
import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { PageLoader } from "@/components/Loader"; // 👈 assuming this exists

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 4000); // ⏱️ 4 seconds

    return () => clearTimeout(timeout); // clean up
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {showLoader ? (
            <PageLoader /> // 👈 your animated splash screen
          ) : (
            <>
              {children}
              <Footer />
              <Toaster />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
