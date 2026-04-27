"use client";

import React, { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    name: "Nivedita Yadav",
    location: "Khalilabad, Uttar Pradesh",
    text: "VaranasiAyodhya made our dream vacation a reality! Impeccable service, seamless logistics, and memories that will last a lifetime.",
    image: "https://ui-avatars.com/api/?name=Nivedita+Yadav&size=160&background=FF8C00&color=fff&bold=true"
  },
  {
    name: "Priyanka Sharma",
    location: "New Delhi",
    text: "VaranasiAyodhya.com exceeded expectations! Comfortable accommodations, convenient transportation, and exciting activities. Can't wait to book another tour!",
    image: "https://ui-avatars.com/api/?name=Priyanka+Sharma&size=160&background=FFC219&color=fff&bold=true"
  },
  {
    name: "Mark Walz",
    location: "USA",
    text: "VaranasiAyodhya immersed us in vibrant culture. Exceptional guides, seamless experience, once-in-a-lifetime adventure. Highly professional team.",
    image: "https://ui-avatars.com/api/?name=Mark+Walz&size=160&background=2563eb&color=fff&bold=true"
  },
  {
    name: "Murugran Swami",
    location: "Tamil Nadu",
    text: "VaranasiAyodhya made our trip unforgettable! Professional team, knowledgeable guides, and luxurious accommodations. Highly recommended for spiritual tours!",
    image: "https://ui-avatars.com/api/?name=Murugran+Swami&size=160&background=22c55e&color=fff&bold=true"
  },
  {
    name: "Sanjay Kapoor",
    location: "Mumbai",
    text: "VaranasiAyodhya exceeded expectations! Magical forts, friendly guides, and seamless experience. Perfect blend of comfort and spiritual charm.",
    image: "https://ui-avatars.com/api/?name=Sanjay+Kapoor&size=160&background=e94545&color=fff&bold=true"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    setAnimKey(k => k + 1);
  }, []);

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % testimonials.length);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + testimonials.length) % testimonials.length);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [goNext]);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    setTouchStart(null);
  };

  return (
    <section style={{ padding: '100px 5%', backgroundColor: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h4 style={{ color: 'var(--primary-orange)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '10px' }}>Customer Reviews</h4>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>What our Travelers Say</h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', color: '#FFC219' }}>
              {[1, 2, 3, 4, 5].map(i => <i key={i} className="fas fa-star"></i>)}
            </div>
            <p style={{ margin: 0, color: '#666', fontWeight: 'bold' }}>4.7 Based on 1000+ reviews</p>
          </div>
        </div>

        <div
          style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="testimonial-arrow testimonial-arrow-left"
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={goNext}
            className="testimonial-arrow testimonial-arrow-right"
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <div
            key={animKey}
            className="crossfade-enter"
            style={{
              backgroundColor: '#f9f9f9',
              padding: '50px',
              borderRadius: '30px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
              textAlign: 'center',
              position: 'relative'
            }}
          >
            <div style={{ position: 'absolute', top: '20px', left: '20px', fontSize: '3rem', color: '#eee' }}>
              <i className="fas fa-quote-left"></i>
            </div>

            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#444', fontStyle: 'italic', marginBottom: '30px' }}>
              &ldquo;{testimonials[activeIndex].text}&rdquo;
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px', border: '3px solid #fff', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
              />
              <h4 style={{ margin: 0, fontSize: '1.2rem' }}>{testimonials[activeIndex].name}</h4>
              <span style={{ color: '#888', fontSize: '0.9rem' }}>{testimonials[activeIndex].location}</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px' }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                style={{
                  width: activeIndex === index ? '30px' : '10px',
                  height: '10px',
                  borderRadius: '10px',
                  backgroundColor: activeIndex === index ? 'var(--primary-orange)' : '#ddd',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid #eee;
          color: #2B3036;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        .testimonial-arrow:hover {
          background: var(--primary-orange);
          color: #fff;
          border-color: var(--primary-orange);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(255, 140, 0, 0.3);
        }
        .testimonial-arrow-left { left: -22px; }
        .testimonial-arrow-right { right: -22px; }
        @media (max-width: 900px) {
          .testimonial-arrow-left { left: -10px; }
          .testimonial-arrow-right { right: -10px; }
        }
        @media (max-width: 480px) {
          .testimonial-arrow { display: none; }
        }
      `}</style>
    </section>
  );
}
