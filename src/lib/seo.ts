import type { Metadata } from "next";

export const SITE_URL = "https://www.ramkashiyatra.com";
export const BRAND = "Ram Kashi Yatra";

export const SHARED_KEYWORDS = [
  "kashi yatra package",
  "kashi yatra",
  "ayodhya tour package",
  "ayodhya ram mandir tour package",
  "varanasi tour package",
  "kashi ayodhya tour package",
  "varanasi ayodhya tour package 2026",
  "ram mandir darshan tour package",
  "kashi vishwanath vip darshan",
  "ganga aarti package varanasi",
  "triveni sangam tour package",
  "luxury kashi ayodhya tour",
  "spiritual tour packages india",
  "ram kashi yatra",
  "luxury trip india",
];

export interface PageSeoInput {
  title: string;
  description: string;
  path: string; // path starting with "/"
  keywords?: string[];
  image?: string;
  noindex?: boolean;
}

/**
 * Build a fully-loaded Metadata object for a route.
 * Title is rendered as `${title} | Ram Kashi Yatra` via the root template.
 */
export function buildSeo({
  title,
  description,
  path,
  keywords = [],
  image = "/logo-luxury.png",
  noindex = false,
}: PageSeoInput): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    keywords: Array.from(new Set([...keywords, ...SHARED_KEYWORDS])),
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
        "x-default": url,
      },
    },
    openGraph: {
      title: `${title} | ${BRAND}`,
      description,
      url,
      siteName: BRAND,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BRAND}`,
      description,
      images: [image],
      site: "@ramkashiyatra",
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

/* ─────────────────────────────────────────────────────
   Reusable BreadcrumbList JSON-LD generator
   ───────────────────────────────────────────────────── */
export function breadcrumbsLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/* ─────────────────────────────────────────────────────
   FAQPage JSON-LD
   ───────────────────────────────────────────────────── */
export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
