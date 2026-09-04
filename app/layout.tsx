import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Big Film Fund — Film Investing. Reimagined.",
  description:
    "Big Film Fund is creating a new way to finance movies — powered by a technology platform that connects investors, filmmakers, and audiences.",
  authors: [{ name: "Big Film Fund" }],
  openGraph: {
    title: "Big Film Fund — Film Investing. Reimagined.",
    description:
      "Big Film Fund is creating a new way to finance movies — powered by a technology platform that connects investors, filmmakers, and audiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
