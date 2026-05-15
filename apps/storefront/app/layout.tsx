import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "De Notenman",
  description:
    "Van markt tot webshop: De specialist in noten, pitten en gedroogd fruit.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
