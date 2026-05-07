import type { Metadata } from "next";
import { buildSeo } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title:
    "Best Kashi Ayodhya & Varanasi Tour Packages  — All Itineraries",
  description:
    "Browse 15+ curated Kashi Yatra, Ayodhya, Varanasi & Prayagraj tour packages for . From 2N/3D weekend yatras to 9-day Brij-to-Kashi mahayatras with VIP Ram Mandir darshan, Kashi Vishwanath Sugam Darshan, Ganga Aarti and luxury hotels. Best price guaranteed.",
  path: "/tour-packages",
  keywords: [
    "best kashi ayodhya tour packages ",
    "varanasi tour package",
    "ayodhya tour package",
    "kashi ayodhya tour package",
    "ayodhya ram mandir tour package",
    "varanasi prayagraj ayodhya tour package",
    "varanasi sarnath prayagraj ayodhya tour",
    "kashi yatra package list",
    "spiritual tour packages ",
    "uttar pradesh pilgrimage packages",
  ],
});

export default function TourPackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
