"use client";

import { useMemo, useState } from "react";
import { packages } from "@/data/packages";
import PackageCard from "@/app/components/PackageCard";
import Image from "next/image";

const filters = ["All", "Varanasi", "Ayodhya", "Prayagraj", "Lucknow", "Mathura", "Madhya Pradesh"];

export default function TourPackages() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const allPackages = useMemo(
    () =>
      packages.map((pkg) => ({
        slug: pkg.slug,
        image: pkg.image,
        duration: pkg.duration,
        location: pkg.location,
        title: pkg.name,
        href: `/tour-packages/${pkg.slug}`,
      })),
    []
  );

  const filtered = useMemo(() => {
    return allPackages.filter((p) => {
      const isMpPackage = [
        "malwa-bhopal-heritage-yatra-6d",
        "grand-madhya-pradesh-heritage-tour-7d",
        "quick-ujjain-omkareshwar-indore-yatra-3d",
        "wild-satpura-khajuraho-heritage-trail-9d",
        "forts-temples-bundelkhand-gwalior-orchha-khajuraho-6d",
        "madhya-pradesh-tiger-safari-special-6d",
        "pachmarhi-wildlife-nature-special-5d",
        "kanha-wildlife-jabalpur-tour-5d",
        "madhya-pradesh-pilgrimage-ujjain-omkareshwar-maheshwar-5d",
        "heart-of-heritage-gwalior-jhansi-orchha-4d",
        "wild-tiger-trail-bandhavgarh-panna-khajuraho-6d"
      ].includes(p.slug);

      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase()) ||
        (search.toLowerCase() === "madhya pradesh" && isMpPackage) ||
        (search.toLowerCase() === "mp" && isMpPackage);

      const matchFilter =
        activeFilter === "All" ||
        (activeFilter === "Madhya Pradesh" && isMpPackage) ||
        (activeFilter !== "Madhya Pradesh" && (
          p.location.toLowerCase().includes(activeFilter.toLowerCase()) ||
          p.title.toLowerCase().includes(activeFilter.toLowerCase())
        ));

      return matchSearch && matchFilter;
    });
  }, [allPackages, search, activeFilter]);

  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="tp-hero">
        <Image
          src="/images/destinations/varanasi.webp"
          alt="Varanasi Spiritual Tour Packages"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="tp-hero-overlay" />
        <div className="container tp-hero-content">
          <p className="eyebrow center" style={{ color: "var(--brand-gold-light)" }}>
            <i className="fas fa-suitcase-rolling" /> Curated Yatras for 
          </p>
          <h1>
            Best Kashi Ayodhya &amp; Varanasi{" "}
            <span className="gradient-text">Tour Packages</span>
          </h1>
          <p className="tp-hero-sub">
            Hand-crafted spiritual journeys featuring VIP darshan, luxury
            stays and personal concierge — across India&apos;s holiest cities.
          </p>
        </div>
      </section>

      {/* ─── Toolbar ─── */}
      <section className="tp-toolbar">
        <div className="container toolbar-inner">
          <div className="filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-pill ${activeFilter === f ? "active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="search-wrap">
            <i className="fas fa-search" />
            <input
              type="text"
              placeholder="Search Kashi, Ayodhya, days..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ─── Packages Grid ─── */}
      <section className="section-padding tp-grid-section">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="empty-state">
              <i className="fas fa-search" />
              <h3>No packages match your search</h3>
              <p>Try a different keyword or destination filter.</p>
            </div>
          ) : (
            <div className="tp-grid">
              {filtered.map((pkg, index) => (
                <PackageCard key={pkg.slug} {...pkg} priority={index < 3} />
              ))}
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .tp-hero {
          position: relative;
          height: 60vh;
          min-height: 460px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          overflow: hidden;
          padding-top: 100px;
          background: var(--brand-ink);
        }
        .tp-hero :global(img) {
          animation: kenburns 16s ease-in-out infinite alternate;
        }
        .tp-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(14, 20, 36, 0.65) 0%,
            rgba(14, 20, 36, 0.55) 40%,
            rgba(14, 20, 36, 0.92) 100%
          );
        }
        .tp-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 880px;
        }
        .tp-hero-content h1 {
          color: #fff;
          font-size: clamp(2rem, 4.6vw, 3.6rem);
          margin: 8px 0 14px;
          line-height: 1.1;
          text-shadow: 0 6px 24px rgba(0, 0, 0, 0.45);
        }
        .tp-hero-sub {
          color: rgba(255, 255, 255, 0.86);
          font-size: 1.05rem;
          max-width: 700px;
          margin: 0 auto;
        }

        .tp-toolbar {
          position: sticky;
          top: 76px;
          z-index: 10;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-light);
          padding: 18px 5%;
        }
        .toolbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        .filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .filter-pill {
          padding: 8px 18px;
          border-radius: var(--radius-pill);
          background: var(--bg-cream);
          border: 1.5px solid transparent;
          font-family: var(--font-poppins);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .filter-pill:hover {
          background: rgba(var(--brand-saffron-rgb), 0.1);
          color: var(--brand-saffron);
        }
        .filter-pill.active {
          background: var(--gradient-saffron);
          color: #fff;
          border-color: transparent;
          box-shadow: var(--shadow-saffron);
        }
        .search-wrap {
          position: relative;
          min-width: 260px;
        }
        .search-wrap i {
          position: absolute;
          top: 50%;
          left: 16px;
          transform: translateY(-50%);
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .search-wrap input {
          width: 100%;
          padding: 11px 16px 11px 42px;
          border-radius: var(--radius-pill);
          border: 1.5px solid var(--border-light);
          background: #fff;
          font-size: 0.9rem;
          font-family: inherit;
          transition: all 0.25s ease;
        }
        .search-wrap input:focus {
          outline: none;
          border-color: var(--brand-saffron);
          box-shadow: 0 0 0 3px rgba(var(--brand-saffron-rgb), 0.15);
        }

        .tp-grid-section { background: var(--bg-cream); }
        .tp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        .empty-state {
          text-align: center;
          padding: 80px 20px;
        }
        .empty-state i {
          font-size: 3rem;
          color: var(--brand-saffron);
          opacity: 0.5;
          margin-bottom: 16px;
        }
        .empty-state h3 {
          font-size: 1.4rem;
          margin-bottom: 8px;
        }
        .empty-state p {
          color: var(--text-muted);
        }
      `}</style>
    </main>
  );
}
