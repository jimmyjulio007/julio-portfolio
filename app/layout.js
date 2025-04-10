import Preloader from "@/components/preloader";
import "./globals.css";
import SmoothScrollProvider from "@/components/smooth";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata = {
  title: "Jimmy Portfolio",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <SmoothScrollProvider>
      { /* content */ }
      <body
        className={`antialiased`}
      >
        <Analytics />
        <Preloader />
        <SpeedInsights />
        {children}
      </body>
    </SmoothScrollProvider>
    </html>
  );
}
