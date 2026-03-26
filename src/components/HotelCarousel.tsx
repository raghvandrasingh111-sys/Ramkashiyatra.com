"use client";

import React from 'react';

const logos = [
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1596386402129-579c62985dd3?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1551882547-ff43c638f511?auto=format&fit=crop&q=80&w=200"
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
