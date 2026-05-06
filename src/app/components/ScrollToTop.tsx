"use client";

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`scroll-to-top-btn ${visible ? 'visible' : ''}`}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>

      <style jsx>{`
        .scroll-to-top-btn {
          position: fixed;
          bottom: 110px;
          right: 30px;
          z-index: 999;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FF8C00, #FFC219);
          color: #fff;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          box-shadow: 0 4px 15px rgba(255, 140, 0, 0.35);
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px) scale(0.8);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .scroll-to-top-btn.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }
        .scroll-to-top-btn:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 8px 25px rgba(255, 140, 0, 0.5);
        }
        @media (max-width: 768px) {
          .scroll-to-top-btn {
            bottom: 100px;
            right: 20px;
            width: 42px;
            height: 42px;
          }
        }
      `}</style>
    </>
  );
}
