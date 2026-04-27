"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer" style={{
      backgroundColor: '#1a1d21',
      color: 'white',
      padding: '80px 5% 40px',
      fontSize: '0.95rem',
      lineHeight: '1.6'
    }}>
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <div style={{ marginBottom: '30px' }}>
            <Image
              src="/logo-luxury.png"
              alt="Ram Kashi Yatra"
              width={220}
              height={76}
              style={{ width: '220px', height: 'auto' }}
            />
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '30px', maxWidth: '400px' }}>
            At Ram Kashi Yatra, we deliver unforgettable spiritual travel experiences with seamless planning, unmatched service, and 24x7 support for journeys across Varanasi, Ayodhya, and India&apos;s holy sites.
          </p>
          <div style={{ marginBottom: '30px' }}>
            <img
              src="/images/up-tourism.png"
              alt="UP Tourism"
              style={{ width: '150px', height: 'auto' }}
              loading="lazy"
            />
          </div>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', fontSize: '0.85rem' }}>
            Live an Unforgettable Spiritual Experience with Ram Kashi Yatra: The Perfect Destination for your Kashi Ayodhya Yatra.
          </p>
        </div>

        <div className="footer-col">
          <h3 style={{ color: 'white', marginBottom: '25px', fontSize: '1.2rem', fontWeight: '600' }}>Our Location</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
            <p style={{ margin: 0 }}>
              <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary-orange)', marginRight: '8px' }}></i>
              <strong style={{ color: 'white' }}>Varanasi Office:</strong><br />
              F2/30, Imlok -02 M Near Taj , Nadesar , varanasi
            </p>
            <p style={{ margin: 0 }}>
              <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary-orange)', marginRight: '8px' }}></i>
              <strong style={{ color: 'white' }}>Haryana Office:</strong><br />
              FF-105, Rodeo Drive Mall, Kundil, Delhi - NCR, Haryana - 131028
            </p>
            <p style={{ margin: 0 }}>
              <i className="fas fa-location-crosshairs" style={{ color: 'var(--primary-orange)', marginRight: '8px' }}></i>
              <strong style={{ color: 'white' }}>Bodhgaya Office:</strong><br />
              Sujata Bypass Road near Hotel star, Bodhgaya - 824231 Bihar
            </p>
          </div>
        </div>

        <div className="footer-col">
          <h3 style={{ color: 'white', marginBottom: '25px', fontSize: '1.2rem', fontWeight: '600' }}>Popular Packages</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: 'rgba(255,255,255,0.6)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link href="/tour-packages/varanasi-ayodhya-divine-3n-4d" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-link">Varanasi & Ayodhya Divine Tour</Link></li>
            <li><Link href="/tour-packages/lucknow-ayodhya-tour-package-2n-3d" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-link">Lucknow & Ayodhya Heritage Tour</Link></li>
            <li><Link href="/tour-packages/ayodhya-ram-janmabhoomi-tour-package-2n-3d" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-link">Ayodhya Ram Janmabhoomi Special</Link></li>
            <li><Link href="/tour-packages/mathura-vrindavan-ayodhya-prayagraj-varanasi-9d" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-link">Divine Brij to Kashi Mahayatra</Link></li>
            <li><Link href="/tour-packages" style={{ color: 'var(--primary-orange)', textDecoration: 'none', fontWeight: 'bold' }} className="footer-link">View All Packages →</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 style={{ color: 'white', marginBottom: '25px', fontSize: '1.2rem', fontWeight: '600' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: 'rgba(255,255,255,0.6)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link href="/" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-link">Home</Link></li>
            <li><Link href="/tour-packages" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-link">Tour Packages</Link></li>
            <li><Link href="/hotels" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-link">Hotels</Link></li>
            <li><Link href="/enquire-now" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-link">Enquire Now</Link></li>
            <li><Link href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-link">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 style={{ color: 'white', marginBottom: '25px', fontSize: '1.2rem', fontWeight: '600' }}>Working Time</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: 'rgba(255,255,255,0.6)', marginBottom: '25px' }}>
            <li style={{ marginBottom: '8px' }}>Mon - Sat - <span style={{ color: 'white' }}>08:00 AM - 08:00 PM</span></li>
            <li>Sunday - <span style={{ color: 'white' }}>Closed</span></li>
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-phone-volume" style={{ color: 'var(--primary-orange)' }}></i>
              <span>Toll Free: <a href="tel:18005705475" style={{ color: 'white', textDecoration: 'none' }}>18005705475</a></span>
            </p>
            <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-phone-volume" style={{ color: 'var(--primary-orange)' }}></i>
              <span>Office: <a href="tel:+919999995475" style={{ color: 'white', textDecoration: 'none' }}>+91-9999995475</a></span>
            </p>
            <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-phone-volume" style={{ color: 'var(--primary-orange)' }}></i>
              <span>Support: <a href="tel:+919999995475" style={{ color: 'white', textDecoration: 'none' }}>+91-9999995475</a></span>
            </p>
          </div>
        </div>

        <div className="footer-col">
          <h3 style={{ color: 'white', marginBottom: '25px', fontSize: '1.2rem', fontWeight: '600' }}>Connect With Us:</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '30px' }}>
            {[
              { icon: 'fab fa-facebook', href: 'https://www.facebook.com/profile.php?id=61564188934197' },
              { icon: 'fab fa-instagram', href: 'https://www.instagram.com/luxurytripindia' },
              { icon: 'fab fa-youtube', href: 'https://www.youtube.com/@ramkashiyatra' },
              { icon: 'fab fa-twitter', href: 'https://twitter.com/ramkashiyatra' },
              { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/company/ramkashiyatra' },
              { icon: 'fab fa-whatsapp', href: 'https://wa.me/919999995475' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#FFC219',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1a1d21',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
                className="social-icon"
              >
                <i className={social.icon} style={{ fontSize: '1.2rem' }}></i>
              </a>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '12px', fontSize: '1rem', fontWeight: '600' }}>Get Travel Updates</h4>
            <form onSubmit={(e) => e.preventDefault()} style={{
              display: 'flex',
              gap: '0',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.15)'
            }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  border: 'none',
                  background: 'rgba(255,255,255,0.08)',
                  color: 'white',
                  fontSize: '0.85rem',
                  outline: 'none',
                  minWidth: 0
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px 16px',
                  border: 'none',
                  background: 'var(--primary-orange)',
                  color: '#fff',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap'
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '60px', paddingTop: '30px', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
        <p>© 2026 Luxury Trip India. All Rights Reserved.</p>
        <p style={{ marginTop: '5px', fontSize: '0.8rem', opacity: 0.8 }}>Made by Raghavendra Singh</p>
        <div style={{ marginTop: '15px' }}>
          <Link href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none', margin: '0 15px' }} className="footer-link">Privacy Policy</Link>
          <Link href="/terms-conditions" style={{ color: 'inherit', textDecoration: 'none', margin: '0 15px' }} className="footer-link">Terms and Conditions</Link>
        </div>
      </div>

      <style jsx>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
          gap: 30px;
        }
        .footer-link:hover {
          color: white !important;
          text-decoration: underline !important;
        }
        .social-icon:hover {
          background-color: var(--primary-orange) !important;
          transform: translateY(-3px);
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .footer-brand {
            grid-column: span 3;
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .footer-brand {
            grid-column: span 2;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-brand {
            grid-column: span 1;
          }
        }
      `}</style>
    </footer>
  );
}
