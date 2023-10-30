import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import { NextAuthProvider } from "./Providers";
import ThemeProvider from "@/components/theme-provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CODE COLABS",
  description:
    "Learn how to code through interactive and and hands-on learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(montserrat.className, "bg-background")}>
        <NextAuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className="pt-[10vh]">{children}</div>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
