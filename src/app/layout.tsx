import type { Metadata, Viewport } from "next";
import { Poppins, Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingContact from "@/app/components/FloatingContact";
import ScrollToTop from "@/app/components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-dancing",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#E8842B",
};

const SITE_URL = "https://www.ramkashiyatra.com";
const BRAND = "Ram Kashi Yatra";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Kashi Yatra Package  | Ayodhya Varanasi Tour Packages | Ram Kashi Yatra",
    template: "%s | Ram Kashi Yatra",
  },
  description:
    "Book best Kashi Yatra package & Ayodhya Varanasi tour packages  at lowest price. VIP Ram Mandir Darshan, Kashi Vishwanath Sugam Darshan, Ganga Aarti & Triveni Sangam Snan included. Hotel + Cab + Meals. Customised Varanasi Ayodhya Prayagraj tours from Delhi, Mumbai, Gujarat, Punjab, Bihar. Govt. approved · 4.9★ · 1000+ pilgrims served.",
  applicationName: BRAND,
  referrer: "origin-when-cross-origin",
  authors: [{ name: BRAND, url: SITE_URL }],
  creator: BRAND,
  publisher: "Luxury Trip India",
  category: "Travel",
  keywords: [
    "kashi yatra package",
    "kashi yatra",
    "kashi yatra package from delhi",
    "kashi yatra package from mumbai",
    "kashi yatra package from gujarat",
    "kashi yatra package from punjab",
    "kashi yatra package from bihar",
    "ayodhya tour package",
    "ayodhya tour packages",
    "ayodhya tour package price",
    "ram mandir darshan tour package",
    "ram mandir tour package",
    "ayodhya ram mandir tour package price",
    "ayodhya ram janmabhoomi tour",
    "varanasi tour package",
    "varanasi tour packages",
    "varanasi tour package cost",
    "banaras tour package",
    "banaras travel package",
    "kashi tour package",
    "3 days varanasi itinerary",
    "kashi ayodhya tour package",
    "kashi ayodhya tour package 3 days",
    "varanasi ayodhya tour package",
    "varanasi ayodhya prayagraj tour package",
    "kashi prayag ayodhya tour",
    "kashi vishwanath darshan package",
    "kashi vishwanath vip darshan",
    "sugam darshan kashi vishwanath",
    "ganga aarti package varanasi",
    "triveni sangam tour package",
    "prayagraj tour package",
    "lucknow ayodhya tour package",
    "mathura vrindavan ayodhya tour package",
    "bodhgaya kashi tour package",
    "varanasi gaya tour package",
    "varanasi sarnath tour package",
    "varanasi ayodhya tour package ",
    "best kashi yatra tour operator",
    "luxury kashi ayodhya tour",
    "spiritual tour packages india",
    "uttar pradesh tour packages",
    "ram mandir ayodhya darshan booking",
    "madhya pradesh tour package",
    "ujjain omkareshwar tour package",
    "madhya pradesh wildlife safari",
    "ram kashi yatra",
    "luxury trip india",
  ],
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title:
      "Kashi Yatra Package  | Ayodhya Varanasi Tour Packages | Ram Kashi Yatra",
    description:
      "Premium Kashi (Varanasi), Ayodhya, Prayagraj & Lucknow tour packages with VIP darshan, luxury hotels and 24×7 concierge. Book your divine journey today.",
    url: `${SITE_URL}/`,
    siteName: BRAND,
    images: [
      {
        url: "/logo-luxury.png",
        width: 1200,
        height: 630,
        alt: "Ram Kashi Yatra · Premium Varanasi Ayodhya Tour Packages",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kashi Yatra Package  | Ayodhya Varanasi Tour Packages | Ram Kashi Yatra",
    description:
      "Book premium Kashi Yatra & Ayodhya Varanasi tour packages with VIP darshan, luxury stays and 24×7 concierge.",
    images: ["/logo-luxury.png"],
    site: "@ramkashiyatra",
    creator: "@ramkashiyatra",
  },
  icons: {
    icon: "/logo-luxury.png",
    apple: "/logo-luxury.png",
    shortcut: "/logo-luxury.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // Replace with actual verification codes once issued
    google: "",
    yandex: "",
    other: { "msvalidate.01": "" },
  },
};

