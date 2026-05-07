"use client";

import React from "react";
import {
  TourPackage,
  CHILD_POLICY,
  GENERAL_EXCLUSIONS,
  GENERAL_INCLUSIONS,
  CANCELLATION_POLICY,
  HOTEL_REFERENCE,
} from "@/data/packages";
import PackageItinerary from "@/app/components/PackageItinerary";
import PackageSidebar from "@/app/components/PackageSidebar";
import Image from "next/image";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function PackageDetailContent({ pkg }: { pkg: TourPackage }) {
  return (
    <>
      {/* ─── Detail Hero ─── */}
      <section className="detail-hero">
        <Image
          src={pkg.image}
          alt={pkg.imageAlt || pkg.name}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="hero-badge">
            <i className="fas fa-map-marker-alt" /> {pkg.location}
          </span>
          <h1>{pkg.name}</h1>
          <div className="hero-meta">
            <span><i className="far fa-clock" /> {pkg.duration}</span>
            <span><i className="fas fa-bed" /> Hotel · Cab · Meals</span>
            <span><i className="fas fa-shield-halved" /> Govt. Approved</span>
          </div>
          <p className="hero-desc">{pkg.description}</p>
        </div>
      </section>

      {/* ─── Main Layout ─── */}
      <div className="container detail-layout">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Tour Packages", href: "/tour-packages" },
            { label: pkg.name, href: `/tour-packages/${pkg.slug}` },
          ]}
        />

        <div className="main-grid">
          {/* ── Left ── */}
          <div className="main-content">
            <section className="content-block">
              <h2>Experience the {pkg.name}</h2>
              <p>
                This carefully curated <strong>{pkg.duration}</strong>{" "}
                spiritual journey is designed to immerse you in the
                devotional richness of <strong>{pkg.location}</strong>. From
                ancient temple rituals to evening Aartis on the holy ghats,
                every moment is choreographed for comfort and divine
                connection.
              </p>
            </section>

            <PackageItinerary itinerary={pkg.itinerary} />

            {pkg.whyChooseUs && (
              <section className="content-block">
                <h2>Why book this package with us?</h2>
                <div className="why-grid">
                  {pkg.whyChooseUs.map((point, index) => (
                    <div key={index} className="why-card">
                      <span className="why-num">0{index + 1}</span>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {pkg.seoContent && (
              <section className="content-block">
                <h2>About this divine journey</h2>
                <div
                  className="seo-prose"
                  dangerouslySetInnerHTML={{ __html: pkg.seoContent }}
                />
              </section>
            )}

            {pkg.faqs && (
              <section className="content-block">
                <h2>Frequently asked questions</h2>
                <div className="faq-list">
                  {pkg.faqs.map((faq, index) => (
                    <details key={index} className="faq-item">
                      <summary>
                        <span><strong>Q.</strong> {faq.q}</span>
                        <i className="fas fa-chevron-down" />
                      </summary>
                      <p>{faq.a}</p>
                    </details>
                  ))}
                </div>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "FAQPage",
                      mainEntity: pkg.faqs.map((faq) => ({
                        "@type": "Question",
                        name: faq.q,
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: faq.a,
                        },
                      })),
                    }),
                  }}
                />
              </section>
            )}

            <section className="content-block policy-card">
              <h3>Child Policy</h3>
              <ul className="check-list">
                {CHILD_POLICY.map((p, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle" /> {p}
                  </li>
                ))}
              </ul>
            </section>

            <section className="content-block">
              <h3>Cancellation Policy</h3>
              <div className="cancel-grid">
                {CANCELLATION_POLICY.map((item, i) => (
                  <div key={i} className="cancel-tile">
                    <div className="cancel-duration">{item.duration}</div>
                    <div className="cancel-refund">{item.refund}</div>
                    <div className="cancel-label">Refund</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="content-block">
              <h3>Recommended Hotels</h3>
              <div className="table-wrap">
                <table className="hotel-table">
                  <thead>
                    <tr>
                      <th>City</th>
                      <th>Deluxe</th>
                      <th>Luxury</th>
                      <th>Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {HOTEL_REFERENCE.map((row, idx) => (
                      <tr key={idx}>
                        <td>
                          <i className="fas fa-map-pin" /> {row.city}
                        </td>
                        <td>{row.deluxe}</td>
                        <td>{row.luxury}</td>
                        <td>{row.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* ── Right ── */}
          <aside className="sidebar">
            <PackageSidebar duration={pkg.duration} inclusions={pkg.inclusions} />
            <div className="incl-card">
              <h4>What&apos;s Included</h4>
              <ul className="incl-list">
                {GENERAL_INCLUSIONS.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle" /> {item}
                  </li>
                ))}
              </ul>
              <h4>What&apos;s Not Included</h4>
              <ul className="excl-list">
                {GENERAL_EXCLUSIONS.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-times-circle" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <style jsx>{`
        .detail-hero {
          position: relative;
          min-height: 56vh;
          padding: 130px 5% 80px;
          color: #fff;
          display: flex;
          align-items: flex-end;
          background: var(--brand-ink);
          overflow: hidden;
        }
        .detail-hero :global(img) {
          animation: kenburns 18s ease-in-out infinite alternate;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(14, 20, 36, 0.55) 0%,
            rgba(14, 20, 36, 0.4) 40%,
            rgba(14, 20, 36, 0.95) 100%
          );
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--gradient-saffron);
          color: #fff;
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          margin-bottom: 18px;
          box-shadow: var(--shadow-saffron);
        }
        .hero-content h1 {
          color: #fff;
          font-size: clamp(1.8rem, 3.6vw, 3rem);
          margin-bottom: 16px;
          line-height: 1.15;
        }
        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          color: rgba(255, 255, 255, 0.86);
          font-size: 0.92rem;
          margin-bottom: 14px;
        }
        .hero-meta i {
          color: var(--brand-gold-light);
          margin-right: 6px;
        }
        .hero-desc {
          color: rgba(255, 255, 255, 0.86);
          font-size: 1.02rem;
          max-width: 800px;
          line-height: 1.7;
        }

        .detail-layout { padding: 40px 0 80px; }
        .main-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 50px;
          margin-top: 8px;
        }

        .content-block {
          margin-bottom: 50px;
        }
        .content-block h2 {
          font-size: clamp(1.5rem, 2.4vw, 2rem);
          color: var(--brand-ink);
          margin-bottom: 18px;
          padding-bottom: 12px;
          border-bottom: 2px solid transparent;
          background: linear-gradient(90deg, var(--brand-saffron), transparent) bottom / 80px 2px no-repeat;
        }
        .content-block h3 {
          font-size: 1.4rem;
          color: var(--brand-ink);
          margin-bottom: 18px;
        }
        .content-block p {
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }
        .why-card {
          display: flex;
          gap: 16px;
          padding: 22px;
          background: #fff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          transition: all 0.4s var(--ease-out-expo);
        }
        .why-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: rgba(var(--brand-saffron-rgb), 0.4);
        }
        .why-num {
          font-family: var(--font-poppins);
          font-size: 1.3rem;
          font-weight: 800;
          background: var(--gradient-saffron);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          flex-shrink: 0;
        }
        .why-card p {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .seo-prose :global(h3) {
          font-size: 1.25rem;
          color: var(--brand-ink);
          margin: 24px 0 12px;
        }
        .seo-prose :global(p) {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 14px;
        }
        .seo-prose :global(strong) { color: var(--brand-ink); }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .faq-item {
          background: #fff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 16px 22px;
          transition: all 0.3s ease;
        }
        .faq-item[open] {
          border-color: var(--brand-saffron);
          box-shadow: var(--shadow-md);
        }
        .faq-item summary {
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          color: var(--brand-ink);
          font-weight: 600;
          font-size: 1rem;
          list-style: none;
        }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary i {
          color: var(--brand-saffron);
          font-size: 0.8rem;
          transition: transform 0.3s ease;
        }
        .faq-item[open] summary i { transform: rotate(180deg); }
        .faq-item p {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-top: 12px;
          padding-left: 20px;
          border-left: 2px solid var(--brand-saffron);
        }

        .policy-card {
          padding: 30px;
          background: #fff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
        }
        .check-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 10px;
        }
        .check-list li {
          color: var(--text-secondary);
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .check-list i {
          color: var(--brand-saffron);
          margin-top: 4px;
        }

        .cancel-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
        }
        .cancel-tile {
          padding: 18px 20px;
          background: #fff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          text-align: center;
          transition: all 0.3s ease;
        }
        .cancel-tile:hover {
          border-color: var(--brand-saffron);
          transform: translateY(-2px);
        }
        .cancel-duration {
          font-weight: 700;
          color: var(--brand-ink);
          font-family: var(--font-poppins);
          font-size: 0.92rem;
        }
        .cancel-refund {
          color: var(--brand-rose);
          font-size: 1.4rem;
          font-weight: 800;
          margin: 8px 0 4px;
          font-family: var(--font-poppins);
        }
        .cancel-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .table-wrap {
          overflow-x: auto;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
        }
        .hotel-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.92rem;
        }
        .hotel-table th {
          padding: 14px 16px;
          background: var(--brand-ink);
          color: #fff;
          text-align: left;
          font-weight: 700;
          font-family: var(--font-poppins);
          font-size: 0.82rem;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }
        .hotel-table td {
          padding: 14px 16px;
          border-top: 1px solid var(--border-light);
          color: var(--text-secondary);
        }
        .hotel-table td:first-child {
          font-weight: 700;
          color: var(--brand-ink);
        }
        .hotel-table td i {
          color: var(--brand-saffron);
          margin-right: 6px;
        }
        .hotel-table tr:hover td { background: var(--bg-cream); }

        .sidebar { display: flex; flex-direction: column; gap: 24px; }
        .incl-card {
          padding: 28px;
          background: #fff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }
        .incl-card h4 {
          font-size: 1.05rem;
          color: var(--brand-ink);
          margin: 0 0 14px;
        }
        .incl-card h4:not(:first-child) { margin-top: 22px; }
        .incl-list,
        .excl-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 8px;
        }
        .incl-list li,
        .excl-list li {
          font-size: 0.88rem;
          line-height: 1.5;
          display: flex;
          gap: 10px;
          color: var(--text-secondary);
        }
        .incl-list i { color: var(--brand-saffron); margin-top: 4px; }
        .excl-list i { color: var(--text-light); margin-top: 4px; }

        @media (max-width: 1024px) {
          .main-grid { grid-template-columns: 1fr; gap: 30px; }
          .sidebar { order: 2; }
          .main-content { order: 1; }
        }
      `}</style>
    </>
  );
}
