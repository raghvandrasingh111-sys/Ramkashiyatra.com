"use client";

import React, { useState, useEffect } from "react";

const FloatingContact: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 240);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fc-wrap ${show ? "show" : ""}`}>
      <div className={`fc-stack ${open ? "open" : ""}`}>
        <a
          href="https://wa.me/919999995475?text=Hi%2C+I%27d+like+to+enquire+about+a+yatra"
          target="_blank"
          rel="noopener noreferrer"
          className="fc-btn fc-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp" />
          <span className="fc-label">WhatsApp</span>
        </a>
        <a
          href="tel:+919999995475"
          className="fc-btn fc-call"
          aria-label="Call us now"
        >
          <i className="fas fa-phone" />
          <span className="fc-label">Call</span>
        </a>
        <a
          href="mailto:info@luxurytripindia.com"
          className="fc-btn fc-mail"
          aria-label="Email us"
        >
          <i className="fas fa-envelope" />
          <span className="fc-label">Email</span>
        </a>
      </div>

      <button
        className={`fc-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle quick contact"
      >
        <span className="fc-toggle-icon">
          <i className={open ? "fas fa-times" : "fas fa-headset"} />
        </span>
        <span className="fc-toggle-pulse" />
      </button>

      <style jsx>{`
        .fc-wrap {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          opacity: 0;
          transform: translateY(20px);
          pointer-events: none;
          transition: all 0.5s var(--ease-out-expo);
        }
        .fc-wrap.show {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .fc-stack {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-end;
          opacity: 0;
          transform: translateY(20px) scale(0.9);
          pointer-events: none;
          transition: all 0.4s var(--ease-out-expo);
        }
        .fc-stack.open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .fc-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 11px 16px 11px 14px;
          background: #fff;
          color: var(--brand-ink);
          border-radius: var(--radius-pill);
          text-decoration: none;
          font-family: var(--font-poppins);
          font-weight: 700;
          font-size: 0.85rem;
          box-shadow: var(--shadow-lg);
          transition: all 0.35s var(--ease-out-expo);
          white-space: nowrap;
        }
        .fc-btn i {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 0.85rem;
        }
        .fc-whatsapp i { background: #25d366; }
        .fc-call i { background: var(--brand-saffron); }
        .fc-mail i { background: var(--brand-rose); }
        .fc-btn:hover {
          transform: translateY(-3px) translateX(-4px);
          box-shadow: var(--shadow-xl);
        }

        .fc-toggle {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--gradient-saffron);
          color: #fff;
          border: none;
          cursor: pointer;
          font-size: 1.4rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-saffron);
          transition: transform 0.4s var(--ease-bounce),
            background 0.4s ease;
        }
        .fc-toggle:hover {
          transform: scale(1.06);
        }
        .fc-toggle.open {
          background: var(--brand-ink);
          box-shadow: 0 12px 28px rgba(14, 20, 36, 0.4);
        }
        .fc-toggle-icon {
          position: relative;
          z-index: 1;
        }
        .fc-toggle-pulse {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(var(--brand-saffron-rgb), 0.5);
          animation: pulseRing 2.2s ease-out infinite;
          z-index: 0;
        }
        .fc-toggle.open .fc-toggle-pulse { display: none; }

        @media (max-width: 640px) {
          .fc-wrap {
            bottom: 18px;
            right: 18px;
          }
          .fc-toggle { width: 56px; height: 56px; font-size: 1.2rem; }
          .fc-btn { padding: 9px 14px 9px 12px; font-size: 0.78rem; }
          .fc-btn i { width: 24px; height: 24px; font-size: 0.75rem; }
        }
      `}</style>
    </div>
  );
};

export default FloatingContact;
