import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stackmorphic | Digital products with momentum",
  description: "Stackmorphic builds modern websites and web applications for businesses that want to move with clarity.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
