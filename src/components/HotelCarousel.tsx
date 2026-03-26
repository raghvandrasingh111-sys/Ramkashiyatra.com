"use client";

import React from 'react';

const logos = [
  "https://www.ramkashiyatra.com/wp-content/uploads/HotelLogos-01.png",
  "https://www.ramkashiyatra.com/wp-content/uploads/HotelLogos-03.png",
  "https://www.ramkashiyatra.com/wp-content/uploads/HotelLogos-04.png",
  "https://www.ramkashiyatra.com/wp-content/uploads/Clip-path-group.png",
  "https://www.ramkashiyatra.com/wp-content/uploads/HotelLogos-10.png",
  "https://www.ramkashiyatra.com/wp-content/uploads/HotelLogos-09.png",
  "https://www.ramkashiyatra.com/wp-content/uploads/HotelLogos-07.png",
  "https://www.ramkashiyatra.com/wp-content/uploads/HotelLogos-06.png"
];

export default function HotelCarousel() {
  return (
    <section className="hotel-carousel-section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h3 className="carousel-title">Hotels we work with</h3>
        <div className="carousel-viewport">
          <div className="carousel-track">
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="carousel-item">
                <img src={logo} alt={`Hotel Partner ${index % logos.length + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hotel-carousel-section {
          padding: 60px 0;
          background-color: #fff;
          border-bottom: 1px solid #eee;
          overflow: hidden;
        }
        .carousel-title {
          margin-bottom: 40px;
          font-size: 1.4rem;
          color: #666;
          font-weight: 500;
          letter-spacing: 1px;
        }
        .carousel-viewport {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
        }
        .carousel-track {
          display: flex;
          width: max-content;
          gap: 100px;
          animation: scroll-left 40s linear infinite;
        }
        .carousel-item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 180px;
        }
        .carousel-item img {
          max-width: 100%;
          height: auto;
          max-height: 70px;
          filter: grayscale(1);
          opacity: 0.6;
          transition: all 0.4s ease;
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
        .carousel-item img:hover {
          filter: grayscale(0);
          opacity: 1;
          transform: scale(1.1);
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
