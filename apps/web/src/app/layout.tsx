import ErrorBoundary from "@/components/ErrorBoundary";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const appName = process.env.NEXT_PUBLIC_APP_NAME;
const appdescription = process.env.NEXT_PUBLIC__APP_DESCRIPTION;

export const metadata: Metadata = {
  title: appName,
  description: appdescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ErrorBoundary>
        <StoreProvider>
          <body className={inter.className}>
            <NavBar />
            <main className="h-fullWithNav overflow-hidden p-10">
              {children}
            </main>
          </body>
        </StoreProvider>
      </ErrorBoundary>
    </html>
  );
}
