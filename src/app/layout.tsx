import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "CampusPe - Connect 10X Faster",
  description: "One platform connecting students, colleges & employers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
