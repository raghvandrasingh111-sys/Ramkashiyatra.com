"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Hotel {
  name: string;
  image: string;
}

interface CityHotelCarouselProps {
  title: string;
  hotels: Hotel[];
}

export default function CityHotelCarousel({
  title,
  hotels,
}: CityHotelCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) setItemsToShow(1.15);
        else if (window.innerWidth < 1024) setItemsToShow(2.2);
        else setItemsToShow(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = hotels.length;
  const maxIndex = Math.max(0, totalItems - Math.floor(itemsToShow));

  const handlePrev = () =>
    setCurrentIndex((p) => (p > 0 ? p - 1 : maxIndex));

  const handleNext = () =>
    setCurrentIndex((p) => (p < maxIndex ? p + 1 : 0));

  return (
    <section className="city-carousel">
      <div className="container">
        <div className="head">
          <div>
            <p className="eyebrow">
              <i className="fas fa-bed" /> Curated Stays
            </p>
            <h2>{title}</h2>
          </div>
          <div className="head-controls">
            <button
              onClick={handlePrev}
              className="ctrl-btn"
              aria-label="Previous"
            >
              <i className="fas fa-arrow-left" />
            </button>
            <button
              onClick={handleNext}
              className="ctrl-btn"
              aria-label="Next"
            >
              <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>

        <div className="viewport">
          <div
            ref={trackRef}
            className="track"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / itemsToShow)
              }%)`,
            }}
          >
            {hotels.map((hotel, idx) => (
              <div
                key={idx}
                className="card"
                style={{ flex: `0 0 ${100 / itemsToShow}%` }}
              >
                <div className="card-inner">
                  <div className="card-img-wrap">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      sizes="(max-width: 640px) 88vw, (max-width: 1024px) 45vw, 25vw"
                      className="hotel-image"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "/images/destinations/varanasi.webp";
                      }}
                    />
                    <div className="card-overlay" />
                    <span className="card-tag">
                      <i className="fas fa-star" /> Curated
                    </span>
                  </div>
                  <div className="card-body">
                    <h3>{hotel.name}</h3>
                    <div className="card-meta">
                      <span><i className="fas fa-wifi" /> Wi-Fi</span>
                      <span><i className="fas fa-utensils" /> Breakfast</span>
                      <span><i className="fas fa-car" /> Parking</span>
                    </div>
                    <div className="card-footer">
                      <div>
                        <span className="from">Starting from</span>
                        <strong className="gradient-text">Best Rates</strong>
                      </div>
                      <a
                        href="https://wa.me/919999995475?text=Hi%2C+I%27d+like+to+book+a+hotel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-cta"
                      >
                        Enquire <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .city-carousel {
          padding: 60px 0;
          background: var(--bg-cream);
        }
        .head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 32px;
          gap: 20px;
          flex-wrap: wrap;
        }
        .head h2 {
          font-size: clamp(1.6rem, 2.4vw, 2rem);
          margin-top: 6px;
        }
        .head-controls {
          display: flex;
          gap: 10px;
        }
        .ctrl-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid var(--border-light);
          color: var(--brand-ink);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
        }
        .ctrl-btn:hover {
          background: var(--gradient-saffron);
          color: #fff;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: var(--shadow-saffron);
        }

        .viewport { overflow: hidden; padding: 4px 0; }
        .track {
          display: flex;
          transition: transform 0.7s var(--ease-out-expo);
          gap: 0;
        }
        .card { padding: 0 12px; }
        .card-inner {
          background: #fff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          overflow: hidden;
          height: 100%;
          transition: all 0.4s var(--ease-out-expo);
          box-shadow: var(--shadow-sm);
        }
        .card-inner:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(var(--brand-saffron-rgb), 0.4);
        }
        .card-img-wrap {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .hotel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s var(--ease-out-expo);
        }
        .card-inner:hover .hotel-image { transform: scale(1.08); }
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 50%,
            rgba(14, 20, 36, 0.45) 100%
          );
        }
        .card-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(255, 255, 255, 0.95);
          color: var(--brand-ink);
          padding: 5px 12px;
          border-radius: var(--radius-pill);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: var(--shadow-md);
        }
        .card-tag i { color: var(--brand-saffron); }
        .card-body {
          padding: 18px 20px 22px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .card-body h3 {
          font-size: 1.05rem;
          margin: 0;
          line-height: 1.3;
          min-height: 2.6em;
          color: var(--brand-ink);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-meta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .card-meta i { color: var(--brand-saffron); margin-right: 4px; }
        .card-footer {
          margin-top: 4px;
          padding-top: 14px;
          border-top: 1px dashed var(--border-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }
        .from {
          display: block;
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 0.6px;
          text-transform: uppercase;
          font-weight: 600;
        }
        .gradient-text {
          font-family: var(--font-poppins);
          font-weight: 800;
          font-size: 1rem;
        }
        .card-cta {
          color: var(--brand-saffron);
          text-decoration: none;
          font-weight: 700;
          font-size: 0.85rem;
          font-family: var(--font-poppins);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.3s ease;
        }
        .card-cta:hover { gap: 10px; color: var(--brand-saffron-dark); }
      `}</style>
    </section>
  );
}
