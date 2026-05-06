"use client";

import React from 'react';

const logos = [
  "/images/hotels/HotelLogos-01.png",
  "/images/hotels/HotelLogos-03.png",
  "/images/hotels/HotelLogos-04.png",
  "/images/hotels/Clip-path-group.png",
  "/images/hotels/HotelLogos-10.png",
  "/images/hotels/HotelLogos-09.png",
  "/images/hotels/HotelLogos-07.png",
  "/images/hotels/HotelLogos-06.png"
];

export default function HotelCarousel() {
  return (
    <section className="hotel-carousel-section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h3 className="carousel-title">Hotels we work with</h3>
        <div className="carousel-viewport">
          <div className="carousel-track">
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className="carousel-item">
                <img src={logo} alt={`Hotel Partner ${index % logos.length + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hotel-carousel-section {
          padding: 40px 0;
          background-color: #fff;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
          overflow: hidden;
        }
        .carousel-title {
          margin-bottom: 30px;
          font-size: 1.6rem;
          color: #1a1a1a;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .carousel-viewport {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 10px 0;
        }
        .carousel-track {
          display: flex;
          width: max-content;
          gap: 50px;
          animation: scroll-left 30s linear infinite;
        }
        .carousel-item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
        }
        .carousel-item img {
          max-width: 100%;
          height: auto;
          max-height: 80px;
          filter: grayscale(0);
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
        .carousel-item img:hover {
          opacity: 1;
          transform: scale(1.1);
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @media (max-width: 768px) {
          .carousel-track { gap: 30px; }
          .carousel-item { width: 80px; }
        }
      `}</style>
    </section>
  );
}