/* ─────────────────────────────────────────────────────────────
   Site-wide JSON-LD Knowledge Graph
   ───────────────────────────────────────────────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness", "Organization"],
  "@id": `${SITE_URL}/#organization`,
  name: BRAND,
  alternateName: ["Luxury Trip India", "Ramkashiyatra"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: `${SITE_URL}/logo-luxury.png`,
    contentUrl: `${SITE_URL}/logo-luxury.png`,
    caption: BRAND,
    inLanguage: "en-IN",
  },
  image: `${SITE_URL}/logo-luxury.png`,
  description:
    "Ram Kashi Yatra is India's premium luxury spiritual travel agency for Kashi (Varanasi), Ayodhya, Prayagraj, Lucknow and Bodhgaya tour packages. VIP Kashi Vishwanath darshan, Ram Mandir entry, Ganga Aarti and 24×7 concierge included.",
  slogan: "The Ultimate Spiritual Journey · Crafted with Devotion and Luxury.",
  foundingDate: "2015",
  knowsAbout: [
    "Kashi Yatra Package",
    "Ayodhya Tour Package",
    "Varanasi Tour Package",
    "Ram Mandir Darshan",
    "Kashi Vishwanath Sugam Darshan",
    "Ganga Aarti",
    "Triveni Sangam Snan",
    "Pind Daan in Gaya & Prayagraj",
    "Sarnath Tours",
    "Mahabodhi Temple Bodhgaya",
    "Mathura Vrindavan Tours",
    "Spiritual Travel India",
    "Madhya Pradesh Tour Package",
    "Ujjain Omkareshwar Jyotirlinga Darshan",
  ],
  areaServed: [
    { "@type": "City", name: "Varanasi" },
    { "@type": "City", name: "Ayodhya" },
    { "@type": "City", name: "Prayagraj" },
    { "@type": "City", name: "Lucknow" },
    { "@type": "City", name: "Bodhgaya" },
    { "@type": "City", name: "Mathura" },
    { "@type": "City", name: "Vrindavan" },
    { "@type": "City", name: "Ujjain" },
    { "@type": "City", name: "Omkareshwar" },
    { "@type": "City", name: "Indore" },
    { "@type": "City", name: "Khajuraho" },
    { "@type": "City", name: "Pachmarhi" },
    { "@type": "City", name: "Gwalior" },
    { "@type": "Country", name: "India" },
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "F2/30, Imlok-02 M, Near Taj, Nadesar",
      addressLocality: "Varanasi",
      addressRegion: "Uttar Pradesh",
      postalCode: "221002",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "FF-105, Rodeo Drive Mall, Kundli",
      addressLocality: "Sonipat",
      addressRegion: "Haryana",
      postalCode: "131028",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Sujata Bypass Road, Near Hotel Star",
      addressLocality: "Bodhgaya",
      addressRegion: "Bihar",
      postalCode: "824231",
      addressCountry: "IN",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "25.3331",
    longitude: "82.9772",
  },
  hasMap:
    "https://www.google.com/maps/place/Varanasi,+Uttar+Pradesh/@25.3331,82.9772,12z/",
  telephone: "+91-9999995475",
  email: "info@luxurytripindia.com",
  priceRange: "₹₹",
  paymentAccepted: ["Cash", "Credit Card", "UPI", "Net Banking", "Debit Card"],
  currenciesAccepted: "INR",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9999995475",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "1800-5705-475",
      contactType: "reservations",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1000",
    bestRating: "5",
    worstRating: "1",
  },
  award: [
    "Approved by UP Tourism (Government of Uttar Pradesh)",
    "Approved by Bihar Tourism",
    "Recognised by Ministry of Tourism, Government of India",
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61564188934197",
    "https://www.instagram.com/luxurytripindia",
    "https://www.youtube.com/@ramkashiyatra",
    "https://twitter.com/ramkashiyatra",
    "https://www.linkedin.com/company/ramkashiyatra",
    "https://wa.me/919999995475",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BRAND,
  description:
    "Premium Kashi Yatra · Ayodhya · Varanasi · Prayagraj tour packages.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/tour-packages?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      name: "Kashi Yatra Package",
      url: `${SITE_URL}/kashi-yatra-package`,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "India",
      serviceType: "Spiritual Tour Package",
      description:
        "Complete Kashi Yatra package covering Kashi Vishwanath Temple, Ganga Aarti, Sarnath and Sangam.",
    },
    {
      "@type": "Service",
      name: "Ayodhya Tour Package",
      url: `${SITE_URL}/ayodhya-tour-package`,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "India",
      serviceType: "Spiritual Tour Package",
      description:
        "Ayodhya Ram Mandir darshan tour package with priority entry, hotel and cab.",
    },
    {
      "@type": "Service",
      name: "Varanasi Tour Package",
      url: `${SITE_URL}/varanasi-tour-package`,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "India",
      serviceType: "Spiritual Tour Package",
      description:
        "Varanasi tour package with Kashi Vishwanath VIP darshan, Ganga Aarti boat ride and Sarnath.",
    },
    {
      "@type": "Service",
      name: "Kashi Ayodhya Tour Package",
      url: `${SITE_URL}/kashi-ayodhya-tour-package`,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "India",
      serviceType: "Spiritual Tour Package",
      description:
        "Kashi Ayodhya combined tour package — Varanasi + Ayodhya in 3 to 5 days.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${poppins.variable} ${plusJakartaSans.variable} ${dancingScript.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://upload.wikimedia.org" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://commons.wikimedia.org" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Varanasi" />
        <meta name="geo.position" content="25.3331;82.9772" />
        <meta name="ICBM" content="25.3331, 82.9772" />
      </head>
      <body>
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}</Script>
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              websiteSchema,
              servicesSchema,
            ]),
          }}
        />
        <Navbar />
        {children}
        <FloatingContact />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
