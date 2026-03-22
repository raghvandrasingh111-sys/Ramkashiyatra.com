import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PackageDetailContent from '@/components/PackageDetailContent';
import { packages } from '@/data/packages';

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
  const pkg = packages.find(p => p.slug === slug);

  if (!pkg) return {};

  return {
    title: `${pkg.name} | ${pkg.duration} Varanasi Ayodhya Package 2026`,
    description: `${pkg.description} Book this ${pkg.duration} spiritual journey to ${pkg.location} with Luxury Trip India. Includes RAM Mandir Darshan and Kashi Vishwanath services.`,
    alternates: {
      canonical: `https://varanasiayodhya.com/tour-packages/${slug}`,
    },
    openGraph: {
      title: `${pkg.name} - ${pkg.duration} Tour Package`,
      description: pkg.description,
      url: `https://varanasiayodhya.com/tour-packages/${slug}`,
      images: [{ url: pkg.image }],
    }
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = packages.find(p => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  const tourTripLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": pkg.name,
    "description": pkg.description,
    "image": pkg.image,
    "touristType": "Pilgrims, Spiritual Seekers",
    "offers": {
      "@type": "Offer",
      "url": `https://varanasiayodhya.com/tour-packages/${slug}`,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "offeredBy": {
        "@type": "TravelAgency",
        "name": "Luxury Trip India",
        "url": "https://varanasiayodhya.com"
      }
    },
    "itinerary": pkg.itinerary.map(item => ({
      "@type": "ListItem",
      "position": item.day,
      "name": item.title,
      "description": item.activities.join(", ")
    }))
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://varanasiayodhya.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tour Packages",
        "item": "https://varanasiayodhya.com/tour-packages"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pkg.name,
        "item": `https://varanasiayodhya.com/tour-packages/${slug}`
      }
    ]
  };

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
      <PackageDetailContent pkg={pkg} />
    </>
  );
}
