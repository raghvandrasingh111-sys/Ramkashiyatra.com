import type { Metadata } from "next";
import { buildSeo } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title:
    "Enquire Now — Book Kashi Yatra, Ayodhya & Varanasi Tour Packages",
  description:
    "Plan your Kashi Yatra, Ayodhya, Varanasi or Prayagraj tour package with our concierge team. Tell us your dates, group size and preferences — get a custom luxury itinerary with VIP Ram Mandir darshan and Kashi Vishwanath Sugam Darshan within 60 minutes.",
  path: "/enquire-now",
  keywords: [
    "book kashi yatra",
    "ayodhya tour booking",
    "varanasi tour enquiry",
    "ram mandir darshan booking",
    "custom kashi ayodhya tour",
    "spiritual tour enquiry india",
  ],
});

export default function EnquireNowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
