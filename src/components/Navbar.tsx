"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
      <div className="logo" style={{ 
        display: 'flex', 
        alignItems: 'center',
        transform: scrolled ? 'scale(0.85)' : 'scale(1)',
        transformOrigin: 'left center',
        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        <Link href="/">
          <img 
            src="/logo-luxury.png" 
            alt="Luxury Trip India" 
            style={{ 
              height: '80px', 
              width: 'auto',
              filter: scrolled ? 'none' : 'drop-shadow(0 2px 10px rgba(0,0,0,0.2))'
            }} 
          />
        </Link>
      </div>

      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '40px',
        margin: 0,
        padding: 0,
        fontWeight: '700',
        alignItems: 'center'
      }}>
        {['Home', 'Tour Packages', 'Hotels'].map((item) => (
          <li key={item}>
            <Link 
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
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
              {item}
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
          background-color: #e67e00;
        }
        @media (max-width: 768px) {
          nav {
            padding: 10px 5%;
          }
          .logo img {
            height: 60px;
          }
          ul {
            display: none; // Placeholder for mobile menu
          }
        }
      `}</style>
    </nav>
  );
}
