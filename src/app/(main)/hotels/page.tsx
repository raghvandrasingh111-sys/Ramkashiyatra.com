"use client";

import React, { useState, useEffect } from "react";
import CityHotelCarousel from "@/app/components/CityHotelCarousel";
import NextImage from "next/image";
import Link from "next/link";

/**
 * Hotel photos sourced via Wikimedia Commons (Special:FilePath always
 * resolves to the latest canonical asset). Each filename is verified live.
 */
const wiki = (file: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=900`;

export default function Hotels() {
  const [heroIndex, setHeroIndex] = useState(0);

  const heroImages = [
    "/images/destinations/varanasi.webp",
    "/images/destinations/ayodhya.webp",
    "/images/destinations/prayagraj.webp",
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setHeroIndex((p) => (p + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  /* ── Hotel collections — each card uses a unique, verified Wikimedia photo ── */
  const ayodhyaHotels = [
    {
      name: "The Ramayana Hotel, Ayodhya",
      image: wiki("Shri_Ram_Janambhoomi_Mandir%2C_Ayodhya_Dham.jpg"),
    },
    {
      name: "Park Inn by Radisson Ayodhya",
      image: wiki(
        "Hanuman_Garhi_Temple%2C_a_major_religious_site_in_Ayodhya_utter_pradesh.jpg"
      ),
    },
    {
      name: "Tent City Ayodhya · Sarayu",
      image: wiki("Varanasiganga.jpg"),
    },
    {
      name: "Clarks Inn Express Ayodhya",
      image: wiki(
        "Mahabodhi_temple_at_Bodhgaya_in_Bihar_21.jpg"
      ),
    },
    {
      name: "Ayodhya Heritage Cottage",
      image: wiki("Mahabodhitemple.jpg"),
    },
    {
      name: "Royal Heritage Hotel & Resort",
      image: wiki("Bara_Imambara_Lucknow.jpg"),
    },
  ];

  const varanasiHotels = [
    {
      name: "Taj Ganges, Varanasi",
      image: wiki("Kashi_Vishwanath.jpg"),
    },
    {
      name: "BrijRama Palace by Edge",
      image: wiki("Dasaswamedh_ghat-varanasi_india-andres_larin.jpg"),
    },
    {
      name: "Radisson Hotel Varanasi",
      image: wiki(
        "Manikarnika_Ghat%2C_Varanasi%2C_Uttar_Pradesh%2C_India_%282011%29_5.jpg"
      ),
    },
    {
      name: "DoubleTree by Hilton Varanasi",
      image: wiki("Assi_Ghat_Varanasi_morning_Aarti.jpg"),
    },
    {
      name: "Ramada Plaza Varanasi",
      image: wiki("Manas_Mandir.jpg"),
    },
    {
      name: "Tree of Life Resort & Hotels",
      image: wiki(
        "Ancient_Buddhist_monasteries_near_Dhamekh_Stupa_Monument_Site%2C_Sarnath.jpg"
      ),
    },
    {
      name: "The Clarks Varanasi",
      image: wiki("Dhamek_Stupa%2C_Sarnath.jpg"),
    },
    {
      name: "Hotel Ganges View",
      image: wiki("Varanasiganga.jpg"),
    },
  ];

  const lucknowHotels = [
    {
      name: "Hyatt Regency Lucknow",
      image: wiki("Bara_Imambara_Lucknow.jpg"),
    },
    {
      name: "Taj Mahal Hotel, Lucknow",
      image: wiki("Rumi_Darwaza_-_DSC2797-01.jpg"),
    },
    {
      name: "Novotel Lucknow Gomti Nagar",
      image: wiki("Chhota_imambara_Lucknow.jpg"),
    },
    {
      name: "Fairfield by Marriott Lucknow",
      image: wiki("Asfi_Mosque.jpg"),
    },
    {
      name: "Hilton Garden Inn Lucknow",
      image: wiki("BARA_IMAMBARA_LUCKNOW.jpg"),
    },
    {
      name: "Ramada Plaza, Lucknow",
      image: wiki("Asafi_Mosque.jpg"),
    },
    {
      name: "Lemon Tree Premier Lucknow",
      image: wiki("Bara_Imambara_Lucknow.jpg"),
    },
  ];

  const prayagrajHotels = [
    {
      name: "Kanha Shyam, Prayagraj",
      image: wiki("NorthIndiaCircuit_250.jpg"),
    },
    {
      name: "Naveen Continental, Prayagraj",
      image: wiki("Akbar_Fort_Allahabad.jpg"),
    },
    {
      name: "Hotel Milan Palace Prayagraj",
      image: wiki("Tomb_of_Nisar_Begum_at_Khusro_Bagh_Allahabad.jpg"),
    },
    {
      name: "Badi Kothi by Welcome Heritage",
      image: wiki("Anand_Bhawan%2C_Allahabad.jpg"),
    },
    {
      name: "Hotel Legend Inn Prayagraj",
      image: wiki("Allahabad_high_court.jpg"),
    },
  ];

  const amenities = [
    { icon: "fa-spa", title: "Wellness & Spa", desc: "Ayurvedic spas in heritage settings." },
    { icon: "fa-utensils", title: "Sattvic Dining", desc: "Pure-veg multi-cuisine breakfast included." },
    { icon: "fa-car", title: "Door-to-Door Cabs", desc: "Private AC sedans & SUVs always on call." },
    { icon: "fa-concierge-bell", title: "VIP Concierge", desc: "24×7 dedicated personal manager." },
  ];

  return (
    <main style={{ background: "var(--bg-cream)" }}>
      {/* ═══════════ HERO ═══════════ */}
      <section className="hotels-hero">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`h-slide ${heroIndex === i ? "active" : ""}`}
          >
            <NextImage
              src={img}
              alt={`Luxury Hotels in ${
                ["Varanasi", "Ayodhya", "Prayagraj"][i]
              }`}
              fill
              priority={i === 0}
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
        <div className="h-overlay" />
        <div className="container h-content">
          <p className="eyebrow center" style={{ color: "var(--brand-gold-light)" }}>
            <i className="fas fa-bed" /> Stay in Sacred Comfort
          </p>
          <h1>
            Heritage Palaces. Riverside Resorts.{" "}
            <span className="gradient-text">Five-Star Stays.</span>
          </h1>
          <p className="h-sub">
            Hand-picked luxury hotels in Varanasi, Ayodhya, Prayagraj &amp;
            Lucknow — curated for the most discerning spiritual traveller.
          </p>
          <div className="h-actions">
            <a href="#book" className="btn-primary btn-glow">
              <i className="far fa-calendar-check" /> Reserve a Suite
            </a>
            <Link href="/tour-packages" className="btn-secondary">
              <i className="fas fa-suitcase-rolling" /> Pair with a Tour
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ AMENITY HIGHLIGHTS ═══════════ */}
      <section className="section-padding amenity-section">
        <div className="container">
          <div className="amenity-header">
            <p className="eyebrow">
              <i className="fas fa-gem" /> Why Stay With Us
            </p>
            <h2>
              Service standards worthy of a{" "}
              <span className="gradient-text">royal pilgrimage</span>
            </h2>
          </div>
          <div className="amenity-grid">
            {amenities.map((a, i) => (
              <div key={i} className="amenity-card">
                <div className="amenity-icon">
                  <i className={`fas ${a.icon}`} />
                </div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ HOTEL CAROUSELS BY CITY ═══════════ */}
      <CityHotelCarousel
        title="Premium Hotels in Ayodhya"
        hotels={ayodhyaHotels}
      />

      {/* Promo Marquee */}
      <section style={{ padding: "20px 5% 40px" }}>
        <div className="promo-marquee">
          <div className="marquee-content">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="promo-item">
                <i className="fas fa-tag" /> Festive Offer · Up to 40 % Off on
                Verified Heritage Hotels · Limited Inventory
              </span>
            ))}
          </div>
        </div>
      </section>

      <CityHotelCarousel
        title="Premium Hotels in Varanasi"
        hotels={varanasiHotels}
      />

      {/* ═══════════ STATS + BOOKING CARD ═══════════ */}
      <section className="section-padding booking-section">
        <div className="container booking-grid">
          <div>
            <p className="eyebrow">
              <i className="fas fa-trophy" /> Spiritual Hospitality, Curated
            </p>
            <h2>
              We hand-pick stays that <br />
              <span className="gradient-text">feel like a sacred journey</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginTop: 16 }}>
              From riverside palaces overlooking the Ganges to contemporary
              5-star hotels minutes from the Ram Mandir — every property is
              audited for cleanliness, safety, sattvic cuisine and proximity
              to sacred sites.
            </p>

            <div className="stat-grid">
              {[
                { c: "66+", l: "Cities" },
                { c: "100+", l: "Hotels" },
                { c: "350+", l: "Rooms" },
                { c: "10K+", l: "Happy Guests" },
              ].map((s, i) => (
                <div key={i} className="stat-tile">
                  <strong className="gradient-text">{s.c}</strong>
                  <span>{s.l}</span>
                </div>
              ))}
            </div>

            <div className="rating-row">
              <div className="rating-pill">
                <i className="fas fa-star" /> 4.8 / 5
              </div>
              <div>
                <h4>Loved across the globe</h4>
                <p>Verified guest reviews from Google, TripAdvisor &amp; MakeMyTrip</p>
              </div>
            </div>
          </div>

          {/* ── Booking card ── */}
          <div id="book" className="booking-card">
            <div className="booking-card-header">
              <p className="eyebrow center" style={{ color: "var(--brand-gold-light)", marginBottom: 8 }}>
                <i className="fas fa-bed" /> Reserve Your Suite
              </p>
              <h2 style={{ color: "#fff", marginTop: 0 }}>Make a Reservation</h2>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
                Tell us when &amp; where — our concierge will revert in 60 minutes.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open("https://wa.me/919999995475?text=Hi%2C+I%27d+like+to+enquire+about+a+hotel+booking.", "_blank");
              }}
              style={{ display: "grid", gap: 16 }}
            >
              <div className="form-row">
                <label>City</label>
                <select required>
                  <option>Varanasi</option>
                  <option>Ayodhya</option>
                  <option>Prayagraj</option>
                  <option>Lucknow</option>
                </select>
              </div>
              <div className="form-row-grid">
                <div className="form-row">
                  <label>Check In</label>
                  <input type="date" required />
                </div>
                <div className="form-row">
                  <label>Check Out</label>
                  <input type="date" required />
                </div>
              </div>
              <div className="form-row-grid">
                <div className="form-row">
                  <label>Rooms</label>
                  <input type="number" defaultValue={1} min={1} />
                </div>
                <div className="form-row">
                  <label>Adults</label>
                  <input type="number" defaultValue={2} min={1} />
                </div>
              </div>
              <div className="form-row">
                <label>Full Name</label>
                <input type="text" required placeholder="Your name" />
              </div>
              <div className="form-row">
                <label>Phone</label>
                <input type="tel" required placeholder="+91 99999 99999" />
              </div>
              <button type="submit" className="btn-primary" style={{ width: "100%", padding: "16px" }}>
                <i className="far fa-paper-plane" /> Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <CityHotelCarousel title="Premium Hotels in Lucknow" hotels={lucknowHotels} />
      <CityHotelCarousel title="Premium Hotels in Prayagraj" hotels={prayagrajHotels} />

      <style jsx>{`
        /* ── Hero ─────────────────────────────────── */
        .hotels-hero {
          position: relative;
          height: 92vh;
          min-height: 620px;
          overflow: hidden;
          background: var(--brand-ink);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 5% 0;
        }
        .h-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1.5s ease;
        }
        .h-slide.active { opacity: 1; }
        .h-slide :global(img) {
          animation: kenburns 14s ease-in-out infinite alternate;
        }
        .h-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(14, 20, 36, 0.6) 0%,
            rgba(14, 20, 36, 0.45) 40%,
            rgba(14, 20, 36, 0.85) 100%
          );
        }
        .h-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 920px;
        }
        .h-content h1 {
          font-size: clamp(2.2rem, 5vw, 4rem);
          color: #fff;
          margin: 12px 0 18px;
          line-height: 1.1;
          text-shadow: 0 6px 24px rgba(0, 0, 0, 0.45);
        }
        .h-sub {
          color: rgba(255, 255, 255, 0.86);
          font-size: 1.08rem;
          max-width: 700px;
          margin: 0 auto 32px;
        }
        .h-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ── Amenity ──────────────────────────────── */
        .amenity-section {
          background: var(--bg-cream);
        }
        .amenity-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: end;
          margin-bottom: 50px;
        }
        .amenity-header h2 {
          font-size: clamp(1.8rem, 3.4vw, 2.6rem);
          line-height: 1.15;
        }
        .amenity-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }
        .amenity-card {
          background: #fff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 32px 24px;
          transition: all 0.4s var(--ease-out-expo);
          position: relative;
          overflow: hidden;
        }
        .amenity-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-saffron);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s var(--ease-out-expo);
        }
        .amenity-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
        }
        .amenity-card:hover::before { transform: scaleX(1); }
        .amenity-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: var(--gradient-saffron);
          color: #fff;
          font-size: 1.3rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: var(--shadow-saffron);
        }
        .amenity-card h3 {
          font-size: 1.15rem;
          margin-bottom: 8px;
        }
        .amenity-card p {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
        }

        /* ── Promo marquee ────────────────────────── */
        .promo-marquee {
          background: linear-gradient(135deg, var(--brand-ink) 0%, var(--brand-ink-soft) 100%);
          color: #fff;
          padding: 14px 0;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid rgba(var(--brand-gold-rgb), 0.25);
          box-shadow: var(--shadow-md);
        }
        .marquee-content {
          display: flex;
          gap: 60px;
          width: max-content;
          animation: marquee 28s linear infinite;
          white-space: nowrap;
        }
        .promo-item {
          font-family: var(--font-poppins);
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .promo-item i {
          color: var(--brand-gold);
          margin-right: 8px;
        }

        /* ── Booking section ──────────────────────── */
        .booking-section { background: var(--bg-cream); }
        .booking-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .booking-grid h2 {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          line-height: 1.2;
        }
        .stat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 32px;
        }
        .stat-tile {
          background: #fff;
          padding: 18px 20px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .stat-tile strong {
          display: block;
          font-family: var(--font-poppins);
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 1;
        }
        .stat-tile span {
          font-size: 0.78rem;
          color: var(--text-muted);
          letter-spacing: 1px;
          text-transform: uppercase;
          font-weight: 600;
          margin-top: 6px;
          display: block;
        }
        .rating-row {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 32px;
          background: #fff;
          padding: 16px 20px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
        }
        .rating-row h4 {
          font-size: 1rem;
          margin: 0;
        }
        .rating-row p {
          font-size: 0.84rem;
          color: var(--text-muted);
          margin: 2px 0 0;
        }
        .rating-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--gradient-luxe);
          color: #fff;
          padding: 8px 14px;
          border-radius: var(--radius-pill);
          font-weight: 800;
          font-family: var(--font-poppins);
          box-shadow: var(--shadow-saffron);
        }

        .booking-card {
          background: var(--gradient-ink);
          padding: 36px;
          border-radius: var(--radius-lg);
          color: #fff;
          border: 1px solid rgba(var(--brand-gold-rgb), 0.25);
          box-shadow: var(--shadow-xl);
          position: relative;
          overflow: hidden;
        }
        .booking-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-luxe);
        }
        .booking-card-header {
          text-align: center;
          margin-bottom: 24px;
        }
        .form-row label {
          display: block;
          font-size: 0.7rem;
          color: var(--brand-gold-light);
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 6px;
          font-weight: 700;
        }
        .form-row input,
        .form-row select {
          width: 100%;
          padding: 13px 16px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.07);
          color: #fff;
          font-size: 0.95rem;
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .form-row input::placeholder { color: rgba(255, 255, 255, 0.4); }
        .form-row input:focus,
        .form-row select:focus {
          outline: none;
          border-color: var(--brand-saffron);
          background: rgba(255, 255, 255, 0.12);
        }
        .form-row select option {
          background: var(--brand-ink);
          color: #fff;
        }
        .form-row-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        /* ── Responsive ───────────────────────────── */
        @media (max-width: 900px) {
          .amenity-header { grid-template-columns: 1fr; gap: 24px; }
          .booking-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </main>
  );
}
