import Preloader from "@/components/preloader";
import "../globals.css";
import SmoothScrollProvider from "@/components/smooth";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import { routing } from "@/i18n/routing";

export const metadata = {
  title: "Jimmy Portfolio",
  description: "Welcome to my Portfolio",
};

export default async function RootLayout({ children , params }) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <NextIntlClientProvider>
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
    </NextIntlClientProvider>
    </html>
  );
}
