"use client";

import React from 'react';

const approvalLogos = [
  { src: "https://images.unsplash.com/photo-1590490360182-c33d59735340?auto=format&fit=crop&q=80&w=300", alt: "Ministry of Tourism India" },
  { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=300", alt: "Bihar Tourism" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=300", alt: "Uttar Pradesh Tourism" },
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=300", alt: "Incredible India Approved" },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=300", alt: "Travel Board Certified" }
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
