import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://momen-ai.vercel.app"
  ),
  title: {
    default: "Momen — AI Builder & Software Developer",
    template: "%s | Momen",
  },
  description:
    "Portfolio of Momen, an AI builder and software developer creating modern digital experiences, intelligent workflows, and practical software solutions.",
  keywords: [
    "Momen",
    "AI Builder",
    "Software Developer",
    "AI Tools",
    "Next.js",
    "React",
    "TypeScript",
    "Automation",
    "n8n",
    "Point of Sale",
    "Web Developer",
  ],
  authors: [{ name: "Momen" }],
  creator: "Momen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://momen-ai.vercel.app",
    title: "Momen — AI Builder & Software Developer",
    description:
      "Turning ideas into intelligent solutions. Modern digital experiences, intelligent workflows, and software solutions.",
    siteName: "Momen Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Momen — AI Builder & Software Developer",
    description:
      "Turning ideas into intelligent solutions. Modern digital experiences, intelligent workflows, and software solutions.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FAFAF8] text-[#152238] antialiased selection:bg-[#FFE3CC] selection:text-[#152238] min-h-screen flex flex-col relative">
        {/* Subtle Warm Background Glow */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#FFE3CC]/30 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="fixed bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-t from-[#FFE3CC]/20 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
