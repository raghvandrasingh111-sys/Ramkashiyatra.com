"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import PackageCard from "@/app/components/PackageCard";
import Link from "next/link";
import NextImage from "next/image";
import HotelCarousel from "@/app/components/HotelCarousel";
import ApprovalCarousel from "@/app/components/ApprovalCarousel";
import Testimonials from "@/app/components/Testimonials";
import LiteInstagram from "@/app/components/LiteInstagram";
import { packages as allTourPackages } from "@/data/packages";

/* ────────────────────────────────────────────────────
   Animated Counter
   ──────────────────────────────────────────────────── */
function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
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

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  );
}

/* ────────────────────────────────────────────────────
   FAQ Accordion
   ──────────────────────────────────────────────────── */
function FAQItem({
  q,
  a,
  isOpen,
  onClick,
}: {
  q: string;
  a: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid var(--border-light)",
        borderRadius: "var(--radius-md)",
        marginBottom: "12px",
        overflow: "hidden",
        boxShadow: isOpen ? "var(--shadow-md)" : "var(--shadow-sm)",
        transition: "all 0.4s var(--ease-out-expo)",
        borderColor: isOpen ? "var(--brand-saffron)" : "var(--border-light)",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "20px 26px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <h4
          style={{
            fontSize: "1.05rem",
            color: "var(--brand-ink)",
            margin: 0,
            display: "flex",
            gap: "12px",
            fontWeight: 600,
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "var(--brand-saffron)",
              fontFamily: "var(--font-poppins)",
              fontWeight: 800,
            }}
          >
            Q.
          </span>{" "}
          {q}
        </h4>
        <i
          className="fas fa-chevron-down"
          style={{
            color: "var(--brand-saffron)",
            fontSize: "0.85rem",
            transition: "transform 0.35s var(--ease-out-expo)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
            flexShrink: 0,
          }}
        />
      </button>
      <div
        style={{
          maxHeight: `${height}px`,
          transition: "max-height 0.45s var(--ease-out-expo)",
          overflow: "hidden",
        }}
      >
        <div
          ref={contentRef}
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.98rem",
            lineHeight: 1.7,
            padding: "0 26px 22px 56px",
          }}
        >
          {a}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────── */
