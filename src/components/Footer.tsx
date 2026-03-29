"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" style={{
      backgroundColor: '#1a1d21',
      color: 'white',
      padding: '80px 5% 40px',
      fontSize: '0.95rem',
      lineHeight: '1.6'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '30px'
      }}>
        <div className="footer-col" style={{ gridColumn: 'span 2' }}>
          <div style={{ marginBottom: '30px' }}>
            <img
              src="/logo-luxury.png"
              alt="Ram Kashi Yatra"
              style={{ width: '220px', height: 'auto' }}
            />
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '30px', maxWidth: '400px' }}>
            At Ram Kashi Yatra, we deliver unforgettable spiritual travel experiences with seamless planning, unmatched service, and 24x7 support for journeys across Varanasi, Ayodhya, and India's holy sites.
          </p>
          <div style={{ marginBottom: '30px' }}>
            <img
              src="https://www.ramkashiyatra.com/wp-content/uploads/UP-Tourism-wh.webp"
              alt="UP Tourism"
              style={{ width: '150px', height: 'auto' }}
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
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { icon: 'fab fa-facebook', color: '#1877F2', href: 'https://www.facebook.com/profile.php?id=61564188934197' },
              { icon: 'fab fa-instagram', color: '#E4405F', href: 'https://www.instagram.com/luxurytripindia' },
              { icon: 'fab fa-youtube', color: '#FF0000', href: 'https://www.youtube.com/@ramkashiyatra' },
              { icon: 'fab fa-twitter', color: '#1DA1F2', href: 'https://twitter.com/ramkashiyatra' },
              { icon: 'fab fa-linkedin', color: '#0A66C2', href: 'https://www.linkedin.com/company/ramkashiyatra' },
              { icon: 'fab fa-whatsapp', color: '#25D366', href: 'https://wa.me/919999995475' }
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
        .footer-link:hover {
          color: white !important;
          text-decoration: underline !important;
        }
        .social-icon:hover {
          background-color: var(--primary-orange) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
}
