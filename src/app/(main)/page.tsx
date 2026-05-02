"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import PackageCard from '@/components/PackageCard';
import Link from 'next/link';
import NextImage from 'next/image';
import HotelCarousel from '@/components/HotelCarousel';
import ApprovalCarousel from '@/components/ApprovalCarousel';
import Testimonials from '@/components/Testimonials';
import LiteInstagram from '@/components/LiteInstagram';
import { packages as allTourPackages } from '@/data/packages';

/* ── Animated Counter Component ──────────────────── */
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

/* ── FAQ Accordion Item ──────────────────────────── */
function FAQItem({ q, a, isOpen, onClick }: { q: string; a: React.ReactNode; isOpen: boolean; onClick: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div style={{
      borderBottom: '1px solid #eee',
      paddingBottom: '5px',
    }}>
      <button
        onClick={onClick}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '18px 0',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'left',
          gap: '15px',
        }}
      >
        <h4 style={{ fontSize: '1.1rem', color: '#1a1a1a', margin: 0, display: 'flex', gap: '10px', fontWeight: '600' }}>
          <span style={{ color: 'var(--primary-orange)' }}>Q:</span> {q}
        </h4>
        <i
          className="fas fa-chevron-down"
          style={{
            color: 'var(--primary-orange)',
            fontSize: '0.85rem',
            transition: 'transform 0.3s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            flexShrink: 0,
          }}
        ></i>
      </button>
      <div style={{
        height: `${height}px`,
        overflow: 'hidden',
        transition: 'height 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <div ref={contentRef} style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6', paddingLeft: '30px', paddingBottom: '15px' }}>
          {a}
        </div>
      </div>
    </div>
  );
}


