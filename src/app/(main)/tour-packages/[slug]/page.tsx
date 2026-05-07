import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PackageDetailContent from '@/app/components/PackageDetailContent';
import { packages } from '@/data/packages';
import { buildSeo } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) return {};

  return buildSeo({
    title: `${pkg.name} | ${pkg.duration} Tour Package 2026 · Best Price`,
    description: `${pkg.description} Book this ${pkg.duration} spiritual journey covering ${pkg.location} with VIP Ram Mandir darshan, Kashi Vishwanath Sugam Darshan, Ganga Aarti and luxury hotel + AC cab + meals. Best price guaranteed.`,
    path: `/tour-packages/${slug}`,
    image: pkg.image,
    keywords: [
      pkg.name.toLowerCase(),
      `${pkg.name.toLowerCase()} price`,
      `${pkg.name.toLowerCase()} cost`,
      `${pkg.duration.toLowerCase()} tour package`,
      `${pkg.location.toLowerCase()} tour`,
      'kashi yatra package',
      'ayodhya tour package',
      'varanasi tour package',
    ],
  });
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = packages.find(p => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  const numericPrice = pkg.price?.replace(/[^0-9]/g, "");
  const offer: Record<string, unknown> = {
    "@type": "Offer",
    url: `https://www.ramkashiyatra.com/tour-packages/${slug}`,
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    validFrom: new Date().toISOString().split("T")[0],
    offeredBy: {
      "@type": "TravelAgency",
      "@id": "https://www.ramkashiyatra.com/#organization",
      name: "Ram Kashi Yatra",
      url: "https://www.ramkashiyatra.com",
    },
  };
  if (numericPrice) offer.price = numericPrice;

  const tourTripLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `https://www.ramkashiyatra.com/tour-packages/${slug}#trip`,
    name: pkg.name,
    description: pkg.description,
    image: pkg.image,
    url: `https://www.ramkashiyatra.com/tour-packages/${slug}`,
    touristType: ["Pilgrims", "Spiritual Seekers", "Family", "Senior Citizens"],
    duration: pkg.duration,
    subjectOf: {
      "@type": "WebPage",
      url: `https://www.ramkashiyatra.com/tour-packages/${slug}`,
      inLanguage: "en-IN",
    },
    provider: { "@id": "https://www.ramkashiyatra.com/#organization" },
    offers: offer,
    itinerary: pkg.itinerary.map((item) => ({
      "@type": "ListItem",
      position: item.day,
      name: item.title,
      description: item.activities.join(", "),
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
      bestRating: "5",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.ramkashiyatra.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tour Packages",
        item: "https://www.ramkashiyatra.com/tour-packages",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pkg.name,
        item: `https://www.ramkashiyatra.com/tour-packages/${slug}`,
      },
    ],
  };

  const faqLd = pkg.faqs && pkg.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pkg.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourTripLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <PackageDetailContent pkg={pkg} />
    </>
  );
}
