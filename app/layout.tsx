import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Life Admin AI",
  description: "AI-powered productivity app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="antialiased">{children}</body></html>;
}
