"use client";

import React from 'react';

const approvalLogos = [
  { src: "/images/ministry-of-tourism.png", alt: "Ministry of Tourism India" },
  { src: "/images/blissful-bihar.png", alt: "Bihar Tourism" },
  { src: "/images/up-tourism.png", alt: "Uttar Pradesh Tourism" },
  { src: "/images/city-1.png", alt: "Jaipur Tourism Board" },
  { src: "/images/city-2.png", alt: "Second City Tourism" }
];

export default function ApprovalCarousel() {
  return (
    <section className="approval-carousel-section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h3 className="carousel-title">Luxury Trip India Is Approved By</h3>
        <div className="carousel-viewport">
          <div className="carousel-track">
            {/* Double the logos for seamless loop */}
            {[...approvalLogos, ...approvalLogos].map((logo, index) => (
              <div key={index} className="carousel-item">
                <img src={logo.src} alt={logo.alt} title={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .approval-carousel-section {
          padding: 100px 0;
          background-color: #fcfcfc;
          border-top: 1px solid #eee;
          overflow: hidden;
        }
        .carousel-title {
          margin-bottom: 60px;
          font-size: 2.8rem;
          color: #1a1a1a;
          font-weight: 800;
          letter-spacing: -0.5px;
        }
        .carousel-viewport {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 30px 0;
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
          width: 300px;
          height: 160px;
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .carousel-item img {
          max-width: 100%;
          height: auto;
          max-height: 110px;
          filter: grayscale(0.2);
          opacity: 0.9;
          transition: all 0.4s ease;
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
        .carousel-item:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }
        .carousel-item:hover img {
          filter: grayscale(0);
          opacity: 1;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .carousel-title {
            font-size: 2rem;
          }
          .carousel-item {
            width: 220px;
            height: 120px;
          }
          .carousel-item img {
            max-height: 80px;
          }
        }
      `}</style>
    </section>
  );
}
