import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ramkashiyatra.com"),
  title: {
    default: "Kashi Ayodhya Tour Packages 2026 | Ram Kashi Yatra",
    template: "%s | Ram Kashi Yatra"
  },
  description: "Book affordable Kashi Yatra & Ayodhya tour packages with Ram Kashi Yatra. मंदिर दर्शन, hotel, travel included. Best prices for 2026 spiritual journeys.",
  keywords: [
    "kashi yatra package",
    "ayodhya tour package",
    "varanasi tour packages",
    "kashi ayodhya tour package",
    "kashi yatra package from delhi",
    "ayodhya ram mandir tour package price",
    "3 days varanasi itinerary",
    "kashi darshan package cost",
    "varanasi ayodhya tour package 2026",
    "Ram Kashi Yatra"
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Ram Kashi Yatra | Premium Varanasi & Ayodhya Tour Packages",
    description: "Experience the ultimate spiritual journey with our 2026 tour packages. Affordable Kashi Yatra, Ayodhya, and Prayagraj itineraries.",
    url: "https://www.ramkashiyatra.com/",
    siteName: "Ram Kashi Yatra",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Varanasi Ayodhya Spiritual Tour",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Kashi Yatra | Ayodhya Varanasi Tour Packages",
    description: "Book your specialized spiritual journey to Ayodhya and Varanasi with expert guides and affordable comfort.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "TravelAgency",
                "name": "Ram Kashi Yatra",
                "url": "https://www.ramkashiyatra.com",
                "logo": "https://www.ramkashiyatra.com/favicon.png",
                "image": "https://www.ramkashiyatra.com/og-image.jpg",
                "description": "Leading travel agency for spiritual and cultural tours in North India, specializing in Varanasi, Ayodhya, Prayagraj, and Lucknow tour packages.",
                "foundingDate": "2015",
                "areaServed": ["Varanasi", "Ayodhya", "Prayagraj", "Lucknow", "Gaya"],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "F2/30, Imlok -02 M Near Taj, Nadesar",
                  "addressLocality": "Varanasi",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "221002",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "25.3331",
                  "longitude": "82.9772"
                },
                "telephone": "+91-9999995475",
                "priceRange": "$$",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "08:00",
                    "closes": "20:00"
                  }
                ],
                "sameAs": [
                  "https://www.facebook.com/profile.php?id=61564188934197",
                  "https://www.instagram.com/luxurytripindia"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": "https://www.ramkashiyatra.com",
                "name": "Ram Kashi Yatra",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.ramkashiyatra.com/tour-packages?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ])
          }}
        />
        <Navbar />
        {children}
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
