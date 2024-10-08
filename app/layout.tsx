import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import {GlobalConfig} from "./app.config.js"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const futurot = localFont(
  {
    src: "./static-fonts/Futurot_rus.otf",
    variable: '--font-futurot',
    display: 'swap'
  }
);
const lazer = localFont(
  {
    src: "./static-fonts/Lazer84.ttf",
    display: 'swap',
    variable: '--font-lazer'
  }
)


export const metadata: Metadata = {
  title: GlobalConfig.sitename,
  description: "Vortex Left4Dead2",
  icons: {
    icon: './VortexLogo256.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} ${futurot.variable} ${lazer.variable}`}>
        <Providers>
          <div className="dark bg-obackground min-h-screen text-otext font-inter">
            <Header/>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