export default function Home() {
  const scrollRefs = useRef<HTMLDivElement[]>([]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const currentRefs = scrollRefs.current;
    currentRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = useCallback((el: HTMLDivElement | null) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el);
    }
  }, []);

  const featuredPackages = allTourPackages.slice(0, 4).map(pkg => ({
    image: pkg.image,
    duration: pkg.duration,
    location: pkg.location,
    title: pkg.name,
    href: `/tour-packages/${pkg.slug}`
  }));

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best time to visit Varanasi and Ayodhya?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best time to visit Varanasi and Ayodhya is from October to March when the weather is pleasant for spiritual sightseeing and attending the outdoor Ganga Aarti."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide customized Ayodhya Varanasi tour packages?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Ram Kashi Yatra specializes in tailoring itineraries based on your budget and preferences. We offer various customized Varanasi Ayodhya tour packages."
                }
              },
              {
                "@type": "Question",
                "name": "How many days are enough for a trip to Varanasi, Prayagraj, and Ayodhya?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A 4-5 day tour is ideal to cover the major spiritual landmarks across Varanasi, Prayagraj, and Ayodhya at a comfortable pace."
                }
              }
            ]
          })
        }}
      />

      {/* ═══ Hero Section with Video Background ═══ */}
      <section className="hero" style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 5%',
        backgroundColor: '#000'
      }}>
        {/* Background Video & Poster */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          zIndex: -1,
          pointerEvents: 'none'
        }}>
          {/* LCP Poster Image - Shows until video loads */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            zIndex: 1
          }}>
            <NextImage
              src="/images/destinations/varanasi.webp"
              alt="Varanasi Spiritual Background"
              fill
              priority
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </div>

          <iframe
            src="https://www.youtube.com/embed/rDsOi3MByCI?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=rDsOi3MByCI&start=10"
            style={{
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.77vh',
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              border: 'none',
              zIndex: 2,
              opacity: 0.9
            }}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            title="Varanasi Spiritual Background Video"
          ></iframe>
          
          <div style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
            zIndex: 3
          }}></div>
        </div>

        {/* Hero Content with staggered animation */}
        <div style={{ zIndex: 1, maxWidth: '900px' }}>
          <p
            className="dancing-script"
            style={{
              fontSize: '1.5rem',
              marginBottom: '10px',
              opacity: 0,
              animation: 'fadeInUp 0.8s ease forwards 0.3s'
            }}
          >
            Ayodhya • Varanasi • Prayagraj • Chitrakoot
          </p>
          <h1 
            id="hero-title"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '20px',
              lineHeight: 1.2,
              opacity: 0,
              animation: 'fadeInUp 0.8s ease forwards 0.6s'
            }}
          >
            Best Kashi Ayodhya & Varanasi Tour Packages 2026
          </h1>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '30px',
            maxWidth: '800px',
            margin: '0 auto 30px',
            textAlign: 'center',
            opacity: 0,
            animation: 'fadeInUp 0.8s ease forwards 0.9s'
          }}>
            Embark on a transformative pilgrimage to Varanasi Ayodhya Prayagraj <br /> & immerse yourself into these timeless divine cities
          </p>
          <div style={{ opacity: 0, animation: 'fadeInUp 0.8s ease forwards 1.2s' }}>
            <Link href="/enquire-now" className="btn-primary btn-glow" style={{ fontSize: '1.2rem', padding: '15px 40px', borderRadius: '50px' }}>
              Book Now
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-chevron">
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* ═══ Hotels We Work With ═══ */}
      <HotelCarousel />

      {/* ═══ Intro Quote ═══ */}
      <section style={{
        padding: '100px 5%',
        background: 'linear-gradient(135deg, #FFC219 0%, #F0A731 50%, #FF8C00 100%)',
        textAlign: 'center'
      }}>
        <div ref={addToRefs} className="fade-in-up container">
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', lineHeight: 1.3, color: 'var(--dark-text)' }}>
            Where the Ganges whispers and legends reside, Varanasi, Ayodhya unveils the essence of ancient heritage, intertwining the spiritual tapestries of two sacred cities.
          </h2>
        </div>
      </section>

      {/* ═══ Welcome Section ═══ */}
      <section className="section-padding container" style={{ textAlign: 'center' }}>
        <div ref={addToRefs} className="fade-in-up">
          <p style={{ color: 'var(--primary-orange)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Welcome To Ram Kashi Yatra</p>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Your Gateway to Spiritual Kashi & Divine Ayodhya</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: '#666', lineHeight: '1.8' }}>
            Welcome to **Ram Kashi Yatra**, your trusted partner for spiritual journeys. We offer the best **Kashi Ayodhya Tour Packages** designed for comfort, affordability, and divine experience.
          </p>
          <p style={{ maxWidth: '800px', margin: '20px auto 0', color: '#666', lineHeight: '1.8' }}>
            Our packages cover all major destinations including **Kashi Vishwanath Temple**, **Ganga Aarti** in Varanasi, and **Shri Ram Mandir** in Ayodhya. We handle everything from hotel booking to local transport so you can focus on your spiritual यात्रा.
          </p>
          <div style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tour-packages" className="btn-primary">Book Now</Link>
            <a href="tel:+919999995475" className="btn-secondary" style={{ backgroundColor: '#2563eb', color: 'white', border: 'none' }}>Call Now</a>
            <a href="https://wa.me/919999995475" className="btn-secondary" style={{ backgroundColor: '#22c55e', color: 'white', border: 'none' }}>WhatsApp Now</a>
          </div>
        </div>
      </section>

      {/* ═══ Stats Counter Section (NEW) ═══ */}
      <section style={{
        padding: '70px 5%',
        background: 'linear-gradient(135deg, #1a2b48 0%, #2B3036 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            textAlign: 'center'
          }}>
            {[
              { target: 1000, suffix: '+', label: 'Happy Travelers', icon: 'fas fa-users' },
              { target: 50, suffix: '+', label: 'Tour Packages', icon: 'fas fa-suitcase-rolling' },
              { target: 8, suffix: '+', label: 'Years Experience', icon: 'fas fa-award' },
              { target: 24, suffix: '/7', label: 'Customer Support', icon: 'fas fa-headset' }
            ].map((stat, index) => (
              <div key={index} ref={addToRefs} className="fade-in-up" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div style={{
                  fontSize: '2rem',
                  color: 'var(--primary-gold)',
                  marginBottom: '15px',
                  opacity: 0.8
                }}>
                  <i className={stat.icon}></i>
                </div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  fontFamily: 'Poppins, sans-serif',
                  lineHeight: 1
                }}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p style={{ marginTop: '8px', fontSize: '1rem', opacity: 0.75, letterSpacing: '1px' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Service Icons ═══ */}
      <section style={{ padding: '80px 5%', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
            {[
              { icon: 'fas fa-taxi', title: 'Cab Transfer', desc: 'Seamless transfers ensuring comfort and convenience.' },
              { icon: 'fas fa-hotel', title: 'Hotel Booking', desc: 'Discover top-notch accommodations tailored to your preferences.' },
              { icon: 'fas fa-user-check', title: 'Expert Guide', desc: 'Knowledgeable guides enhancing your travel experience.' },
              { icon: 'fas fa-coffee', title: 'Meals', desc: 'Delicious meals served with care, complement your adventure.' }
            ].map((item, index) => (
              <div key={index} ref={addToRefs} className="fade-in-up hover-lift" style={{
                padding: '30px',
                borderRadius: '15px',
                backgroundColor: '#f9f9f9',
                transitionDelay: `${index * 0.1}s`,
                cursor: 'default'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  color: 'var(--primary-orange)',
                  marginBottom: '20px',
                  transition: 'transform 0.3s ease'
                }}>
                  <i className={item.icon}></i>
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Popular Destinations ═══ */}
      <section style={{ padding: '80px 5%', backgroundColor: '#fcfcfc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 ref={addToRefs} className="fade-in-up" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Popular Destinations</h2>
            <p ref={addToRefs} className="fade-in-up" style={{ color: '#666' }}>Explore our Top Destinations voted by more than 1000+ Travelers</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {[
              { img: "/images/destinations/varanasi.webp", alt: "Ancient Varanasi Ghats Spiritual View", label: "Varanasi" },
              { img: "/images/destinations/ayodhya.webp", alt: "Divine Ayodhya Ram Mandir Temple Architecture", label: "Ayodhya" },
              { img: "/images/destinations/prayagraj.webp", alt: "Prayagraj Sangam Holy River Confluence", label: "Prayagraj" },
              { img: "/images/destinations/uttar-pradesh.webp", alt: "Spiritual Pilgrimage Tour in Uttar Pradesh", label: "Uttar Pradesh" }
            ].map((item, index) => (
              <div key={index} ref={addToRefs} className="fade-in-up" style={{
                height: '400px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transitionDelay: `${index * 0.1}s`,
                position: 'relative',
                cursor: 'pointer'
              }}>
                <img
                  src={item.img}
                  alt={item.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  className="zoom-hover"
                  loading="lazy"
                />
                {/* Label overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  padding: '30px 20px 20px',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  color: 'white',
                }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '700' }}>{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Featured Packages ═══ */}
      <section className="section-padding" style={{ padding: '80px 5%', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 ref={addToRefs} className="fade-in-up" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Kashi Yatra Packages</h2>
            <p ref={addToRefs} className="fade-in-up" style={{ color: '#666' }}>Curated spiritual journeys designed for comfort and elevation</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {featuredPackages.map((pkg, index) => (
              <div key={index} ref={addToRefs} className="fade-in-up" style={{ transitionDelay: `${index * 0.1}s` }}>
                <PackageCard {...pkg} priority={index < 3} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link href="/tour-packages" className="btn-primary" style={{ padding: '15px 40px' }}>View All Packages</Link>
          </div>
        </div>
      </section>

      {/* ═══ Trust Icons ═══ */}
      <section style={{ padding: '60px 5%', backgroundColor: '#fcfcfc', borderTop: '1px solid #eee' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {[
              { title: 'Best Price Guarantee', desc: 'Get the best deals with our unbeatable price promise.', icon: 'fas fa-shield-alt' },
              { title: 'Easy & Quick Booking', desc: 'Effortless and swift bookings for your dream trip.', icon: 'fas fa-bolt' },
              { title: 'Customer Care 24/7', desc: 'Round-the-clock support ensuring your peace of mind.', icon: 'fas fa-headset' }
            ].map((item, index) => (
              <div key={index} ref={addToRefs} className="fade-in-up" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', transitionDelay: `${index * 0.1}s` }}>
                <div style={{
                  backgroundColor: '#FFC219',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(255, 194, 25, 0.3)'
                }}>
                  <i className={item.icon} style={{ color: 'white' }}></i>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.4' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Travel Tips Videos ═══ */}
      <section className="section-padding container" style={{ backgroundColor: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 ref={addToRefs} className="fade-in-up" style={{ fontSize: '2.5rem' }}>Must-Know Verified Travel Tips</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            { id: "DCE2LNtSWpi", type: "reel" },
            { id: "DB6STThylM9", type: "reel" },
            { id: "DAa6baUyay_", type: "p" },
            { id: "DREVGCcEnv3", type: "p" }
          ].map((item, index) => (
            <div key={index} ref={addToRefs} className="fade-in-up">
              <LiteInstagram 
                id={item.id} 
                type={item.type} 
                height={item.type === 'reel' ? '500px' : '400px'} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Why Choose Us ═══ */}
      <section className="section-padding" style={{ backgroundColor: '#f9fafb', padding: '100px 5%' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
            <div ref={addToRefs} className="fade-in-up">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '25px', color: '#1a1a1a' }}>Why Choose Ram Kashi Yatra?</h2>
              <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.8', marginBottom: '20px' }}>
                We don&apos;t just provide tours; we create life-changing spiritual experiences. Our **Kashi Ayodhya Tour Packages** are designed by locals who know every corner of these sacred lands.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.8', marginBottom: '20px' }}>
                Your journey with us includes **VIP Kashi Vishwanath Darshan**, reserved seating at the **Ganga Aarti**, premium AC transportation, and stays in handpicked luxury hotels. Whether it&apos;s your first pilgrimage or a family tradition, we ensure a seamless, divine connection with the gods.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                {['Direct Ram Mandir Entry Support', 'Experienced Spiritual Guides', 'Sanitized AC Cabs & Skilled Pilots', 'Luxury Stays near the Holy Rivers'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#1a1a1a', fontWeight: '600' }}>
                    <i className="fas fa-check-circle" style={{ color: 'var(--primary-orange)' }}></i> {item}
                  </li>
                ))}
              </ul>
              <Link href="/enquire-now" className="btn-primary">Book Your Divine Trip Today</Link>
            </div>
            <div ref={addToRefs} className="fade-in-up" style={{ backgroundColor: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#1a1a1a' }}>What&apos;s Included in Every Package</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div>
                  <h4 style={{ color: 'var(--primary-orange)', fontWeight: '700', fontSize: '1.1rem' }}>Varanasi Spiritual Immersion</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666', marginTop: '5px' }}>Includes Ganga Aarti by boat, Baba Vishwanath Sugam Darshan, and a cultural walk through the ancient Galis of Kashi.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary-orange)', fontWeight: '700', fontSize: '1.1rem' }}>Ayodhya Divine Residency</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666', marginTop: '5px' }}>Guided visit to the **Ram Janmabhoomi Mandir**, Hanuman Garhi, and soulful Saryu Aarti with experts who share the Ramayana legends.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary-orange)', fontWeight: '700', fontSize: '1.1rem' }}>Prayagraj Holy Dip</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666', marginTop: '5px' }}>Private boat ride to the **Sangam** (Confluence of 3 rivers) and visits to the Akshayavat and Sleeping Hanuman Temple.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Interactive FAQ Section ═══ */}
      <section className="section-padding" style={{ padding: '80px 5%' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 ref={addToRefs} className="fade-in-up" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Frequently Asked Questions</h2>
          <div ref={addToRefs} className="fade-in-up" style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                q: "What is the best time to visit Varanasi and Ayodhya?",
                a: <>The best time is from October to March when the weather is pleasant for sightseeing and attending the outdoor Ganga Aarti. Check our <Link href="/tour-packages" style={{ color: 'var(--primary-orange)', textDecoration: 'underline' }}>Tour Packages</Link> for seasonal offers.</>
              },
              {
                q: "Do you provide customized Ayodhya Varanasi tour packages?",
                a: <>Yes, we specialize in tailoring your itinerary based on your preferences, budget, and time constraints. Simply fill out our <Link href="/enquire-now" style={{ color: 'var(--primary-orange)', textDecoration: 'underline' }}>Enquiry form</Link>.</>
              },
              {
                q: "Is Ayodhya safe for senior citizens?",
                a: <>Absolutely. We provide dedicated support and comfortable transportation to ensure senior citizens have a hassle-free and divine experience. Visit our <Link href="/hotels" style={{ color: 'var(--primary-orange)', textDecoration: 'underline' }}>hotels</Link> section for elderly-friendly stays.</>
              },
              {
                q: "How many days are enough for a trip to Varanasi, Prayagraj, and Ayodhya?",
                a: <>A 4-5 day tour is ideal to cover the major spiritual landmarks across these three holy cities at a comfortable pace. See our <Link href="/tour-packages" style={{ color: 'var(--primary-orange)', textDecoration: 'underline' }}>Essential UP tour</Link> for details.</>
              }
            ].map((faq, index) => (
              <FAQItem
                key={index}
                q={faq.q}
                a={faq.a}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <ApprovalCarousel />
      <Testimonials />

      {/* ═══ Om Namah Shivay Section ═══ */}
      <section style={{
        position: 'relative',
        height: '60vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 5%'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          zIndex: -1,
          pointerEvents: 'none',
          backgroundColor: '#000'
        }}>
          <iframe
            src="https://www.youtube.com/embed/rDsOi3MByCI?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=rDsOi3MByCI&start=10&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover',
              filter: 'brightness(0.7) contrast(1.1)',
              zIndex: 0
            }}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            loading="lazy"
            title="Varanasi Spiritual Video"
          ></iframe>
          <div style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 2
          }}></div>
        </div>
        <div ref={addToRefs} className="fade-in-up" style={{ zIndex: 1 }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Om Namah Shivay</h2>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Discover the Timeless Charm of Varanasi</h3>
          <p style={{ maxWidth: '800px', margin: '0 auto' }}>
            Nestled along the banks of the sacred river Ganges, Varanasi is a city that embodies the rich tapestry of Indian culture, spirituality and history.
          </p>
          <Link href="/enquire-now" className="btn-primary" style={{ marginTop: '30px' }}>Plan your Trip</Link>
        </div>
      </section>

    </main>
  );
}
