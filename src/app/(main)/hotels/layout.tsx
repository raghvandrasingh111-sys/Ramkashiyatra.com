import type { Metadata } from "next";
import { buildSeo } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title:
    "Best Hotels in Varanasi, Ayodhya, Prayagraj & Lucknow — Luxury Heritage Stays",
  description:
    "Book the best hotels in Varanasi, Ayodhya, Prayagraj & Lucknow at lowest price. Heritage palaces (BrijRama, Taj Nadesar), 5-star Hyatt, Hilton, Marriott, Radisson, Novotel & ITC properties — close to Kashi Vishwanath, Ram Mandir, Triveni Sangam and Bara Imambara. 4.8★ · 100+ verified hotels.",
  path: "/hotels",
  keywords: [
    "best hotels in varanasi",
    "hotels in ayodhya near ram mandir",
    "luxury hotels in varanasi",
    "hotels in prayagraj near sangam",
    "5 star hotels lucknow",
    "ayodhya hotel booking",
    "varanasi hotel booking online",
    "taj nadesar palace varanasi",
    "brijrama palace varanasi",
    "hyatt regency lucknow",
    "heritage hotels uttar pradesh",
    "spiritual stays kashi ayodhya",
  ],
});

export default function HotelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