export default function Home() {
  const scrollRefs = useRef<HTMLDivElement[]>([]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [heroIndex, setHeroIndex] = useState(0);

  const heroSlides = [
    {
      image: "/images/destinations/varanasi.webp",
      eyebrow: "Kashi · The Eternal City",
      title: "Walk the Sacred Ghats of Varanasi",
      sub: "Experience the soul-stirring Ganga Aarti, ancient temples and timeless devotion.",
    },
    {
      image: "/images/destinations/ayodhya.webp",
      eyebrow: "Ayodhya · Lord Ram’s Birthplace",
      title: "Witness the Glory of Shri Ram Mandir",
      sub: "Visit the magnificent Ram Janmabhoomi, Hanuman Garhi and the holy Sarayu.",
    },
    {
      image: "/images/destinations/prayagraj.webp",
      eyebrow: "Prayagraj · Sangam Triveni",
      title: "Bathe in the Confluence of Three Rivers",
      sub: "Sail to the holy Sangam where Ganga, Yamuna and the mystical Saraswati meet.",
    },
  ];

  /* Auto-rotate hero slides */
  useEffect(() => {
    const t = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(t);
  }, [heroSlides.length]);

  /* Scroll reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    const refs = scrollRefs.current;
    refs.forEach((ref) => ref && observer.observe(ref));
    return () => refs.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

  const addToRefs = useCallback((el: HTMLDivElement | null) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el);
    }
  }, []);

  const featuredPackages = allTourPackages.slice(0, 6).map((pkg) => ({
    image: pkg.image,
    duration: pkg.duration,
    location: pkg.location,
    title: pkg.name,
    href: `/tour-packages/${pkg.slug}`,
  }));

  const destinations = [
    {
      img: "/images/destinations/varanasi.webp",
      label: "Varanasi",
      tag: "Spiritual Capital",
      experiences: "Kashi Vishwanath · Ganga Aarti · Sarnath",
    },
    {
      img: "/images/destinations/ayodhya.webp",
      label: "Ayodhya",
      tag: "Birthplace of Ram",
      experiences: "Ram Mandir · Hanuman Garhi · Sarayu Ghat",
    },
    {
      img: "/images/destinations/prayagraj.webp",
      label: "Prayagraj",
      tag: "Sangam City",
      experiences: "Triveni Sangam · Akshayavat · Anand Bhawan",
    },
    {
      img: "/images/destinations/uttar-pradesh.webp",
      label: "Mathura · Vrindavan",
      tag: "Land of Krishna",
      experiences: "Banke Bihari · Prem Mandir · ISKCON",
    },
  ];

  const services = [
    {
      icon: "fa-helicopter",
      title: "VIP Darshan Access",
      desc: "Skip-the-line entries at Kashi Vishwanath, Ram Mandir and Triveni Sangam.",
    },
    {
      icon: "fa-hotel",
      title: "Curated Luxury Stays",
      desc: "Hand-picked heritage palaces, riverside resorts and 5-star city hotels.",
    },
    {
      icon: "fa-route",
      title: "Bespoke Itineraries",
      desc: "Pind Daan, Aarti seating, family yatras — fully tailored to your needs.",
    },
    {
      icon: "fa-headset",
      title: "24×7 Personal Concierge",
      desc: "Dedicated relationship manager from the moment you land to departure.",
    },
  ];

  return (
    <main style={{ overflow: "hidden" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the best time to visit Varanasi and Ayodhya?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The best time to visit Varanasi and Ayodhya is from October to March when the weather is pleasant for spiritual sightseeing and attending the outdoor Ganga Aarti.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide customized Ayodhya Varanasi tour packages?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Ram Kashi Yatra specializes in tailoring itineraries based on your budget and preferences. We offer various customized Varanasi Ayodhya tour packages.",
                },
              },
              {
                "@type": "Question",
                name: "How many days are enough for a trip to Varanasi, Prayagraj, and Ayodhya?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 4-5 day tour is ideal to cover the major spiritual landmarks across Varanasi, Prayagraj, and Ayodhya at a comfortable pace.",
                },
              },
            ],
          }),
        }}
      />

      {/* ═══════════════════════════════════════════════
            HERO — Premium Ken Burns slideshow
         ═══════════════════════════════════════════════ */}
      <section className="hero">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide ${heroIndex === i ? "active" : ""}`}
          >
            <NextImage
              src={slide.image}
              alt={slide.title}
              fill
              priority={i === 0}
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
        <div className="hero-overlay" />
        <div className="hero-vignette" />

        <div className="hero-content container">
          <p className="hero-eyebrow dancing-script">
            {heroSlides[heroIndex].eyebrow}
          </p>
          <h1 key={`title-${heroIndex}`} className="hero-title">
            {heroSlides[heroIndex].title}
          </h1>
          <div className="divider-ornament">
            <span style={{ width: 40, height: 1, background: "rgba(255,255,255,0.4)" }} />
            <i className="fas fa-om" style={{ color: "var(--brand-gold-light)" }} />
            <span style={{ width: 40, height: 1, background: "rgba(255,255,255,0.4)" }} />
          </div>
          <p key={`sub-${heroIndex}`} className="hero-sub">
            {heroSlides[heroIndex].sub}
          </p>

          <div className="hero-actions">
            <Link href="/tour-packages" className="btn-primary btn-glow">
              <i className="fas fa-suitcase-rolling" /> Explore Packages
            </Link>
            <Link href="/enquire-now" className="btn-secondary">
              <i className="far fa-calendar-check" /> Plan My Journey
            </Link>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <i className="fas fa-shield-halved" />
              <div>
                <strong>Govt. Approved</strong>
                <span>UP & Bihar Tourism</span>
              </div>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <i className="fas fa-award" />
              <div>
                <strong>4.9 / 5 Rating</strong>
                <span>1,000+ Travellers</span>
              </div>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <i className="fas fa-headset" />
              <div>
                <strong>24×7 Concierge</strong>
                <span>Personal Manager</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={heroIndex === i ? "active" : ""}
              onClick={() => setHeroIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="scroll-chevron">
          <i className="fas fa-chevron-down" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
            HOTEL PARTNERS STRIP
         ═══════════════════════════════════════════════ */}
      <HotelCarousel />

      {/* ═══════════════════════════════════════════════
            VEDIC INVITATION — Quote band
         ═══════════════════════════════════════════════ */}
      <section className="quote-band">
        <div className="container quote-inner">
          <i className="fas fa-quote-left quote-icon" />
          <h2 ref={addToRefs} className="fade-in-up">
            “Where the Ganges whispers and ancient legends rise — Kashi and
            Ayodhya unveil a spiritual tapestry that{" "}
            <span className="gradient-text">transforms every soul.</span>”
          </h2>
          <p className="quote-author">— The Ram Kashi Yatra Promise</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
            WELCOME / INTRO
         ═══════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container intro-grid">
          <div ref={addToRefs} className="fade-in-up intro-text">
            <p className="eyebrow">
              <i className="fas fa-om" /> Welcome to Ram Kashi Yatra
            </p>
            <h2>
              Your Gateway to{" "}
              <span className="gradient-text">Sacred India</span>
            </h2>
            <p className="lead">
              For over a decade, we’ve crafted soul-stirring pilgrimages to
              Varanasi, Ayodhya, Prayagraj and the holiest cities of North
              India — blending uncompromising luxury with authentic spiritual
              experiences.
            </p>
            <ul className="intro-list">
              {[
                "VIP Sugam Darshan at Kashi Vishwanath & Ram Mandir",
                "Reserved Aarti seating at Dashashwamedh Ghat",
                "Private boat for the holy Triveni Sangam Snan",
                "Heritage stays curated by spiritual travel experts",
              ].map((item, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle" /> {item}
                </li>
              ))}
            </ul>
            <div className="intro-actions">
              <Link href="/tour-packages" className="btn-primary">
                View Tour Packages <i className="fas fa-arrow-right" />
              </Link>
              <a
                href="https://wa.me/919999995475"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <i className="fab fa-whatsapp" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div ref={addToRefs} className="fade-in-up intro-visual">
            <div className="intro-image-stack">
              <div className="intro-img intro-img-1">
                <NextImage
                  src="/images/destinations/varanasi.webp"
                  alt="Varanasi Ghats"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="intro-img intro-img-2">
                <NextImage
                  src="/images/destinations/ayodhya.webp"
                  alt="Ayodhya Ram Mandir"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="intro-stats">
                <div className="intro-stat">
                  <strong>
                    <AnimatedCounter target={1000} suffix="+" />
                  </strong>
                  <span>Happy Pilgrims</span>
                </div>
                <div className="intro-stat-divider" />
                <div className="intro-stat">
                  <strong>
                    <AnimatedCounter target={10} suffix="+" />
                  </strong>
                  <span>Years of Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
            STATS BAND — Premium dark
         ═══════════════════════════════════════════════ */}
      <section className="stats-band">
        <div className="container">
          <div className="stats-grid">
            {[
              { target: 1000, suffix: "+", label: "Happy Pilgrims", icon: "fas fa-users" },
              { target: 50, suffix: "+", label: "Tour Packages", icon: "fas fa-suitcase-rolling" },
              { target: 12, suffix: "+", label: "Years of Service", icon: "fas fa-award" },
              { target: 24, suffix: "/7", label: "Concierge Support", icon: "fas fa-headset" },
            ].map((stat, index) => (
              <div
                key={index}
                ref={addToRefs}
                className={`fade-in-up stagger-${index + 1} stat-card`}
              >
                <div className="stat-icon">
                  <i className={stat.icon} />
                </div>
                <div className="stat-number">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
            SERVICES — Why Choose Us
         ═══════════════════════════════════════════════ */}
      <section className="section-padding services-section">
        <div className="container">
          <div className="section-header" ref={addToRefs}>
            <p className="eyebrow center">
              <i className="fas fa-star" /> Signature Experiences
            </p>
            <h2>
              The <span className="gradient-text">Ram Kashi Yatra</span>{" "}
              Difference
            </h2>
            <p className="section-sub">
              Every detail handcrafted for the most discerning spiritual
              traveller.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div
                key={i}
                ref={addToRefs}
                className={`fade-in-up stagger-${i + 1} service-card`}
              >
                <div className="service-icon">
                  <i className={`fas ${s.icon}`} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
            POPULAR DESTINATIONS — Premium grid
         ═══════════════════════════════════════════════ */}
      <section className="section-padding destinations-section">
        <div className="container">
          <div className="section-header" ref={addToRefs}>
            <p className="eyebrow center">
              <i className="fas fa-map-marked-alt" /> Sacred Destinations
            </p>
            <h2>Explore the Holiest Cities of India</h2>
            <p className="section-sub">
              From the eternal ghats of Kashi to the divine birthplace of Lord
              Ram.
            </p>
          </div>
          <div className="destinations-grid">
            {destinations.map((item, index) => (
              <div
                key={index}
                ref={addToRefs}
                className={`fade-in-up stagger-${index + 1} destination-card`}
              >
                <Link
                  href="/tour-packages"
                  className="destination-link"
                  aria-label={`Explore tours in ${item.label}`}
                >
                  <div className="destination-img">
                    <NextImage
                      src={item.img}
                      alt={`${item.label} Tours`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      className="zoom-hover"
                    />
                  </div>
                  <div className="destination-overlay" />
                  <div className="destination-content">
                    <span className="destination-tag">{item.tag}</span>
                    <h3>{item.label}</h3>
                    <p>{item.experiences}</p>
                    <span className="destination-cta">
                      Discover Tours <i className="fas fa-arrow-right" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
            FEATURED PACKAGES — Premium card grid
         ═══════════════════════════════════════════════ */}
      <section className="section-padding packages-section">
        <div className="container">
          <div className="section-header" ref={addToRefs}>
            <p className="eyebrow center">
              <i className="fas fa-suitcase" /> Hand-picked for You
            </p>
            <h2>Our Most Loved Tour Packages</h2>
            <p className="section-sub">
              Curated spiritual journeys designed for comfort, devotion and
              transformation.
            </p>
          </div>
          <div className="packages-grid">
            {featuredPackages.map((pkg, index) => (
              <div
                key={index}
                ref={addToRefs}
                className={`fade-in-up stagger-${(index % 3) + 1}`}
              >
                <PackageCard {...pkg} priority={index < 3} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <Link href="/tour-packages" className="btn-primary">
              View All Packages <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
            CINEMATIC CTA BAND — Dark image with overlay
         ═══════════════════════════════════════════════ */}
      <section className="cta-band">
        <NextImage
          src="/images/destinations/varanasi.webp"
          alt="Varanasi Aarti"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="cta-overlay" />
        <div className="container cta-content" ref={addToRefs}>
          <p className="eyebrow center" style={{ color: "var(--brand-gold-light)" }}>
            <i className="fas fa-om" /> Begin Your Sacred Journey
          </p>
          <h2 className="cta-title">
            Let the divine call of Kashi & Ayodhya{" "}
            <span className="gradient-text">guide your soul.</span>
          </h2>
          <p className="cta-sub">
            Speak to our spiritual travel experts and craft a journey that
            stays with you forever.
          </p>
          <div className="cta-actions">
            <Link href="/enquire-now" className="btn-primary btn-glow">
              <i className="fas fa-calendar-check" /> Plan My Yatra
            </Link>
            <a href="tel:+919999995475" className="btn-secondary">
              <i className="fas fa-phone" /> +91 99999 95475
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
            APPROVAL CAROUSEL
         ═══════════════════════════════════════════════ */}
      <ApprovalCarousel />

      {/* ═══════════════════════════════════════════════
            TESTIMONIALS
         ═══════════════════════════════════════════════ */}
      <Testimonials />

      {/* ═══════════════════════════════════════════════
            TRAVEL TIPS — Instagram embeds
         ═══════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header" ref={addToRefs}>
            <p className="eyebrow center">
              <i className="fab fa-instagram" /> Travel Inspiration
            </p>
            <h2>Verified Travel Tips & Reels</h2>
            <p className="section-sub">
              Real stories, real ghats, real darshan — straight from our
              travellers.
            </p>
          </div>
          <div className="reels-grid">
            {[
              { id: "DCE2LNtSWpi", type: "reel" },
              { id: "DB6STThylM9", type: "reel" },
              { id: "DAa6baUyay_", type: "p" },
              { id: "DREVGCcEnv3", type: "p" },
            ].map((item, index) => (
              <div
                key={index}
                ref={addToRefs}
                className={`fade-in-up stagger-${(index % 4) + 1}`}
              >
                <LiteInstagram
                  id={item.id}
                  type={item.type}
                  height={item.type === "reel" ? "500px" : "400px"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
            FAQ
         ═══════════════════════════════════════════════ */}
      <section
        className="section-padding"
        style={{ background: "var(--bg-cream)" }}
      >
        <div className="container" style={{ maxWidth: 880 }}>
          <div className="section-header" ref={addToRefs}>
            <p className="eyebrow center">
              <i className="fas fa-circle-question" /> You Asked
            </p>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div ref={addToRefs} className="fade-in-up">
            {[
              {
                q: "What is the best time to visit Varanasi and Ayodhya?",
                a: (
                  <>
                    The best time is from <strong>October to March</strong>
                    when the weather is pleasant for sightseeing and attending
                    the outdoor Ganga Aarti. Browse our{" "}
                    <Link
                      href="/tour-packages"
                      style={{
                        color: "var(--brand-saffron)",
                        textDecoration: "underline",
                      }}
                    >
                      tour packages
                    </Link>{" "}
                    for seasonal offers.
                  </>
                ),
              },
              {
                q: "Do you provide customized Ayodhya Varanasi tour packages?",
                a: (
                  <>
                    Yes — we tailor every itinerary to your preferences,
                    budget and time. Simply{" "}
                    <Link
                      href="/enquire-now"
                      style={{
                        color: "var(--brand-saffron)",
                        textDecoration: "underline",
                      }}
                    >
                      fill out our enquiry form
                    </Link>
                    .
                  </>
                ),
              },
              {
                q: "Is Ayodhya safe and comfortable for senior citizens?",
                a: (
                  <>
                    Absolutely. We provide dedicated assistance, comfortable
                    transportation and senior-friendly{" "}
                    <Link
                      href="/hotels"
                      style={{
                        color: "var(--brand-saffron)",
                        textDecoration: "underline",
                      }}
                    >
                      hotels
                    </Link>{" "}
                    for a hassle-free divine experience.
                  </>
                ),
              },
              {
                q: "How many days are enough for Varanasi, Prayagraj and Ayodhya?",
                a: (
                  <>
                    A <strong>4–5 day tour</strong> is ideal to cover the
                    major spiritual landmarks across these three holy cities
                    at a comfortable pace. See our{" "}
                    <Link
                      href="/tour-packages"
                      style={{
                        color: "var(--brand-saffron)",
                        textDecoration: "underline",
                      }}
                    >
                      Essential UP tour
                    </Link>{" "}
                    for details.
                  </>
                ),
              },
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

      {/* ═════════════════════════════════════════════
           SCOPED STYLES
         ═════════════════════════════════════════════ */}
      <style jsx>{`
        /* ── HERO ───────────────────────────────────── */
        .hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          text-align: center;
          padding: 120px 5% 80px;
          background: var(--brand-ink);
        }
        .hero-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1.6s ease;
          z-index: 0;
        }
        .hero-slide.active {
          opacity: 1;
          z-index: 1;
        }
        .hero-slide :global(img) {
          animation: kenburns 14s ease-in-out infinite alternate;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
              180deg,
              rgba(14, 20, 36, 0.55) 0%,
              rgba(14, 20, 36, 0.4) 40%,
              rgba(14, 20, 36, 0.85) 100%
            );
          z-index: 2;
        }
        .hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            transparent 30%,
            rgba(14, 20, 36, 0.55) 100%
          );
          z-index: 2;
        }
        .hero-content {
          position: relative;
          z-index: 3;
          max-width: 900px;
        }
        .hero-eyebrow {
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          color: var(--brand-gold-light);
          margin-bottom: 18px;
          opacity: 0;
          animation: fadeInUp 0.9s var(--ease-out-expo) 0.2s forwards;
        }
        .hero-title {
          font-size: clamp(2.4rem, 5.5vw, 4.4rem);
          line-height: 1.08;
          color: #fff;
          margin-bottom: 18px;
          opacity: 0;
          animation: fadeInUp 0.9s var(--ease-out-expo) 0.4s forwards;
          text-shadow: 0 6px 30px rgba(0, 0, 0, 0.5);
        }
        .hero-sub {
          font-size: clamp(1rem, 1.4vw, 1.2rem);
          color: rgba(255, 255, 255, 0.92);
          max-width: 700px;
          margin: 0 auto 36px;
          opacity: 0;
          animation: fadeInUp 0.9s var(--ease-out-expo) 0.7s forwards;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeInUp 0.9s var(--ease-out-expo) 0.9s forwards;
        }
        .hero-trust {
          margin-top: 60px;
          display: flex;
          gap: 28px;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeInUp 0.9s var(--ease-out-expo) 1.1s forwards;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.92);
          text-align: left;
        }
        .trust-item i {
          color: var(--brand-gold-light);
          font-size: 1.5rem;
        }
        .trust-item div { display: flex; flex-direction: column; line-height: 1.2; }
        .trust-item strong {
          font-family: var(--font-poppins);
          font-size: 0.95rem;
          font-weight: 700;
        }
        .trust-item span {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.65);
          margin-top: 2px;
        }
        .trust-divider {
          width: 1px;
          height: 36px;
          background: rgba(255, 255, 255, 0.18);
        }
        .hero-dots {
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 4;
        }
        .hero-dots button {
          width: 28px;
          height: 4px;
          background: rgba(255, 255, 255, 0.25);
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.4s var(--ease-out-expo);
          padding: 0;
        }
        .hero-dots button.active {
          background: var(--brand-saffron);
          width: 40px;
          box-shadow: 0 0 14px rgba(var(--brand-saffron-rgb), 0.6);
        }

        /* ── QUOTE BAND ─────────────────────────────── */
        .quote-band {
          padding: clamp(60px, 8vw, 100px) 5%;
          background: var(--gradient-soft);
          text-align: center;
          position: relative;
        }
        .quote-band::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-luxe);
          opacity: 0.6;
        }
        .quote-inner { position: relative; max-width: 920px; margin: 0 auto; }
        .quote-icon {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 4rem;
          color: var(--brand-gold);
          opacity: 0.18;
        }
        .quote-band h2 {
          font-size: clamp(1.6rem, 2.6vw, 2.2rem);
          font-weight: 700;
          line-height: 1.45;
          color: var(--brand-ink);
          font-family: var(--font-poppins);
          font-style: italic;
        }
        .quote-author {
          margin-top: 20px;
          font-family: var(--font-dancing);
          font-size: 1.3rem;
          color: var(--brand-saffron);
          font-weight: 600;
        }

        /* ── INTRO ──────────────────────────────────── */
        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .intro-text h2 {
          font-size: clamp(2rem, 3.4vw, 2.8rem);
          margin: 6px 0 22px;
          line-height: 1.15;
        }
        .lead {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 28px;
        }
        .intro-list {
          list-style: none;
          padding: 0;
          margin: 0 0 32px;
          display: grid;
          gap: 12px;
        }
        .intro-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: var(--text-primary);
          font-weight: 500;
        }
        .intro-list i {
          color: var(--brand-saffron);
          background: rgba(var(--brand-saffron-rgb), 0.1);
          padding: 5px;
          border-radius: 50%;
          font-size: 0.85rem;
          flex-shrink: 0;
          margin-top: 3px;
        }
        .intro-actions { display: flex; gap: 14px; flex-wrap: wrap; }
        .intro-visual { position: relative; height: 540px; }
        .intro-image-stack {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .intro-img {
          position: absolute;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
        }
        .intro-img-1 {
          width: 70%;
          height: 70%;
          top: 0;
          left: 0;
          z-index: 1;
        }
        .intro-img-2 {
          width: 60%;
          height: 60%;
          right: 0;
          bottom: 60px;
          z-index: 2;
          border: 6px solid #fff;
        }
        .intro-stats {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          background: #fff;
          padding: 18px 28px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          display: flex;
          align-items: center;
          gap: 22px;
          border: 1px solid var(--border-light);
        }
        .intro-stat strong {
          font-family: var(--font-poppins);
          font-size: 1.7rem;
          color: var(--brand-saffron);
          display: block;
          line-height: 1;
        }
        .intro-stat span {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 600;
        }
        .intro-stat-divider {
          width: 1px;
          height: 38px;
          background: var(--border-light);
        }

        /* ── STATS BAND ─────────────────────────────── */
        .stats-band {
          padding: 80px 5%;
          background: var(--gradient-ink);
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .stats-band::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-luxe);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }
        .stat-card {
          text-align: center;
          padding: 30px 20px;
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          transition: all 0.4s var(--ease-out-expo);
        }
        .stat-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(var(--brand-gold-rgb), 0.3);
        }
        .stat-icon {
          font-size: 1.8rem;
          color: var(--brand-gold);
          margin-bottom: 16px;
          width: 56px;
          height: 56px;
          margin-inline: auto;
          border-radius: 50%;
          background: rgba(var(--brand-gold-rgb), 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(var(--brand-gold-rgb), 0.2);
        }
        .stat-number {
          font-family: var(--font-poppins);
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
          background: var(--gradient-gold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-label {
          margin-top: 10px;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.75);
          letter-spacing: 0.5px;
        }

        /* ── SERVICES ───────────────────────────────── */
        .services-section { background: var(--bg-cream); }
        .section-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 60px;
        }
        .section-header h2 {
          font-size: clamp(2rem, 3.6vw, 2.8rem);
          margin-bottom: 14px;
        }
        .section-sub {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.6;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
        }
        .service-card {
          background: #fff;
          padding: 34px 28px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
          transition: all 0.4s var(--ease-out-expo);
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--gradient-saffron);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s var(--ease-out-expo);
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: transparent;
        }
        .service-card:hover::before { transform: scaleX(1); }
        .service-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: var(--gradient-saffron);
          color: #fff;
          font-size: 1.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: var(--shadow-saffron);
        }
        .service-card h3 {
          font-size: 1.15rem;
          margin-bottom: 10px;
          color: var(--brand-ink);
        }
        .service-card p {
          color: var(--text-muted);
          font-size: 0.94rem;
          line-height: 1.6;
        }

        /* ── DESTINATIONS ───────────────────────────── */
        .destinations-section { background: #fff; }
        .destinations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          align-items: stretch;
        }
        .destination-card {
          position: relative;
          aspect-ratio: 4 / 5;
          min-height: 380px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          color: #fff;
          background: var(--brand-ink);
          box-shadow: var(--shadow-md);
          transition: transform 0.5s var(--ease-out-expo),
            box-shadow 0.5s var(--ease-out-expo);
          will-change: transform;
        }
        .destination-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }
        .destination-link {
          position: absolute;
          inset: 0;
          display: block;
          color: inherit;
          text-decoration: none;
        }
        .destination-img { position: absolute; inset: 0; }
        .destination-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(14, 20, 36, 0.1) 0%,
            rgba(14, 20, 36, 0.45) 50%,
            rgba(14, 20, 36, 0.92) 100%
          );
          z-index: 1;
          transition: background 0.5s ease;
        }
        .destination-card:hover .destination-overlay,
        .destination-link:hover .destination-overlay {
          background: linear-gradient(
            180deg,
            rgba(14, 20, 36, 0.2) 0%,
            rgba(14, 20, 36, 0.6) 50%,
            rgba(14, 20, 36, 0.95) 100%
          );
        }
        .destination-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px 24px;
          z-index: 2;
        }
        .destination-tag {
          display: inline-block;
          background: var(--gradient-saffron);
          color: #fff;
          padding: 4px 14px;
          border-radius: var(--radius-pill);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .destination-content h3 {
          color: #fff;
          font-size: 1.65rem;
          margin-bottom: 6px;
        }
        .destination-content p {
          color: rgba(255, 255, 255, 0.78);
          font-size: 0.85rem;
          margin-bottom: 14px;
        }
        .destination-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--brand-gold-light);
          font-weight: 700;
          font-size: 0.9rem;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s var(--ease-out-expo);
        }
        .destination-cta i { transition: transform 0.3s ease; }
        .destination-card:hover .destination-cta,
        .destination-link:hover .destination-cta {
          opacity: 1;
          transform: translateY(0);
        }
        .destination-card:hover .destination-cta i,
        .destination-link:hover .destination-cta i {
          transform: translateX(4px);
        }

        /* ── PACKAGES ───────────────────────────────── */
        .packages-section {
          background: var(--bg-cream);
          background-image:
            radial-gradient(circle at 0% 0%, rgba(var(--brand-saffron-rgb), 0.06) 0%, transparent 40%),
            radial-gradient(circle at 100% 100%, rgba(var(--brand-gold-rgb), 0.08) 0%, transparent 50%);
        }
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        /* ── CTA BAND ───────────────────────────────── */
        .cta-band {
          position: relative;
          padding: 100px 5%;
          color: #fff;
          text-align: center;
          overflow: hidden;
          isolation: isolate;
        }
        .cta-band :global(img) {
          z-index: -2;
          filter: brightness(0.55);
        }
        .cta-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(14, 20, 36, 0.85) 0%,
            rgba(178, 58, 72, 0.55) 50%,
            rgba(14, 20, 36, 0.85) 100%
          );
          z-index: -1;
        }
        .cta-content { position: relative; z-index: 1; max-width: 900px; }
        .cta-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          color: #fff;
          margin: 14px 0 20px;
          line-height: 1.15;
        }
        .cta-sub {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.86);
          max-width: 700px;
          margin: 0 auto 36px;
        }
        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ── REELS ──────────────────────────────────── */
        .reels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        /* ── RESPONSIVE ─────────────────────────────── */
        @media (max-width: 980px) {
          .intro-grid { grid-template-columns: 1fr; gap: 60px; }
          .intro-visual { height: 460px; }
          .hero-trust { gap: 18px; }
          .trust-divider { display: none; }
        }
        @media (max-width: 720px) {
          .hero { min-height: 92vh; padding-top: 110px; }
          .hero-dots { bottom: 60px; }
          .hero-trust { display: none; }
          .stat-number { font-size: 2.4rem; }
          .destination-card { aspect-ratio: 4 / 4.5; min-height: 320px; }
        }
      `}</style>
    </main>
  );
}
