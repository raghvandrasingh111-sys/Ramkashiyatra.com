import type { Metadata } from "next";
import Breadcrumbs from "@/app/components/Breadcrumbs";
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
          <article className="keyword-guide-article">
            <header className="kg-header">
              <p className="kg-eyebrow">High Intent SEO Landing Content</p>
              <h1>
                Banaras Tour Packages | Ayodhya Tour Packages | Kashi Yatra
                Packages | Hotels in Banaras
              </h1>
              <p className="kg-lead">
                Welcome to the leading travel destination for{" "}
                <strong>Banaras tour packages</strong>,{" "}
                <strong>Ayodhya tour packages</strong>,{" "}
                <strong>Kashi Yatra packages</strong>, and premium{" "}
                <strong>hotels in Banaras</strong>. Experience the spiritual
                beauty of Varanasi, the divine atmosphere of Ayodhya, and the
                sacred charm of Kashi Vishwanath Temple with affordable and
                luxury travel packages designed for families, couples, groups,
                senior citizens, and pilgrims.
              </p>
              <p>
                We provide the best <strong>Banaras travel packages</strong>,{" "}
                <strong>Ayodhya Ram Mandir tour packages</strong>,{" "}
                <strong>Kashi Vishwanath darshan packages</strong>, and complete
                pilgrimage tours with hotel booking, sightseeing, taxi service,
                VIP darshan assistance, and customized travel plans.
              </p>
            </header>

            <section>
              <h2>Best Banaras Tour Package Services</h2>
              <p>
                Looking for the best <strong>Banaras tour package</strong>? We
                offer complete travel solutions including:
              </p>
              <ul>
                <li>Banaras sightseeing package</li>
                <li>Banaras family tour package</li>
                <li>Banaras honeymoon package</li>
                <li>Banaras luxury travel package</li>
                <li>Banaras budget tour package</li>
                <li>Banaras pilgrimage package</li>
                <li>Banaras temple tour</li>
                <li>Banaras spiritual tour</li>
                <li>Banaras ganga aarti package</li>
                <li>Banaras boat ride package</li>
                <li>Banaras holiday package</li>
                <li>Banaras weekend trip</li>
                <li>Banaras darshan package</li>
                <li>Banaras local sightseeing</li>
                <li>Banaras tour with Prayagraj</li>
                <li>Banaras and Ayodhya package</li>
                <li>Banaras tour package from Delhi</li>
                <li>Banaras tour package from Mumbai</li>
                <li>Banaras package from Gurgaon</li>
                <li>Banaras package from Noida</li>
                <li>Banaras package from Chandigarh</li>
                <li>Banaras package from Lucknow</li>
              </ul>
              <p>Visit famous places in Varanasi including:</p>
              <ul>
                <li>Kashi Vishwanath Temple</li>
                <li>Dashashwamedh Ghat</li>
                <li>Assi Ghat</li>
                <li>Sarnath</li>
                <li>Manikarnika Ghat</li>
              </ul>
              <p>
                Our Banaras tourism services include private cab booking, hotel
                reservations, river cruise tours, ganga aarti experience, temple
                darshan, heritage walk, spiritual retreat, and guided city
                tours.
              </p>
            </section>

            <section>
              <h2>Ayodhya Tour Package | Ram Mandir Darshan Package</h2>
              <p>
                Book the most affordable and premium{" "}
                <strong>Ayodhya tour package</strong> for your spiritual journey
                to the holy city of Lord Ram.
              </p>
              <p>We offer:</p>
              <ul>
                <li>Ayodhya Ram Mandir package</li>
                <li>Ayodhya darshan package</li>
                <li>Ayodhya pilgrimage tour</li>
                <li>Ayodhya family holiday package</li>
                <li>Ayodhya temple tour</li>
                <li>Ayodhya luxury package</li>
                <li>Ayodhya budget package</li>
                <li>Ayodhya spiritual tour</li>
                <li>Ayodhya sightseeing package</li>
                <li>Ayodhya VIP darshan package</li>
                <li>Ayodhya Ram Janmabhoomi tour</li>
                <li>Ayodhya travel package from Delhi</li>
                <li>Ayodhya package from Varanasi</li>
                <li>Ayodhya package from Mumbai</li>
                <li>Ayodhya package from Bangalore</li>
                <li>Ayodhya package from Hyderabad</li>
                <li>Ayodhya pilgrimage from Haryana</li>
              </ul>
              <p>Explore sacred attractions in Ayodhya including:</p>
              <ul>
                <li>Ram Mandir Ayodhya</li>
                <li>Hanuman Garhi</li>
                <li>Kanak Bhawan</li>
                <li>Saryu River</li>
              </ul>
              <p>
                We provide Ayodhya hotel booking, local taxi service, temple
                darshan assistance, affordable holiday deals, group tour
                booking, customized pilgrimage tours, and complete travel
                planning.
              </p>
            </section>

            <section>
              <h2>Kashi Yatra Package | Kashi Vishwanath Darshan</h2>
              <p>
                Experience divine spirituality with our exclusive{" "}
                <strong>Kashi Yatra packages</strong> and{" "}
                <strong>Kashi Vishwanath darshan tours</strong>.
              </p>
              <p>Our Kashi travel services include:</p>
              <ul>
                <li>Kashi Yatra package</li>
                <li>Kashi Vishwanath package</li>
                <li>Kashi spiritual tour</li>
                <li>Kashi pilgrimage package</li>
                <li>Kashi darshan package</li>
                <li>Kashi temple tour</li>
                <li>Kashi ganga aarti tour</li>
                <li>Kashi moksha yatra</li>
                <li>Kashi family package</li>
                <li>Kashi luxury pilgrimage</li>
                <li>Kashi budget pilgrimage</li>
                <li>Kashi heritage walk</li>
                <li>Kashi guided city tour</li>
                <li>Kashi temple circuit</li>
                <li>Kashi tour from Delhi</li>
                <li>Kashi Yatra from Gurgaon</li>
                <li>Kashi package with hotel</li>
                <li>Kashi VIP darshan</li>
                <li>Kashi travel and stay package</li>
              </ul>
              <p>
                Visit the sacred temples and ghats of Varanasi while enjoying
                comfortable accommodations, professional guides, affordable
                packages, and seamless travel assistance.
              </p>
            </section>

            <section>
              <h2>Best Hotels in Banaras | Luxury & Budget Stay</h2>
              <p>
                Find the best <strong>hotels in Banaras</strong> near temples,
                ghats, and tourist attractions.
              </p>
              <p>We offer:</p>
              <ul>
                <li>Budget hotels in Banaras</li>
                <li>Luxury hotels in Banaras</li>
                <li>Hotels near Kashi Vishwanath Temple</li>
                <li>Hotels near Dashashwamedh Ghat</li>
                <li>Hotels near Assi Ghat</li>
                <li>Hotels near ganga aarti</li>
                <li>Riverside hotels in Banaras</li>
                <li>Family hotels in Banaras</li>
                <li>Banaras honeymoon hotels</li>
                <li>Banaras guest houses</li>
                <li>Banaras dharamshala booking</li>
                <li>Banaras 5 star hotels</li>
                <li>Banaras 4 star hotels</li>
                <li>Banaras affordable accommodation</li>
                <li>Banaras river view hotels</li>
                <li>Banaras hotel booking online</li>
                <li>Banaras room reservation</li>
                <li>Banaras stay package</li>
                <li>Hotels near Banaras railway station</li>
                <li>Banaras premium suites</li>
              </ul>
              <p>
                Whether you need a budget stay, deluxe room, family
                accommodation, heritage hotel, boutique stay, or luxury
                riverside resort, we provide the best hotel booking services in
                Varanasi.
              </p>
            </section>

            <section>
              <h2>Why Choose Our Banaras & Ayodhya Travel Services</h2>
              <ul>
                <li>Affordable travel packages</li>
                <li>Luxury pilgrimage tours</li>
                <li>Customized holiday plans</li>
                <li>VIP temple darshan assistance</li>
                <li>Hotel booking support</li>
                <li>Private cab services</li>
                <li>Guided sightseeing tours</li>
                <li>Family-friendly packages</li>
                <li>Senior citizen travel assistance</li>
                <li>Trusted travel agency</li>
                <li>Online booking support</li>
                <li>24x7 customer assistance</li>
                <li>Experienced travel planners</li>
                <li>Complete spiritual tourism solutions</li>
              </ul>
              <p>We specialize in:</p>
              <ul>
                <li>Banaras tourism</li>
                <li>Ayodhya tourism</li>
                <li>Kashi tourism</li>
                <li>Religious tourism in India</li>
                <li>Spiritual holiday packages</li>
                <li>Temple tours in Uttar Pradesh</li>
                <li>Pilgrimage travel services</li>
                <li>Ganga aarti tours</li>
                <li>Ram Mandir darshan tours</li>
                <li>Kashi Vishwanath temple tours</li>
              </ul>
            </section>

            <section>
              <h2>Book Banaras, Ayodhya & Kashi Tour Packages Today</h2>
              <p>
                Plan your next spiritual journey with the best travel experts
                for:
              </p>
              <ul>
                <li>Banaras travel package</li>
                <li>Ayodhya holiday package</li>
                <li>Kashi Yatra package</li>
                <li>Banaras hotel booking</li>
                <li>Ayodhya temple tour</li>
                <li>Kashi Vishwanath darshan</li>
                <li>Banaras ganga aarti tour</li>
                <li>Banaras and Ayodhya combined package</li>
                <li>Spiritual India tour package</li>
                <li>Religious travel package India</li>
              </ul>
              <p>
                Experience unforgettable moments in the holy cities of Varanasi
                and Ayodhya with affordable pricing, premium services, and
                complete customer satisfaction.
              </p>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
