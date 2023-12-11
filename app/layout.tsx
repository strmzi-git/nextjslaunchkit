import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "./providers/AuthSessionProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Next.js LaunchKit  ",
  description: "Build and Launch your SaaS landing page within 24h",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
        {/* For vercel analytics (page visitors, speed insights) */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
