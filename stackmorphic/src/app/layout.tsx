import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.stackmorphic.com",
  ),
  title: {
    default: "Stackmorphic | Full-Stack Web Development & Modern Websites",
    template: "%s | Stackmorphic",
  },
  description:
    "Stackmorphic builds modern, responsive websites and full-stack web applications for businesses in Madhyamgram, Kolkata and beyond.",
  applicationName: "Stackmorphic",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stackmorphic | Full-Stack Web Development & Modern Websites",
    description:
      "Stackmorphic builds modern, responsive websites and full-stack web applications for businesses in Madhyamgram, Kolkata and beyond.",
    type: "website",
    url: "/",
    siteName: "Stackmorphic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stackmorphic | Full-Stack Web Development & Modern Websites",
    description:
      "Stackmorphic builds modern, responsive websites and full-stack web applications for businesses in Madhyamgram, Kolkata and beyond.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
