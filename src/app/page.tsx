"use client";

import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageCard from '@/components/PackageCard';
import Link from 'next/link';
import HotelCarousel from '@/components/HotelCarousel';
import ApprovalCarousel from '@/components/ApprovalCarousel';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  const scrollRefs = useRef<HTMLDivElement[]>([]);

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

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el);
    }
  };

  const packages = [
    {
      image: "https://varanasiayodhya.com/wp-content/uploads/2024/02/ayodhya-temple.jpg",
      duration: "1N Ayodhya",
      location: "Ayodhya",
      title: "Ayodhya Tour Package (1N/2D)",
      oldPrice: "9,000",
      newPrice: "7,499",
      href: "/tour-packages"
    },
    {
      image: "https://varanasiayodhya.com/wp-content/uploads/2024/02/ayodhya-bangalore.jpg",
      duration: "2N Ayodhya",
      location: "Ayodhya",
      title: "Ayodhya Tour ex-Bangalore (2N/3D)",
      oldPrice: "35,000",
      newPrice: "22,999",
      href: "/tour-packages"
    },
    {
      image: "https://varanasiayodhya.com/wp-content/uploads/2024/01/varanasi-aarti.jpg",
      duration: "1N Varanasi | 1N Ayodhya",
      location: "Varanasi | Ayodhya",
      title: "Varanasi Ayodhya Tour (2N/3D)",
      oldPrice: "12,000",
      newPrice: "9,999",
      href: "/tour-packages"
    },
    {
      image: "https://varanasiayodhya.com/wp-content/uploads/2024/01/triveni-sangam.jpg",
      duration: "1N Varanasi | 1N Prayagraj | 1N Ayodhya",
      location: "Varanasi | Prayagraj | Ayodhya",
      title: "Varanasi Prayagraj Ayodhya Tour (3N/4D)",
      oldPrice: "16,000",
      newPrice: "11,999",
      href: "/tour-packages"
    }
  ];

  return (
    <main>
      <Navbar />
      
      {/* Hero Section with Video Background */}
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
        padding: '0 5%'
      }}>
        {/* Background Video Layer */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none'
        }}>
          <iframe 
            src="https://www.youtube.com/embed/rDsOi3MByCI?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=rDsOi3MByCI&start=10" 
            style={{
              width: '100vw',
              height: '56.25vw', // 16:9 Aspect Ratio
              minHeight: '100vh',
              minWidth: '177.77vh', // 16:9 Aspect Ratio
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover'
            }}
            frameBorder="0"
            allow="autoplay; encrypted-media"
          ></iframe>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)' // Overlay for readability
          }}></div>
        </div>

        <div ref={addToRefs} className="fade-in-up" style={{ zIndex: 1 }}>
           <p className="dancing-script" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Ayodhya • Varanasi • Prayagraj • Chitrakoot</p>
           <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px', lineHeight: 1.2 }}>
             Plan your Customized Ayodhya <br/> Varanasi Tour Packages with us
           </h1>
           <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '800px' }}>
             Embark on a transformative pilgrimage to Varanasi Ayodhya Prayagraj <br/> & immerse yourself into these timeless divine cities
           </p>
           <Link href="/enquire-now" className="btn-primary" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>Book Now</Link>
        </div>
      </section>

      {/* Partners Section (Hotels we work with) */}
      <HotelCarousel />

      {/* Intro Quote Section */}
      <section style={{ 
        padding: '100px 5%', 
        background: 'linear-gradient(90deg, #FFC219 0%, #F0A731 100%)',
        textAlign: 'center'
      }}>
        <div ref={addToRefs} className="fade-in-up container">
           <h2 style={{ fontSize: '2.4rem', fontWeight: '800', lineHeight: 1.3, color: 'var(--dark-text)' }}>
             Where the Ganges whispers and legends reside, Varanasi, Ayodhya unveils the essence of ancient heritage, intertwining the spiritual tapestries of two sacred cities.
           </h2>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding container" style={{ textAlign: 'center' }}>
        <div ref={addToRefs} className="fade-in-up">
          <p style={{ color: 'var(--primary-orange)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Welcome To Varanasi Ayodhya</p>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Experience the Spiritual Essence of UP</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: '#666' }}>
            Embark on a soul-stirring journey through the most sacred cities of India. From the ancient ghats of Varanasi to the divine birthplace of Lord Rama in Ayodhya, we provide curated travel experiences that blend spirituality with comfort.
          </p>
        </div>
      </section>

      {/* Service Icons */}
      <section style={{ padding: '80px 5%', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
            {[
              { icon: 'fas fa-taxi', title: 'Cab Transfer', desc: 'Seamless transfers ensuring comfort and convenience.' },
              { icon: 'fas fa-hotel', title: 'Hotel Booking', desc: 'Discover top-notch accommodations tailored to your preferences.' },
              { icon: 'fas fa-user-check', title: 'Expert Guide', desc: 'Knowledgeable guides enhancing your travel experience.' },
              { icon: 'fas fa-coffee', title: 'Meals', desc: 'Delicious meals served with care, complement your adventure.' }
            ].map((item, index) => (
              <div key={index} ref={addToRefs} className="fade-in-up" style={{ padding: '30px', borderRadius: '15px', backgroundColor: '#f9f9f9', transitionDelay: `${index * 0.1}s` }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--primary-orange)', marginBottom: '20px' }}>
                  <i className={item.icon}></i>
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
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
              "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632.png-1.webp",
              "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632-1.png-2-903x1024.webp",
              "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632-2.png-2-903x1024.webp",
              "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5634.png-1.webp"
            ].map((img, index) => (
              <div key={index} ref={addToRefs} className="fade-in-up" style={{ 
                height: '400px', 
                borderRadius: '20px', 
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transitionDelay: `${index * 0.1}s`
              }}>
                <img src={img} alt="Destination" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="zoom-hover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Icons */}
      <section style={{ padding: '60px 5%', backgroundColor: '#fff', borderTop: '1px solid #eee' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {[
              { title: 'Best Price Guarantee', desc: 'Get the best deals with our unbeatable price promise.' },
              { title: 'Easy & Quick Booking', desc: 'Effortless and swift bookings for your dream trip.' },
              { title: 'Customer Care 24/7', desc: 'Round-the-clock support ensuring your peace of mind.' }
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ 
                  backgroundColor: '#FFC219', 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <i className="fas fa-check" style={{ color: 'white' }}></i>
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

      {/* Travel Tips Videos */}
      <section className="section-padding container" style={{ backgroundColor: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
           <h2 ref={addToRefs} className="fade-in-up" style={{ fontSize: '2.5rem' }}>Must-Know Verified Travel Tips</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {[
              { id: "DCE2LNtSWpi", type: "reel" },
              { id: "DB6STThylM9", type: "reel" },
              { id: "DAa6baUyay_", type: "p" },
              { id: "DREVGCcEnv3", type: "p" }
            ].map((item, index) => (
              <div key={index} ref={addToRefs} className="fade-in-up" style={{ 
                borderRadius: '20px', 
                overflow: 'hidden', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                height: item.type === 'reel' ? '500px' : '400px',
                backgroundColor: '#f8f9fa'
              }}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.instagram.com/${item.type}/${item.id}/embed`} 
                  frameBorder="0" 
                  scrolling="no"
                  allowTransparency
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                ></iframe>
              </div>
            ))}
        </div>
      </section>

      <ApprovalCarousel />
      <Testimonials />

      {/* Om Namah Shivay Section */}
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
        {/* Background Video Layer */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none',
          backgroundColor: '#000'
        }}>
          {/* Preload Image to hide black screen/latency */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url("https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632.png.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
            opacity: 0.8
          }}></div>

          <iframe 
            src="https://www.youtube.com/embed/rDsOi3MByCI?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=rDsOi3MByCI&start=10&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1" 
            style={{
              width: '120vw',
              height: '67.5vw', // 16:9 of 120vw
              minHeight: '120vh',
              minWidth: '213.33vh',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) translateZ(0)',
              objectFit: 'cover',
              filter: 'brightness(0.7) contrast(1.1)',
              zIndex: 0
            }}
            frameBorder="0"
            allow="autoplay; encrypted-media"
          ></iframe>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
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

      <Footer />
    </main>
  );
}
