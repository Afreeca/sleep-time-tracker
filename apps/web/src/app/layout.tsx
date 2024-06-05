import ErrorBoundary from "@/components/ErrorBoundary";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sleep-time tracker",
  description: "Track your sleeping time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ErrorBoundary>
        <body className={inter.className}>
          <NavBar />
          <main>{children}</main>
        </body>
      </ErrorBoundary>
    </html>
  );
}
