import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { TopNavbar } from "@/components/navbars/top-navbar";

export const metadata: Metadata = {
  title: "Viron Solar",
  description: "Viron Solar is a leading provider of solar energy solutions, specializing in residential and commercial solar panel installations. Our expert team delivers high-efficiency solar systems designed to lower electricity bills and reduce carbon emissions. With cutting-edge technology and personalized service, Viron Solar helps you harness clean, renewable energy for a sustainable future. Choose Viron Solar for reliable solar power, professional installation, and long-term savings.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <TopNavbar />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
