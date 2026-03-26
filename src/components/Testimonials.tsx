"use client";

import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Nivedita Yadav",
    location: "Khalilabad, Uttar Pradesh",
    text: "VaranasiAyodhya made our dream vacation a reality! Impeccable service, seamless logistics, and memories that will last a lifetime.",
    image: "https://www.ramkashiyatra.com/wp-content/uploads/Testimonials_-nivi-300x291-1.jpeg"
  },
  {
    name: "Priyanka Sharma",
    location: "New Delhi",
    text: "VaranasiAyodhya.com exceeded expectations! Comfortable accommodations, convenient transportation, and exciting activities. Can't wait to book another tour!",
    image: "https://www.ramkashiyatra.com/wp-content/uploads/priyanka-sharma-646.jpeg"
  },
  {
    name: "Mark Walz",
    location: "USA",
    text: "VaranasiAyodhya immersed us in vibrant culture. Exceptional guides, seamless experience, once-in-a-lifetime adventure. Highly professional team.",
    image: "https://www.ramkashiyatra.com/wp-content/uploads/mark-walz-144.png"
  },
  {
    name: "Murugran Swami",
    location: "Tamil Nadu",
    text: "VaranasiAyodhya made our trip unforgettable! Professional team, knowledgeable guides, and luxurious accommodations. Highly recommended for spiritual tours!",
    image: "https://www.ramkashiyatra.com/wp-content/uploads/RajasthanX-Murugran-Swami-.webp"
  },
  {
    name: "Sanjay Kapoor",
    location: "Mumbai",
    text: "VaranasiAyodhya exceeded expectations! Magical forts, friendly guides, and seamless experience. Perfect blend of comfort and spiritual charm.",
    image: "https://www.ramkashiyatra.com/wp-content/uploads/SK.jpg"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#f9f9f9',
            padding: '50px',
            borderRadius: '30px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            textAlign: 'center',
            position: 'relative'
          }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px', fontSize: '3rem', color: '#eee' }}>
              <i className="fas fa-quote-left"></i>
            </div>

            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#444', fontStyle: 'italic', marginBottom: '30px' }}>
              "{testimonials[activeIndex].text}"
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
                onClick={() => setActiveIndex(index)}
                style={{
                  width: activeIndex === index ? '30px' : '10px',
                  height: '10px',
                  borderRadius: '10px',
                  backgroundColor: activeIndex === index ? 'var(--primary-orange)' : '#ddd',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
