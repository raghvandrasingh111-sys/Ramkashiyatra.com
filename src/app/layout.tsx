import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  metadataBase: new URL("https://varanasiayodhya.com"),
  title: {
    default: "Luxury Trip India | Best Varanasi & Ayodhya Tour Packages 2026",
    template: "%s | Luxury Trip India"
  },
  description: "Book customized Varanasi Ayodhya Tour Packages for 2026. Specializing in Ram Mandir Darshan tours, Kashi Vishwanath spiritual journeys, and Prayagraj Sangam trips with premium AC vehicles and expert guides.",
  keywords: [
    "Varanasi Ayodhya tour package 2026",
    "Ayodhya tour packages from Delhi",
    "Ram Mandir Ayodhya tour package",
    "Kashi Vishwanath temple tour",
    "Varanasi tour packages for family",
    "Prayagraj Sangam tour package",
    "Best travel agency for Varanasi Ayodhya",
    "Spiritual tours Uttar Pradesh",
    "Luxury Trip India",
    "Varanasi Ayodhya Prayagraj itinerary"
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Luxury Trip India | Premium Varanasi & Ayodhya Tour Packages",
    description: "Experience the ultimate spiritual journey with our 2026 tour packages. Customized itineraries for Ayodhya, Varanasi, Prayagraj, and more.",
    url: "https://varanasiayodhya.com/",
    siteName: "Luxury Trip India",
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
    title: "Luxury Trip India | Ayodhya Varanasi Tour Packages",
    description: "Book your specialized spiritual journey to Ayodhya and Varanasi with expert guides and premium comfort.",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Luxury Trip India",
              "url": "https://varanasiayodhya.com",
              "logo": "https://luxurytripindia.com/img/logo-luxury.png",
              "image": "https://varanasiayodhya.com/og-image.jpg",
              "description": "Leading travel agency for spiritual and cultural tours in North India, specializing in Varanasi, Ayodhya, Prayagraj, and Lucknow tour packages.",
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
            })
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
