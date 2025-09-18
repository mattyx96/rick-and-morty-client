import type { Metadata } from "next";
import { Bangers, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

export const metadata: Metadata = {
  title: "Rick & Morty",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          "min-h-screen flex flex-col grow" +
          " " +
          `${geistSans.variable} ${geistMono.variable} ${bangers.variable} antialiased`
        }
      >
        {/*above the fold*/}
        <div className="flex min-h-screen flex-col grow">
          <Header />
          <div className="container mx-auto flex flex-col grow p-2 md:p-0">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
