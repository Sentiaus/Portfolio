import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";


const SourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif"
})


export const metadata: Metadata = {
  title: "Victor Fawole's Page",
  description: "Everything about Victor Fawole",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SourceSerif.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
