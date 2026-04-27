"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Tour Packages', href: '/tour-packages' },
    { label: 'Hotels', href: '/hotels' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: scrolled ? '8px 5%' : '20px 5%',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backdropFilter: scrolled ? 'blur(15px)' : 'none'
      }}>
        <div className="logo-wrapper" style={{
          display: 'flex',
          alignItems: 'center',
          padding: '5px 15px',
          backgroundColor: scrolled ? 'transparent' : 'rgba(255, 255, 255, 0.9)',
          borderRadius: '12px',
          boxShadow: scrolled ? 'none' : '0 10px 25px rgba(0,0,0,0.15)',
          transform: scrolled ? 'scale(0.8)' : 'scale(1)',
          transformOrigin: 'left center',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/logo-luxury.png"
              alt="Ram Kashi Yatra - Luxury Trip India"
              width={180}
              height={70}
              style={{ display: 'block' }}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="desktop-nav" style={{
          display: 'flex',
          listStyle: 'none',
          gap: '40px',
          margin: 0,
          padding: 0,
          fontWeight: '700',
          alignItems: 'center'
        }}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                style={{
                  color: scrolled ? '#1a1a1a' : '#fff',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  textShadow: scrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.3)'
                }}
                className="nav-link"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/enquire-now" style={{
              backgroundColor: '#FF8C00',
              color: '#fff',
              padding: scrolled ? '10px 24px' : '14px 30px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 4px 20px rgba(255, 140, 0, 0.4)',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
              className="btn-enquire"
            >
              Enquire Now
            </Link>
          </li>
        </ul>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className={`hamburger ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '44px',
            height: '44px',
            background: scrolled ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.15)',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            gap: '5px',
            padding: '10px',
            transition: 'all 0.3s ease',
            zIndex: 1100,
          }}
        >
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
          <span className="bar bar-3"></span>
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${mobileOpen ? 'active' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'active' : ''}`}>
        <div style={{ padding: '25px 30px', borderBottom: '1px solid #eee' }}>
          <Image
            src="/logo-luxury.png"
            alt="Ram Kashi Yatra"
            width={160}
            height={55}
            style={{ height: '55px', width: 'auto' }}
          />
        </div>
        <ul className="mobile-nav-list">
          {navLinks.map((item, index) => (
            <li key={item.label} style={{ animationDelay: `${index * 0.08}s` }}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="mobile-nav-link"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li style={{ padding: '15px 30px', animationDelay: `${navLinks.length * 0.08}s` }}>
            <Link
              href="/enquire-now"
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                backgroundColor: '#FF8C00',
                color: '#fff',
                padding: '14px',
                borderRadius: '12px',
                textDecoration: 'none',
                textAlign: 'center',
                fontWeight: '800',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 4px 20px rgba(255, 140, 0, 0.3)'
              }}
            >
              Enquire Now
            </Link>
          </li>
        </ul>
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '30px',
          right: '30px',
          display: 'flex',
          gap: '15px',
          justifyContent: 'center'
        }}>
          <a href="tel:+919999995475" style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            color: '#555', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600'
          }}>
            <i className="fas fa-phone" style={{ color: '#FF8C00' }}></i> Call
          </a>
          <a href="https://wa.me/919999995475" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            color: '#555', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600'
          }}>
            <i className="fab fa-whatsapp" style={{ color: '#25d366' }}></i> WhatsApp
          </a>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #FF8C00;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link:hover {
          color: #FF8C00 !important;
        }
        .btn-enquire:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 8px 25px rgba(255, 140, 0, 0.5);
          background-color: #e67e00 !important;
        }

        /* Hamburger bars */
        .bar {
          display: block;
          width: 22px;
          height: 2.5px;
          background: ${scrolled ? '#1a1a1a' : '#fff'};
          border-radius: 2px;
          transition: all 0.35s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .hamburger.active .bar-1 {
          transform: translateY(7.5px) rotate(45deg);
          background: #1a1a1a;
        }
        .hamburger.active .bar-2 {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger.active .bar-3 {
          transform: translateY(-7.5px) rotate(-45deg);
          background: #1a1a1a;
        }

        /* Mobile overlay */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
          z-index: 1050;
        }
        .mobile-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* Mobile drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 320px;
          max-width: 85vw;
          height: 100vh;
          background: #fff;
          box-shadow: -10px 0 40px rgba(0,0,0,0.15);
          z-index: 1100;
          transform: translateX(100%);
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-y: auto;
        }
        .mobile-drawer.active {
          transform: translateX(0);
        }

        .mobile-nav-list {
          list-style: none;
          padding: 10px 0;
          margin: 0;
        }
        .mobile-nav-list li {
          opacity: 0;
          animation: slideInNav 0.4s ease forwards;
        }
        .mobile-drawer.active .mobile-nav-list li {
          opacity: 1;
        }

        .mobile-nav-link {
          display: block;
          padding: 16px 30px;
          color: #2B3036;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.05rem;
          transition: all 0.2s ease;
          border-left: 3px solid transparent;
        }
        .mobile-nav-link:hover {
          background: #FFF8EE;
          border-left-color: #FF8C00;
          color: #FF8C00;
        }

        @keyframes slideInNav {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* Mobile responsive */
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
