import React from "react";
import type { Metadata } from "next";

import "./global.css";

import Navbar from "./components/Navbar";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barbeque House",
  description: "Number 1 stop for the best grilled food vendors in your city",
  icons: {
    icon: ["./favicon.ico"],
    apple: ["./apple-touch-icon.png?v=4"],
    shortcut: ["./apple-touch-icon.png"],
  },
  manifest: "./site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
