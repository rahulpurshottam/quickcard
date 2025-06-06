import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QuickCard",
  description: "QuickCard - Your all-in-one platform for creating, updating, and tracking cards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                <div className="flex flex-col h-screen max-h-screen">
          <Nav />

          <div className="flex-grow overflow-y-auto bg-[#2b3441] text-[#f1f3f5]">
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
