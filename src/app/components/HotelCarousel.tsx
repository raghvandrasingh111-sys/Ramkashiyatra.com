"use client";

import React, { useState } from "react";
import Image from "next/image";

/**
 * Premium hotel partner strip — official logos sourced from
 * Wikimedia Commons (verified Special:FilePath URLs).
 */
const partners = [
  { name: "Taj Hotels", file: "Taj_Hotels_logo.svg" },
  { name: "Hyatt", file: "Hyatt_Logo.svg" },
  { name: "Marriott", file: "Marriott_hotels_logo14.svg" },
  { name: "Hilton Worldwide", file: "Hilton_Worldwide_logo.svg" },
  { name: "Hampton by Hilton", file: "Hampton_by_Hilton_logo.svg" },
  { name: "Westin", file: "Westin_Hotels_%26_Resorts_logo.svg" },
  { name: "W Hotels", file: "W_Hotels_logo.svg" },
  { name: "Radisson", file: "Radisson_Hotels_logo.svg" },
  { name: "Novotel", file: "Novotel_logo_%282016%29.svg" },
  { name: "Crowne Plaza", file: "Crowne_Plaza_logo.svg" },
  { name: "ITC Hotels", file: "ITC_Hotels_logo.svg" },
  { name: "Best Western", file: "Best_Western_logo.svg" },
];

const wiki = (file: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=400`;

export default function HotelCarousel() {
  // Track failed images so we can hide them gracefully
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  const visible = partners.filter((p) => !failed[p.file]);

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
            {[...visible, ...visible].map((p, index) => (
              <div key={`${p.file}-${index}`} className="logo-card" title={p.name}>
                <Image
                  src={wiki(p.file)}
                  alt={`${p.name} official logo`}
                  width={140}
                  height={56}
                  sizes="140px"
                  loading="lazy"
                  className="partner-logo"
                  unoptimized
                  onError={() =>
                    setFailed((prev) => ({ ...prev, [p.file]: true }))
                  }
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
          animation: marquee 38s linear infinite;
          align-items: center;
        }
        .track:hover { animation-play-state: paused; }
        .logo-card {
          flex: 0 0 auto;
          width: 170px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 22px;
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
        .partner-logo {
          max-width: 100%;
          max-height: 56px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(0.6) opacity(0.85);
          transition: filter 0.4s ease;
        }
        .logo-card:hover .partner-logo {
          filter: grayscale(0) opacity(1);
        }
        @media (max-width: 768px) {
          .track { gap: 28px; }
          .logo-card { width: 140px; height: 76px; padding: 12px 16px; }
          .partner-logo { max-height: 44px; }
        }
      `}</style>
    </section>
  );
}
