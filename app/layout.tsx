import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ahmedbk.com"),
  title: "Ahmed Ben Khalifa",
  description:
    "Full-stack software engineer. React and TypeScript on the web, Python on the backend, React Native on mobile, Kubernetes in production.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ahmed Ben Khalifa",
    description:
      "Full-stack software engineer building SpeakDuo: web, API, mobile, and the infrastructure they run on.",
    url: "https://www.ahmedbk.com",
    siteName: "Ahmed Ben Khalifa",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ahmed Ben Khalifa",
    description: "Full-stack software engineer.",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
