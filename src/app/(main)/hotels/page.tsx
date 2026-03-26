"use client";

import React, { useState, useEffect } from 'react';
import CityHotelCarousel from '@/components/CityHotelCarousel';

export default function Hotels() {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = [
    "https://varanasiayodhya.com/wp-content/uploads/image-3.png-scaled.webp",
    "https://varanasiayodhya.com/wp-content/uploads/Hero-1-scaled.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const ayodhyaHotels = [
    { name: "Park Inn by Radisson Ayodhya", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Hotels-in-varanasi-ayodhya1-qnblej0cgo06ljsy94pcdme2p4wt0jit0aje5j22xk.webp" },
    { name: "The Ramayana Hotel", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Hotels-in-varanasi-ayodhya3-qnbleltv1641kdousnx833oghaiwnmu00ohulcxwew.webp" },
    { name: "Tent City Ayodhya Suryu", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Tent-City-Ayodhya-Suryu-qnbpamub5nst54ai4oxf19liaqcecdqgxr6vcbbjh4.jpg" },
    { name: "Clarks Inn Express", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Hotels-in-varanasi-ayodhya4-qnblekw0uc2r8rq7y5ililwzvwnjfxq9ojud42zal4.webp" },
    { name: "Ayodhya Haat Luxury Cottage", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Hotels-in-varanasi-ayodhya2-qnblejy6ni1gx5rl3n3yy45jais688mjcf6vmt0orc.webp" },
    { name: "Royal Heritage Hotel & Resort", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Hotels-in-varanasi-ayodhya5-qnblenpjeu6m7lm4hoqh837do29n311goxstjwv42g.webp" }
  ];

  const varanasiHotels = [
    { name: "Taj Nadesar Palace", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Varanasi-hotel2-qnbln8yfvbxybb4xbweqif613txefg55jgfkfy4l7c.webp" },
    { name: "Taj Ganges Varanasi", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Varanasi-hotel1-qnbln9wa25z8mx3k6etd2wxhp7srn58vvl31x83714.webp" },
    { name: "Double Tree by Hilton", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Varanasi-hotel5-qnblnbryfu1ta50tvfmm7wgevzji2jgcjue0vs0eoo.webp" },
    { name: "Ramada By Whyndham", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Ramada-Plaza-JHU-qnbo7pcy3oiaaiu8gd4o9l98l884jo6ol2hwsr1j6g.jpg" },
    { name: "Brijrama Palace", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/251112110-qnbo7r8mhckuxqri5dxxeks5rzyuz2e59bsvrayqu0.jpg" },
    { name: "The Clarks Varanasi", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/The-Clarks-Varanasi-qnbodiyyfqh87kdrgdqh7md125iz86atpvz6tgeqmw.jpg" },
    { name: "Tree Of Life Resort and Hotels", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Tree-Of-Life-Resort-and-Hotel-qnboh8g1e7jy06zvszfi1oohev93l70pk8m4yqwu3c.jpg" },
    { name: "Om Vilas", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Om-Vilas-qnbojosv8mwwbjfjh1mfk2dt935loqrh8dxs2r9tug.jpg" }
  ];

  const lucknowHotels = [
    { name: "Hotel Taj Mahal", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Hotel-Taj-Mahal-qnbon6r8ofpbjacl1k2fu6lkupwsc6nidpcudu32oo.jpg" },
    { name: "Hyatt Regency", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Hyatt-Regency-qnbooq7pvnt8ka411q1ffalrwgbfybro9buhp5suhk.jpg" },
    { name: "The Centrum", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/The-Centrum-qnboqfb87w4vixna4yg6fd6qihyauni85q91w5a994.jpg" },
    { name: "Novotel", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Novotel-qnbostsdonf9725o3ztusrd55y42it1j5m9q1lq1co.jpg" },
    { name: "Fairfeild By Marriot", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Fairfeild-by-marriot-qnbowowhs4poxcjljnyn1s9d2z2e60dt0qtl2jzrrs.jpg" },
    { name: "Hilton Garden Inn", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Hilton-Garden-Inn-qnbp2xjx5j9805ha3v2h3pkj22b49o5njmqmroqogo.jpg" },
    { name: "Ramada Plaza", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Ramada-Plaza-qnbp5dwqzym6bhwxrx9em39uwa7md7wf7s29vp3o7s.jpg" }
  ];

  const prayagrajHotels = [
    { name: "The legend inn", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/The-legend-inn-qnbpkoq68vk7azoufjcs789z02spnun4nict3ueyxk.jpg" },
    { name: "Badi Kothi by Welcome heritage", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Badi-Kothi-qnbplv0wsf63tfzekjmztflpqf08a8b1tbpnpao95k.jpg" },
    { name: "Hotel Kanha Shyam", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Hotel-kanha-shyam-qnbpp2n251kdhhbgtfm3u4fest6dl02197ydqbwtw8.jpg" },
    { name: "Hotel Shree Kanha Residency", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Hotel-Shree-kanha-residency-qnbpryz57nj7a73ww6pp0w3kqkw4bek8nkda01m4pk.jpg" },
    { name: "Hotel Millenium Inn", image: "https://varanasiayodhya.com/wp-content/uploads/elementor/thumbs/Hotel-Millenium-Inn-qnbpu6vfckkkp1vuxn8zetxr8bybhodfajtjskbo0o.jpg" }
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
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>
            Find Your Perfect Stay<br />Book Hotels Hassle-Free!
          </h1>
          <a
            href="#book"
            style={{
              backgroundColor: 'var(--primary-orange)',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '30px',
              fontSize: '1.2rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'transform 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Partners Info Image */}
      <section style={{ padding: '0' }}>
        <img
          src="https://varanasiayodhya.com/wp-content/uploads/Info-scaled.webp"
          alt="Info"
          style={{ width: '100%', height: 'auto' }}
        />
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
              At our hotels is more than just a service – it's a commitment to exceeding your every expectation. Experience the epitome of luxury and refinement with our top-notch amenities, where every moment is crafted with your utmost satisfaction in mind.
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
              <img src="https://varanasiayodhya.com/wp-content/uploads/Group-10586.png" alt="Reviews" style={{ height: '50px' }} />
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
            backgroundImage: 'url("https://varanasiayodhya.com/wp-content/uploads/2024/02/booking-bg.jpg")', // Placeholder bg
            backgroundSize: 'cover',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: -1, borderRadius: '20px' }}></div>
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
              <button style={{ gridColumn: 'span 2', padding: '15px', borderRadius: '30px', border: 'none', backgroundColor: 'var(--primary-orange)', color: 'white', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' }}>BOOK NOW</button>
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
