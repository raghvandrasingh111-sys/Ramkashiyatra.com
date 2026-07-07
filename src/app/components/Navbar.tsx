"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Tour Packages", href: "/tour-packages" },
    { label: "Hotels", href: "/hotels" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <>
      {/* ── Top Utility Bar ───────────────────────────── */}
      <div className={`top-bar ${scrolled ? "hide" : ""}`}>
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <a href="tel:+919999995475" className="top-link">
              <i className="fas fa-phone-volume" /> +91 99999 95475
            </a>
            <span className="dot">•</span>
            <a href="mailto:info@luxurytripindia.com" className="top-link">
              <i className="fas fa-envelope" /> info@luxurytripindia.com
            </a>
          </div>
          <div className="top-bar-right">
            <span className="trust-pill">
              <i className="fas fa-star" /> 4.9 / 5 · 1,000+ Travellers
            </span>
            <a href="https://www.facebook.com/profile.php?id=61564188934197" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://www.instagram.com/luxurytripindia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.youtube.com/@ramkashiyatra" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube" />
            </a>
            <a href="https://wa.me/919999995475" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navigation ───────────────────────────── */}
      <nav className={`main-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Link href="/" className="brand">
            <span className="brand-logo-wrap">
              <Image
                src="/logo-luxury.png"
                alt="Ram Kashi Yatra"
                width={64}
                height={63}
                priority
              />
            </span>
            <span className="brand-name">
              <span className="brand-name-top">Ram Kashi Yatra</span>
              <span className="brand-name-sub">Luxury Spiritual Journeys</span>
            </span>
          </Link>

          <ul className="desktop-nav">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <a href="tel:+919999995475" className="phone-cta" aria-label="Call us">
              <i className="fas fa-phone" />
            </a>
            <Link href="/enquire-now" className="btn-primary nav-enquire">
              Plan My Yatra
              <i className="fas fa-arrow-right" />
            </Link>
            <button
              className={`hamburger ${mobileOpen ? "active" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className="bar bar-1" />
              <span className="bar bar-2" />
              <span className="bar bar-3" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer ─────────────────────────────── */}
      <div
        className={`mobile-overlay ${mobileOpen ? "active" : ""}`}
        onClick={() => setMobileOpen(false)}
      />
      <aside className={`mobile-drawer ${mobileOpen ? "active" : ""}`}>
        <div className="mobile-header">
          <Image
            src="/logo-luxury.png"
            alt="Ram Kashi Yatra"
            width={70}
            height={69}
          />
          <p className="mobile-tag">Luxury Spiritual Journeys</p>
        </div>
        <ul className="mobile-nav-list">
          {navLinks.map((item, index) => (
            <li
              key={item.label}
              style={{ animationDelay: `${index * 0.06 + 0.1}s` }}
            >
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="mobile-nav-link"
              >
                <span>{item.label}</span>
                <i className="fas fa-arrow-right" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-actions">
          <Link
            href="/enquire-now"
            onClick={() => setMobileOpen(false)}
            className="btn-primary"
            style={{ width: "100%" }}
          >
            Plan My Yatra
          </Link>
          <div className="mobile-contact">
            <a href="tel:+919999995475">
              <i className="fas fa-phone" /> Call
            </a>
            <a href="https://wa.me/919999995475" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp" /> WhatsApp
            </a>
          </div>
        </div>
      </aside>

      <style jsx>{`
        /* ── Top utility bar ─────────────────────────── */
        .top-bar {
          background: var(--brand-ink);
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.82rem;
          padding: 9px 0;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1001;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          transition: transform 0.4s var(--ease-out-expo), opacity 0.4s ease;
        }
        .top-bar.hide {
          transform: translateY(-100%);
          opacity: 0;
        }
        .top-bar-inner {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 32px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .top-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: inherit;
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .top-link:hover {
          color: var(--brand-saffron);
        }
        .top-link i {
          color: var(--brand-saffron);
          font-size: 0.85rem;
        }
        .dot {
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.7rem;
        }
        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .top-bar-right a {
          color: rgba(255, 255, 255, 0.65);
          font-size: 0.95rem;
          width: 28px;
          height: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .top-bar-right a:hover {
          color: var(--brand-saffron);
          background: rgba(255, 255, 255, 0.06);
        }
        .trust-pill {
          background: linear-gradient(135deg, rgba(var(--brand-gold-rgb), 0.18), rgba(var(--brand-saffron-rgb), 0.18));
          color: var(--brand-gold-light);
          padding: 4px 12px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.78rem;
          border: 1px solid rgba(var(--brand-gold-rgb), 0.3);
        }
        .trust-pill i {
          color: var(--brand-gold);
          margin-right: 4px;
        }

        /* ── Main nav ────────────────────────────────── */
        .main-nav {
          position: fixed;
          top: 38px;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 14px clamp(16px, 4vw, 32px);
          background: transparent;
          transition: all 0.45s var(--ease-out-expo);
        }
        .main-nav.scrolled {
          top: 0;
          padding: 8px clamp(16px, 4vw, 32px);
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(20px) saturate(150%);
          -webkit-backdrop-filter: blur(20px) saturate(150%);
          box-shadow: 0 10px 30px rgba(17, 22, 31, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.6);
        }
        .nav-inner {
          max-width: var(--container-max);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        /* ── Brand ───────────────────────────────────── */
        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          color: inherit;
        }
        .brand-logo-wrap {
          background: rgba(255, 255, 255, 0.96);
          padding: 6px 12px;
          border-radius: 14px;
          box-shadow: 0 8px 22px rgba(17, 22, 31, 0.18);
          display: inline-flex;
          align-items: center;
          transition: all 0.4s var(--ease-out-expo);
        }
        .main-nav.scrolled .brand-logo-wrap {
          padding: 4px 8px;
          box-shadow: 0 4px 12px rgba(17, 22, 31, 0.1);
        }
        .brand-logo-wrap :global(img) {
          display: block;
          width: 56px;
          height: auto;
          transition: width 0.4s var(--ease-out-expo);
        }
        .main-nav.scrolled .brand-logo-wrap :global(img) {
          width: 44px;
        }
        .brand-name {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .brand-name-top {
          font-family: var(--font-poppins);
          font-weight: 800;
          font-size: 1.05rem;
          color: #fff;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
          transition: color 0.4s ease;
        }
        .main-nav.scrolled .brand-name-top {
          color: var(--brand-ink);
          text-shadow: none;
        }
        .brand-name-sub {
          font-family: var(--font-dancing);
          font-size: 0.9rem;
          margin-top: 2px;
          color: var(--brand-gold-light);
          font-weight: 600;
        }
        .main-nav.scrolled .brand-name-sub {
          color: var(--brand-saffron);
        }

        /* ── Desktop nav links ───────────────────────── */
        .desktop-nav {
          list-style: none;
          display: flex;
          gap: 36px;
          align-items: center;
          margin: 0;
          padding: 0;
        }
        .nav-link {
          position: relative;
          color: #fff;
          font-family: var(--font-poppins);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: color 0.3s ease;
          text-shadow: 0 2px 6px rgba(0,0,0,0.4);
          padding: 6px 0;
        }
        .main-nav.scrolled .nav-link {
          color: var(--brand-ink);
          text-shadow: none;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: var(--gradient-saffron);
          border-radius: 2px;
          transition: width 0.35s var(--ease-out-expo);
        }
        .nav-link:hover {
          color: var(--brand-saffron);
        }
        .nav-link:hover::after {
          width: 100%;
        }

        /* ── Right CTA cluster ───────────────────────── */
        .nav-cta {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .phone-cta {
          display: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        .main-nav.scrolled .phone-cta {
          background: rgba(var(--brand-saffron-rgb), 0.1);
          border-color: rgba(var(--brand-saffron-rgb), 0.3);
          color: var(--brand-saffron);
        }
        .phone-cta:hover {
          background: var(--brand-saffron);
          color: #fff;
          border-color: var(--brand-saffron);
          transform: translateY(-2px);
        }
        .nav-enquire {
          padding: 12px 24px;
          font-size: 0.88rem;
        }
        .nav-enquire :global(i) {
          font-size: 0.75rem;
          transition: transform 0.3s ease;
        }
        .nav-enquire:hover :global(i) {
          transform: translateX(3px);
        }

        /* ── Hamburger ───────────────────────────────── */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.15);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          cursor: pointer;
          gap: 5px;
          padding: 10px;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        .main-nav.scrolled .hamburger {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.08);
        }
        .bar {
          display: block;
          width: 22px;
          height: 2.5px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.4s var(--ease-bounce);
        }
        .main-nav.scrolled .bar {
          background: var(--brand-ink);
        }
        .hamburger.active .bar-1 {
          transform: translateY(7.5px) rotate(45deg);
          background: var(--brand-ink);
        }
        .hamburger.active .bar-2 {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger.active .bar-3 {
          transform: translateY(-7.5px) rotate(-45deg);
          background: var(--brand-ink);
        }

        /* ── Mobile drawer ───────────────────────────── */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(14, 20, 36, 0.6);
          backdrop-filter: blur(6px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
          z-index: 1050;
        }
        .mobile-overlay.active {
          opacity: 1;
          visibility: visible;
        }
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 360px;
          max-width: 88vw;
          height: 100vh;
          background: linear-gradient(180deg, #fff 0%, var(--bg-cream) 100%);
          box-shadow: -20px 0 60px rgba(14, 20, 36, 0.2);
          z-index: 1100;
          transform: translateX(105%);
          transition: transform 0.5s var(--ease-out-expo);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }
        .mobile-drawer.active {
          transform: translateX(0);
        }
        .mobile-header {
          padding: 30px 28px 24px;
          background: var(--gradient-ink);
          color: #fff;
          text-align: center;
          border-bottom: 3px solid var(--brand-saffron);
        }
        .mobile-header :global(img) {
          background: #fff;
          padding: 8px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }
        .mobile-tag {
          font-family: var(--font-dancing);
          font-size: 1.1rem;
          color: var(--brand-gold-light);
          margin-top: 14px;
        }
        .mobile-nav-list {
          list-style: none;
          padding: 16px 0;
          margin: 0;
          flex: 1;
        }
        .mobile-nav-list li {
          opacity: 0;
          animation: slideInNav 0.45s var(--ease-out-expo) forwards;
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 28px;
          color: var(--brand-ink);
          text-decoration: none;
          font-family: var(--font-poppins);
          font-weight: 600;
          font-size: 1.05rem;
          transition: all 0.25s ease;
          border-left: 3px solid transparent;
        }
        .mobile-nav-link i {
          color: var(--brand-saffron);
          opacity: 0;
          transform: translateX(-6px);
          transition: all 0.3s ease;
          font-size: 0.85rem;
        }
        .mobile-nav-link:hover {
          background: rgba(var(--brand-saffron-rgb), 0.06);
          border-left-color: var(--brand-saffron);
          color: var(--brand-saffron);
        }
        .mobile-nav-link:hover i {
          opacity: 1;
          transform: translateX(0);
        }
        .mobile-actions {
          padding: 24px 28px 36px;
          border-top: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .mobile-contact {
          display: flex;
          gap: 14px;
        }
        .mobile-contact a {
          flex: 1;
          padding: 12px;
          border-radius: 12px;
          background: #fff;
          color: var(--brand-ink);
          text-decoration: none;
          text-align: center;
          font-weight: 600;
          font-size: 0.9rem;
          border: 1px solid var(--border-light);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
        .mobile-contact a:first-child i {
          color: var(--brand-saffron);
        }
        .mobile-contact a:last-child i {
          color: #25d366;
        }
        .mobile-contact a:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        @keyframes slideInNav {
          from {
            opacity: 0;
            transform: translateX(28px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* ── Responsive ──────────────────────────────── */
        @media (max-width: 1080px) {
          .desktop-nav { gap: 26px; }
          .brand-name-sub { display: none; }
        }
        @media (max-width: 960px) {
          .desktop-nav { display: none; }
          .nav-enquire { display: none; }
          .phone-cta { display: inline-flex; }
          .hamburger { display: flex; }
          .brand-name { display: none; }
        }
        @media (max-width: 720px) {
          .top-bar-left .dot,
          .top-bar-left a:nth-child(3) { display: none; }
          .trust-pill { display: none; }
        }
        @media (max-width: 520px) {
          .top-bar-right a { display: none; }
          .top-bar-right a:first-of-type,
          .top-bar-right a:last-of-type { display: inline-flex; }
        }
      `}</style>
    </>
  );
}
