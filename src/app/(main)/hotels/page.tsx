"use client";

import React, { useState, useEffect } from 'react';
import CityHotelCarousel from '@/components/CityHotelCarousel';

export default function Hotels() {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = [
    "/images/destinations/varanasi.webp",
    "/images/destinations/ayodhya.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const ayodhyaHotels = [
    { name: "Park Inn by Radisson Ayodhya", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop" },
    { name: "The Ramayana Hotel", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop" },
    { name: "Tent City Ayodhya Suryu", image: "https://images.unsplash.com/photo-1504652517000-ae1068c7023f?w=600&h=400&fit=crop" },
    { name: "Clarks Inn Express", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop" },
    { name: "Ayodhya Haat Luxury Cottage", image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=400&fit=crop" },
    { name: "Royal Heritage Hotel & Resort", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop" }
  ];

  const varanasiHotels = [
    { name: "Taj Nadesar Palace", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop" },
    { name: "Taj Ganges Varanasi", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop" },
    { name: "Double Tree by Hilton", image: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?w=600&h=400&fit=crop" },
    { name: "Ramada By Whyndham", image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=400&fit=crop" },
    { name: "Brijrama Palace", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop" },
    { name: "The Clarks Varanasi", image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=600&h=400&fit=crop" },
    { name: "Tree Of Life Resort and Hotels", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&h=400&fit=crop" },
    { name: "Om Vilas", image: "https://images.unsplash.com/photo-1600011689032-9b5b tried8da27e4?w=600&h=400&fit=crop" }
  ];

  const lucknowHotels = [
    { name: "Hotel Taj Mahal", image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop" },
    { name: "Hyatt Regency", image: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&h=400&fit=crop" },
    { name: "The Centrum", image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=600&h=400&fit=crop" },
    { name: "Novotel", image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&h=400&fit=crop" },
    { name: "Fairfeild By Marriot", image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&h=400&fit=crop" },
    { name: "Hilton Garden Inn", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop" },
    { name: "Ramada Plaza", image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=600&h=400&fit=crop" }
  ];

  const prayagrajHotels = [
    { name: "The legend inn", image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop" },
    { name: "Badi Kothi by Welcome heritage", image: "https://images.unsplash.com/photo-1587213811864-46e59f6764b4?w=600&h=400&fit=crop" },
    { name: "Hotel Kanha Shyam", image: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?w=600&h=400&fit=crop" },
    { name: "Hotel Shree Kanha Residency", image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&h=400&fit=crop" },
    { name: "Hotel Millenium Inn", image: "https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=600&h=400&fit=crop" }
  ];

  return (
    <main style={{ backgroundColor: '#fff' }}>

      {/* Hero Slideshow */}
      <section style={{ height: '90vh', position: 'relative', overflow: 'hidden' }}>
        {heroImages.map((img, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: heroIndex === i ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              zIndex: 1
            }}
          />
        ))}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0 5%'
        }}>
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2', opacity: 0, animation: 'fadeInUp 0.8s ease forwards 0.3s' }}>
            Book Best Hotels in Varanasi & Ayodhya
          </h1>
          <a
            href="#book"
            className="btn-primary btn-glow"
            style={{
              padding: '15px 40px',
              borderRadius: '30px',
              fontSize: '1.2rem',
              opacity: 0,
              animation: 'fadeInUp 0.8s ease forwards 0.6s'
            }}
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Feature List */}
      <section style={{ padding: '80px 5%', backgroundColor: '#fff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '30px' }}>Why You Should Stay Here</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', gridColumn: 'span 2' }}>
            {[
              { title: "Cab Transfer", desc: "Seamless transfers ensuring comfort and convenience.", icon: "fa-taxi" },
              { title: "Hotel Booking", desc: "Discover top-notch accommodations tailored to your preferences.", icon: "fa-hotel" },
              { title: "Expert Guide", desc: "Knowledgeable guides enhancing your travel experience.", icon: "fa-user-tie" },
              { title: "Meals Provided", desc: "Delicious breakfast, lunch, and dinner options available.", icon: "fa-coffee" }
            ].map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px' }}>
                <div style={{
                  flexShrink: 0,
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem'
                }}>
                  <i className={`fas ${f.icon}`}></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>{f.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Hotel Carousels */}
      <CityHotelCarousel title="Popular Hotels in Ayodhya" hotels={ayodhyaHotels} />

      {/* Marquee */}
      <section style={{ padding: '40px 5%' }}>
        <div className="marquee-wrapper" style={{
          border: '2px solid black',
          borderRadius: '25px',
          padding: '10px',
          overflow: 'hidden',
          backgroundColor: '#fff',
          boxShadow: '4px 4px 0 #000'
        }}>
          <div className="marquee-content" style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'marquee 20s linear infinite' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: '800', marginRight: '50px' }}>40% Off On Hotel Booking ✵ 40% Off On Hotel Booking ✵ 40% Off On Hotel Booking ✵ 40% Off On Hotel Booking ✵ 40% Off On Hotel Booking</span>
            <span style={{ fontSize: '1.5rem', fontWeight: '800', marginRight: '50px' }}>40% Off On Hotel Booking ✵ 40% Off On Hotel Booking ✵ 40% Off On Hotel Booking ✵ 40% Off On Hotel Booking ✵ 40% Off On Hotel Booking</span>
          </div>
        </div>
      </section>

      <CityHotelCarousel title="Popular Hotels in Varanasi" hotels={varanasiHotels} />

      {/* Amenities Section with Counters */}
      <section style={{ padding: '80px 5%', backgroundColor: '#f9f9f9' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>We Provide Hotel With <br />Top-Notch Amenities.</h2>
            <p style={{ color: '#555', lineHeight: '1.8' }}>
              At our hotels is more than just a service – it&apos;s a commitment to exceeding your every expectation. Experience the epitome of luxury and refinement with our top-notch amenities, where every moment is crafted with your utmost satisfaction in mind.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px' }}>
              {[
                { label: "Cities", count: "66+" },
                { label: "Hotels", count: "100+" },
                { label: "Rooms", count: "350+" },
                { label: "Happy Guests", count: "10k" }
              ].map((c, i) => (
                <div key={i} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                  <h4 style={{ color: 'var(--primary-orange)', fontSize: '2rem', fontWeight: 'bold' }}>{c.count}</h4>
                  <p style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{c.label}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem'
              }}>
                <i className="fas fa-star"></i>
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>4.8 Rated</h3>
                <p style={{ margin: 0, color: '#888' }}>Around The Globe</p>
              </div>
            </div>
          </div>

          <div id="book" style={{
            backgroundColor: '#111',
            padding: '40px',
            borderRadius: '20px',
            color: 'white',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("/images/destinations/varanasi.webp")',
            backgroundSize: 'cover',
            position: 'relative',
            zIndex: 1
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>Make your reservation</h2>
            <form style={{ display: 'grid', gap: '20px' }}>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ color: 'var(--primary-orange)', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase' }}>City</label>
                <select style={{ width: '100%', padding: '15px', borderRadius: '30px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}>
                  <option>Lucknow</option>
                  <option>Varanasi</option>
                  <option>Ayodhya</option>
                  <option>Prayagraj</option>
                </select>
              </div>
              <div>
                <label style={{ color: 'var(--primary-orange)', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Check In</label>
                <input type="date" style={{ width: '100%', padding: '15px', borderRadius: '30px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }} />
              </div>
              <div>
                <label style={{ color: 'var(--primary-orange)', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Check Out</label>
                <input type="date" style={{ width: '100%', padding: '15px', borderRadius: '30px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }} />
              </div>
              <div>
                <label style={{ color: 'var(--primary-orange)', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Rooms</label>
                <input type="number" defaultValue="1" style={{ width: '100%', padding: '15px', borderRadius: '30px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }} />
              </div>
              <div>
                <label style={{ color: 'var(--primary-orange)', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Adults</label>
                <input type="number" defaultValue="1" style={{ width: '100%', padding: '15px', borderRadius: '30px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }} />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <input type="text" placeholder="Name" style={{ width: '100%', padding: '15px', borderRadius: '30px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }} />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <input type="tel" placeholder="Phone" style={{ width: '100%', padding: '15px', borderRadius: '30px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }} />
              </div>
              <button className="btn-primary" style={{ gridColumn: 'span 2', padding: '15px', borderRadius: '30px', fontSize: '1.1rem' }}>BOOK NOW</button>
            </form>
          </div>
        </div>
      </section>

      <CityHotelCarousel title="Popular Hotels in Lucknow" hotels={lucknowHotels} />
      <CityHotelCarousel title="Popular Hotels in Prayagraj" hotels={prayagrajHotels} />


      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}
