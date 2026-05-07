"use client";

import React from "react";

/**
 * Premium hotel partner strip.
 * Logos are sourced via Wikipedia/Wikimedia Commons FilePath
 * (auto-redirects to the latest canonical asset).
 */
const partners = [
  {
    name: "Taj Hotels",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Taj_Hotels_logo.svg/640px-Taj_Hotels_logo.svg.png",
  },
  {
    name: "Hyatt",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Hyatt_Logo.svg/640px-Hyatt_Logo.svg.png",
  },
  {
    name: "Marriott Hotels",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Marriott_hotels_logo14.svg/640px-Marriott_hotels_logo14.svg.png",
  },
  {
    name: "Hilton",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Hilton_Hotels_%26_Resorts_logo.svg/640px-Hilton_Hotels_%26_Resorts_logo.svg.png",
  },
  {
    name: "Radisson",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Radisson_Hotels_Logo.svg/640px-Radisson_Hotels_Logo.svg.png",
  },
  {
    name: "Novotel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Novotel-Logo.svg/640px-Novotel-Logo.svg.png",
  },
  {
    name: "ITC Hotels",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/ITC_Hotels_logo.svg/640px-ITC_Hotels_logo.svg.png",
  },
  {
    name: "Ramada",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ramada_logo.svg/640px-Ramada_logo.svg.png",
  },
  {
    name: "Lemon Tree Hotels",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Lemon_Tree_Hotels_logo.svg/640px-Lemon_Tree_Hotels_logo.svg.png",
  },
  {
    name: "DoubleTree by Hilton",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/DoubleTree_logo.svg/640px-DoubleTree_logo.svg.png",
  },
];

export default function HotelCarousel() {
  return (
    <section className="hotel-strip">
      <div className="container">
        <div className="strip-header">
          <p className="eyebrow center">
            <i className="fas fa-handshake" /> Partnered Hospitality
          </p>
          <h3 className="strip-title">Premium Hotel Partners we work with</h3>
        </div>

        <div className="viewport">
          <div className="track">
            {[...partners, ...partners].map((p, index) => (
              <div key={index} className="logo-card" title={p.name}>
                {/* Plain img keeps SVG-from-PNG conversions crisp + tolerant of CDN redirects */}
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hotel-strip {
          padding: 60px 0;
          background: linear-gradient(180deg, #fff 0%, var(--bg-cream) 100%);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
          overflow: hidden;
        }
        .strip-header {
          text-align: center;
          margin-bottom: 36px;
        }
        .strip-title {
          font-size: clamp(1.4rem, 2.4vw, 1.9rem);
          color: var(--brand-ink);
          font-weight: 700;
          letter-spacing: -0.01em;
          margin: 0;
        }
        .viewport {
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 6%,
            #000 94%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 6%,
            #000 94%,
            transparent 100%
          );
        }
        .track {
          display: flex;
          gap: 56px;
          width: max-content;
          animation: marquee 36s linear infinite;
          align-items: center;
        }
        .track:hover { animation-play-state: paused; }
        .logo-card {
          flex: 0 0 auto;
          width: 160px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px 18px;
          background: #fff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          transition: all 0.4s var(--ease-out-expo);
        }
        .logo-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: rgba(var(--brand-saffron-rgb), 0.4);
        }
        .logo-card img {
          max-width: 100%;
          max-height: 48px;
          object-fit: contain;
          filter: grayscale(0.6) opacity(0.85);
          transition: filter 0.4s ease;
        }
        .logo-card:hover img {
          filter: grayscale(0) opacity(1);
        }
        @media (max-width: 768px) {
          .track { gap: 28px; }
          .logo-card { width: 130px; height: 70px; }
          .logo-card img { max-height: 38px; }
        }
      `}</style>
    </section>
  );
}
