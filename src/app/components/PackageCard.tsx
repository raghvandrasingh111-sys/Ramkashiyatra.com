"use client";

import Link from "next/link";
import Image from "next/image";

interface PackageCardProps {
  image: string;
  duration: string;
  location: string;
  title: string;
  href: string;
  imageAlt?: string;
  priority?: boolean;
}

export default function PackageCard({
  image,
  duration,
  location,
  title,
  href,
  imageAlt,
  priority,
}: PackageCardProps) {
  const cleanLocation = location?.split(",")[0]?.split("-")[0]?.trim() ?? "";
  const durationParts = duration?.includes("|")
    ? duration.split("|").map((d) => d.trim())
    : [
        duration?.split(" ").slice(0, 2).join(" ") ?? "",
        duration?.split(" ").slice(2).join(" ") ?? "",
      ];

  return (
    <article className="pkg-card">
      <Link href={href} className="pkg-link" aria-label={title}>
        <div className="pkg-img-wrap">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="pkg-img"
            style={{ objectFit: "cover" }}
          />
          <div className="pkg-img-overlay" />

          <span className="pkg-badge-duration">
            <i className="far fa-clock" /> {durationParts[0] || duration}
          </span>

          {cleanLocation && (
            <span className="pkg-badge-location">
              <i className="fas fa-location-dot" /> {cleanLocation}
            </span>
          )}

          <span className="pkg-best-tag">
            <i className="fas fa-star" /> Bestseller
          </span>
        </div>

        <div className="pkg-body">
          <h3 className="pkg-title">{title}</h3>
          <p className="pkg-meta">{durationParts[1] || location}</p>

          <div className="pkg-features">
            {[
              { icon: "fa-bed", label: "Hotel" },
              { icon: "fa-car", label: "Cab" },
              { icon: "fa-utensils", label: "Meals" },
              { icon: "fa-user-tie", label: "Guide" },
            ].map((f) => (
              <span key={f.label} className="pkg-feature">
                <i className={`fas ${f.icon}`} /> {f.label}
              </span>
            ))}
          </div>

          <div className="pkg-footer">
            <div className="pkg-price">
              <span className="pkg-price-label">Starting from</span>
              <span className="pkg-price-value">
                <span className="gold-text">Best Price</span>
                <small>Enquire for offers</small>
              </span>
            </div>
            <span className="pkg-cta">
              View Details <i className="fas fa-arrow-right" />
            </span>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .pkg-card {
          background: #fff;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
          transition: transform 0.5s var(--ease-out-expo),
            box-shadow 0.5s var(--ease-out-expo),
            border-color 0.4s ease;
          height: 100%;
        }
        .pkg-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-xl);
          border-color: rgba(var(--brand-saffron-rgb), 0.4);
        }
        .pkg-link {
          display: block;
          color: inherit;
          text-decoration: none;
          height: 100%;
        }
        .pkg-img-wrap {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .pkg-img {
          transition: transform 0.8s var(--ease-out-expo);
        }
        .pkg-card:hover :global(.pkg-img) {
          transform: scale(1.08);
        }
        .pkg-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(14, 20, 36, 0) 50%,
            rgba(14, 20, 36, 0.55) 100%
          );
          z-index: 1;
        }
        .pkg-badge-duration {
          position: absolute;
          bottom: 14px;
          left: 14px;
          z-index: 2;
          background: rgba(255, 255, 255, 0.95);
          color: var(--brand-ink);
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          font-size: 0.8rem;
          font-weight: 700;
          font-family: var(--font-poppins);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: var(--shadow-md);
        }
        .pkg-badge-duration i { color: var(--brand-saffron); }
        .pkg-badge-location {
          position: absolute;
          bottom: 14px;
          right: 14px;
          z-index: 2;
          background: rgba(14, 20, 36, 0.65);
          backdrop-filter: blur(10px);
          color: #fff;
          padding: 6px 12px;
          border-radius: var(--radius-pill);
          font-size: 0.78rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .pkg-badge-location i { color: var(--brand-gold-light); font-size: 0.72rem; }
        .pkg-best-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
          background: var(--gradient-luxe);
          color: #fff;
          padding: 5px 12px;
          border-radius: var(--radius-pill);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 8px 18px rgba(var(--brand-saffron-rgb), 0.35);
        }
        .pkg-best-tag i { font-size: 0.65rem; }

        .pkg-body {
          padding: 22px 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .pkg-title {
          font-size: 1.18rem;
          color: var(--brand-ink);
          margin: 0;
          line-height: 1.35;
          min-height: 3.1em;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .pkg-meta {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: -6px 0 4px;
        }
        .pkg-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .pkg-feature {
          font-size: 0.72rem;
          color: var(--text-secondary);
          background: var(--bg-cream);
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--border-light);
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-weight: 600;
        }
        .pkg-feature i {
          color: var(--brand-saffron);
          font-size: 0.7rem;
        }
        .pkg-footer {
          margin-top: 6px;
          padding-top: 16px;
          border-top: 1px dashed var(--border-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .pkg-price { display: flex; flex-direction: column; gap: 2px; }
        .pkg-price-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.6px;
          font-weight: 600;
        }
        .pkg-price-value {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .pkg-price-value > span:first-child {
          font-family: var(--font-poppins);
          font-weight: 800;
          font-size: 1.05rem;
        }
        .pkg-price-value small {
          font-size: 0.68rem;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .pkg-cta {
          color: var(--brand-saffron);
          font-weight: 700;
          font-size: 0.86rem;
          font-family: var(--font-poppins);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.3s ease, color 0.3s ease;
        }
        .pkg-card:hover .pkg-cta {
          gap: 12px;
          color: var(--brand-saffron-dark);
        }
      `}</style>
    </article>
  );
}
