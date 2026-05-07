import type { Metadata } from "next";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import PilgrimageKeywordGuideContent from "@/app/components/PilgrimageKeywordGuideContent";
import { buildSeo, faqLd } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title:
    "Banaras · Ayodhya · Kashi Yatra Travel Guide 2026 | 500+ Keywords Answered",
  description:
    "Authoritative Banaras tour package, Ayodhya Ram Mandir package, Kashi Yatra package, Varanasi hotels & booking intent guide — long-tail keywords, planner phrases, riverside stays, VIP darshan, Ganga Aarti, Prayagraj add-ons. Ram Kashi Yatra planners answer every search cluster in one place.",
  path: "/banaras-kashi-ayodhya-travel-guide",
  keywords: [
    "banaras tour package",
    "banaras hotel booking",
    "best banaras package",
    "cheap banaras trip",
    "luxury banaras package",
    "ayodhya tour package",
    "ayodhya ram mandir package",
    "ram mandir darshan booking",
    "kashi yatra package",
    "kashi vishwanath vip darshan",
    "varanasi tour package",
    "varanasi hotel booking",
    "ganga aarti package varanasi",
    "hotels near kashi vishwanath",
    "banaras prayagraj ayodhya tour package",
    "book kashi yatra online",
    "book ayodhya package online",
    "banaras travel agency",
    "kashi prayagraj ayodhya tour",
    "banaras and ayodhya package",
    "budget hotels in banaras near ghats",
    "ayodhya vip darshan package",
    "banaras boat ride booking",
    "kashi yatra for senior citizens",
    "banaras weekend trip",
    "banaras pilgrimage tour",
    "kashi temple darshan tour",
    "banaras travel packages india",
  ],
});

const faqSchema = faqLd([
  {
    q: "What is the difference between a Banaras tour package and a Varanasi tour package?",
    a: "There is no difference in the experience — Banaras, Varanasi and Kashi refer to the same sacred city. Searchers use different names; reputable operators price Banaras tour packages and Varanasi tour packages on the same inclusions: Kashi Vishwanath darshan, ghats, Ganga Aarti, hotels, cab and guide.",
  },
  {
    q: "How do I book an affordable Ayodhya Ram Mandir package from Delhi or Mumbai?",
    a: "Start with train or flight timing, then lock hotel distance to the new temple corridor, private cab for darshan windows, and optional VIP queue assistance where officially available. Ayodhya package price varies by season; book early for weekends and festivals.",
  },
  {
    q: "Where should I stay for hotels near Kashi Vishwanath temple or ghats?",
    a: "Choose between riverside luxury, corridor walkable mid-range, or quiet Assi-side boutique properties. Hotels near Dashashwamedh Ghat suit Ganga Aarti; Assi Ghat suits slower mornings; station-near picks help late arrivals.",
  },
  {
    q: "Can one itinerary cover Banaras Prayagraj Ayodhya tour package routes?",
    a: "Yes. Most pilgrims spend 4–5 days: Varanasi for Kashi and Aarti, Prayagraj for Triveni Sangam, Ayodhya for Ram Mandir — road times are predictable on the expressways.",
  },
  {
    q: "What does luxury Kashi yatra package pricing usually include?",
    a: "Premium hotels, private AC vehicle, curated guides, priority or Sugam darshan help where permitted, reserved boat plans, sattvic meals options, and 24×7 concierge for changes.",
  },
  {
    q: "Is Kashi yatra by train package cheaper than flying?",
    a: "Often yes for Delhi/Mumbai routes when you book railways early; we align station transfers and hotels so the trip still feels seamless.",
  },
  {
    q: "Do you help with Banaras ganga aarti booking and boat rides?",
    a: "Yes — evening Aarti viewing, sunrise boat rides, and photography-friendly slots are scheduled around crowd patterns and safety.",
  },
  {
    q: "How can senior citizens plan Kashi yatra comfortably?",
    a: "Use shorter walking segments, ground-floor or elevator hotels, wheelchair-aware routes where possible, and escorted darshan timing to avoid peak heat.",
  },
]);

export default function BanarasKashiAyodhyaTravelGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="travel-guide-page">
        <section className="tg-hero">
          <div className="container" style={{ paddingTop: "120px", paddingBottom: "40px" }}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Travel keyword guide", href: "/banaras-kashi-ayodhya-travel-guide" },
              ]}
            />
            <p
              className="eyebrow"
              style={{ marginTop: "28px", marginBottom: "8px" }}
            >
              <i className="fas fa-map-signs" /> Ram Kashi Yatra · Knowledge hub
            </p>
            <p style={{ color: "rgba(255,255,255,0.88)", maxWidth: "720px" }}>
              One long-form reference for Banaras, Varanasi, Kashi and Ayodhya
              search intent — packages, hotels, darshan, cruises, budgets and
              planner phrases travellers actually type into Google.
            </p>
          </div>
        </section>

        <div className="container section-padding">
          <PilgrimageKeywordGuideContent />
        </div>
      </main>
    </>
  );
}
