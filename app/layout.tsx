import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform2040",
  description: "Learning and career platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
