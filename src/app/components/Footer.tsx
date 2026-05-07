"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      {/* ── Newsletter band ───────────────────────── */}
      <div className="newsletter-band">
        <div className="container newsletter-inner">
          <div>
            <p className="eyebrow" style={{ color: "var(--brand-gold-light)" }}>
              <i className="fas fa-envelope-open-text" /> Stay in the Loop
            </p>
            <h3 className="newsletter-title">
              Get exclusive yatra deals &amp; spiritual stories — straight to your inbox.
            </h3>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="newsletter-form"
          >
            <input type="email" placeholder="you@example.com" required />
            <button type="submit" className="btn-primary">
              Subscribe <i className="fas fa-arrow-right" />
            </button>
          </form>
        </div>
      </div>

      {/* ── Main grid ─────────────────────────────── */}
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <div className="brand-logo">
            <Image
              src="/logo-luxury.png"
              alt="Ram Kashi Yatra"
              width={120}
              height={118}
            />
          </div>
          <p className="brand-line">
            Premium spiritual journeys to <strong>Varanasi · Ayodhya · Prayagraj</strong>
            and the holiest cities of India — crafted with luxury, devotion and care.
          </p>
          <div className="brand-trust">
            <Image
              src="/images/up-tourism.png"
              alt="UP Tourism Approved"
              width={120}
              height={70}
              className="trust-img"
            />
            <Image
              src="/images/ministry-of-tourism.png"
              alt="Ministry of Tourism India"
              width={120}
              height={70}
              className="trust-img"
            />
          </div>
        </div>

        <div className="footer-col">
          <h3>Tour Packages</h3>
          <ul>
            <li>
              <Link href="/tour-packages/varanasi-ayodhya-divine-3n-4d">
                Varanasi &amp; Ayodhya Divine
              </Link>
            </li>
            <li>
              <Link href="/tour-packages/lucknow-ayodhya-tour-package-2n-3d">
                Lucknow &amp; Ayodhya Heritage
              </Link>
            </li>
            <li>
              <Link href="/tour-packages/ayodhya-ram-janmabhoomi-tour-package-2n-3d">
                Ayodhya Ram Janmabhoomi
              </Link>
            </li>
            <li>
              <Link href="/tour-packages/mathura-vrindavan-ayodhya-prayagraj-varanasi-9d">
                Brij to Kashi Mahayatra
              </Link>
            </li>
            <li>
              <Link href="/tour-packages" className="footer-cta">
                View All Packages →
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li>
              <Link href="/banaras-kashi-ayodhya-travel-guide">
                Banaras · Kashi · Ayodhya guide
              </Link>
            </li>
            <li><Link href="/tour-packages">Tour Packages</Link></li>
            <li><Link href="/hotels">Hotels</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/enquire-now">Enquire Now</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>
              <i className="fas fa-phone-volume" />
              <div>
                <span>Toll Free</span>
                <a href="tel:18005705475">1800-5705-475</a>
              </div>
            </li>
            <li>
              <i className="fas fa-mobile-alt" />
              <div>
                <span>Office</span>
                <a href="tel:+919999995475">+91 99999 95475</a>
              </div>
            </li>
            <li>
              <i className="fas fa-envelope" />
              <div>
                <span>Email</span>
                <a href="mailto:info@luxurytripindia.com">
                  info@luxurytripindia.com
                </a>
              </div>
            </li>
            <li>
              <i className="far fa-clock" />
              <div>
                <span>Working Hours</span>
                <strong>Mon – Sat · 8 AM – 8 PM</strong>
              </div>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Our Offices</h3>
          <ul className="office-list">
            <li>
              <i className="fas fa-map-marker-alt" />
              <div>
                <strong>Varanasi</strong>
                <span>F2/30, Imlok-02 M Near Taj, Nadesar, Varanasi</span>
              </div>
            </li>
            <li>
              <i className="fas fa-map-marker-alt" />
              <div>
                <strong>Haryana (NCR)</strong>
                <span>FF-105, Rodeo Drive Mall, Kundil, Haryana – 131028</span>
              </div>
            </li>
            <li>
              <i className="fas fa-map-marker-alt" />
              <div>
                <strong>Bodhgaya</strong>
                <span>Sujata Bypass, Near Hotel Star, Bodhgaya – 824231</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Social + bottom strip ─────────────────── */}
      <div className="container">
        <div className="social-row">
          <p className="social-label">Connect with us</p>
          <div className="socials">
            {[
              { icon: "fab fa-facebook-f", href: "https://www.facebook.com/profile.php?id=61564188934197", label: "Facebook" },
              { icon: "fab fa-instagram", href: "https://www.instagram.com/luxurytripindia", label: "Instagram" },
              { icon: "fab fa-youtube", href: "https://www.youtube.com/@ramkashiyatra", label: "YouTube" },
              { icon: "fab fa-twitter", href: "https://twitter.com/ramkashiyatra", label: "Twitter" },
              { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/company/ramkashiyatra", label: "LinkedIn" },
              { icon: "fab fa-whatsapp", href: "https://wa.me/919999995475", label: "WhatsApp" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="social-icon"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-inner">
          <p>© 2026 Ram Kashi Yatra · Luxury Trip India · All Rights Reserved.</p>
          <div className="bottom-links">
            <Link href="/privacy-policy">Privacy</Link>
            <span>·</span>
            <Link href="/terms-conditions">Terms</Link>
            <span>·</span>
            <span>Crafted with <i className="fas fa-heart" style={{ color: "var(--brand-saffron)" }} /> in India</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--gradient-ink);
          color: rgba(255, 255, 255, 0.85);
          padding: 0 0 24px;
          position: relative;
          overflow: hidden;
        }
        .footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-luxe);
        }

        /* ── Newsletter band ─────────────────────── */
        .newsletter-band {
          padding: 36px 5%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          background: linear-gradient(
            90deg,
            rgba(var(--brand-saffron-rgb), 0.08) 0%,
            transparent 60%
          );
        }
        .newsletter-inner {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 30px;
          align-items: center;
        }
        .newsletter-title {
          color: #fff;
          font-size: clamp(1.2rem, 1.8vw, 1.55rem);
          margin: 4px 0 0;
          line-height: 1.3;
          font-weight: 700;
        }
        .newsletter-form {
          display: flex;
          gap: 10px;
          background: rgba(255, 255, 255, 0.05);
          padding: 8px;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .newsletter-form input {
          flex: 1;
          padding: 12px 18px;
          border: none;
          background: transparent;
          color: #fff;
          font-size: 0.95rem;
          outline: none;
          font-family: inherit;
        }
        .newsletter-form input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        /* ── Main grid ───────────────────────────── */
        .footer-grid {
          padding-top: 70px;
          padding-bottom: 50px;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.2fr 1.2fr;
          gap: 40px;
        }
        .footer-col h3 {
          color: #fff;
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 22px;
          font-family: var(--font-poppins);
          position: relative;
          padding-bottom: 12px;
        }
        .footer-col h3::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 32px;
          height: 2px;
          background: var(--gradient-saffron);
          border-radius: 2px;
        }
        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-col ul a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.92rem;
          transition: color 0.3s ease, padding-left 0.3s ease;
          display: inline-block;
        }
        .footer-col ul a:hover {
          color: var(--brand-saffron);
          padding-left: 6px;
        }
        .footer-cta {
          color: var(--brand-gold-light) !important;
          font-weight: 700;
        }

        /* ── Brand col ───────────────────────────── */
        .brand-logo {
          background: rgba(255, 255, 255, 0.96);
          padding: 10px 16px;
          border-radius: var(--radius-md);
          display: inline-flex;
          align-items: center;
          margin-bottom: 22px;
        }
        .brand-logo :global(img) {
          width: 96px;
          height: auto;
          display: block;
        }
        .brand-line {
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.7;
          margin-bottom: 22px;
          max-width: 380px;
        }
        .brand-trust {
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
        }
        :global(.trust-img) {
          background: #fff;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          object-fit: contain;
          height: 56px;
          width: auto;
        }

        /* ── Contact col ─────────────────────────── */
        .contact-list li,
        .office-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .contact-list i,
        .office-list i {
          color: var(--brand-saffron);
          background: rgba(var(--brand-saffron-rgb), 0.1);
          padding: 7px;
          border-radius: 50%;
          font-size: 0.78rem;
          flex-shrink: 0;
          margin-top: 3px;
        }
        .contact-list span,
        .office-list span {
          display: block;
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.45);
          letter-spacing: 0.6px;
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 2px;
        }
        .contact-list a,
        .contact-list strong,
        .office-list strong {
          color: #fff;
          font-size: 0.95rem;
          font-weight: 600;
        }
        .contact-list a {
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .contact-list a:hover { color: var(--brand-saffron); }
        .office-list strong {
          display: block;
          margin-bottom: 2px;
          font-size: 0.92rem;
        }
        .office-list span {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.65);
          text-transform: none;
          letter-spacing: 0;
          font-weight: 400;
        }

        /* ── Social row ──────────────────────────── */
        .social-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding: 32px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          flex-wrap: wrap;
        }
        .social-label {
          color: var(--brand-gold-light);
          letter-spacing: 1px;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 0.78rem;
          margin: 0;
        }
        .socials {
          display: flex;
          gap: 12px;
        }
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.85);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s var(--ease-bounce);
        }
        .social-icon:hover {
          background: var(--gradient-saffron);
          color: #fff;
          transform: translateY(-3px) scale(1.05);
          border-color: transparent;
          box-shadow: var(--shadow-saffron);
        }

        /* ── Bottom strip ────────────────────────── */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 24px;
        }
        .bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.82rem;
          flex-wrap: wrap;
        }
        .bottom-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .bottom-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .bottom-links a:hover { color: var(--brand-saffron); }
        .bottom-links span:not(:has(i)) { opacity: 0.4; }

        /* ── Responsive ──────────────────────────── */
        @media (max-width: 1180px) {
          .footer-grid {
            grid-template-columns: 1.6fr 1fr 1fr 1.4fr;
          }
          .office-list { display: none; }
        }
        @media (max-width: 980px) {
          .newsletter-inner { grid-template-columns: 1fr; }
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer-brand { grid-column: span 2; }
        }
        @media (max-width: 580px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-brand { grid-column: span 1; }
          .newsletter-form { flex-direction: column; border-radius: var(--radius-md); }
          .newsletter-form :global(.btn-primary) { width: 100%; }
        }
      `}</style>
    </footer>
  );
}
