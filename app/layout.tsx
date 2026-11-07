import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "./fonts/inter-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/inter-500.ttf", weight: "500", style: "normal" },
    { path: "./fonts/inter-600.ttf", weight: "600", style: "normal" },
    { path: "./fonts/inter-700.ttf", weight: "700", style: "normal" },
    { path: "./fonts/inter-800.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

const spaceGrotesk = localFont({
  src: [
    { path: "./fonts/space-grotesk-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/space-grotesk-500.ttf", weight: "500", style: "normal" },
    { path: "./fonts/space-grotesk-600.ttf", weight: "600", style: "normal" },
    { path: "./fonts/space-grotesk-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Beevora Labs | Innovating Tomorrow's Technology",
  description: "Beevora Labs - Your partner in digital transformation. We provide cutting-edge SaaS solutions including TotO-L Omni-channel Platform and Orbit-Trace CRM.",
  icons: {
    icon: [
      { url: "/icon.ico/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.ico/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.ico/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon.ico/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/icon.ico/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/icon.ico/favicon.ico"],
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
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          dangerouslySetInnerHTML={{
            __html: `try { document.documentElement.classList.toggle('dark', localStorage.getItem('theme') !== 'light'); } catch {}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
