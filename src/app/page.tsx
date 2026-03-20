"use client";

import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageCard from '@/components/PackageCard';
import Link from 'next/link';
import HotelCarousel from '@/components/HotelCarousel';
import ApprovalCarousel from '@/components/ApprovalCarousel';
import Testimonials from '@/components/Testimonials';
import { packages as allTourPackages } from '@/data/packages';

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

  const featuredPackages = allTourPackages.slice(0, 4).map(pkg => ({
    image: pkg.image,
    duration: pkg.duration,
    location: pkg.location,
    title: pkg.name,
    href: `/tour-packages/${pkg.slug}`
  }));

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
                borderRadius: '20px', 
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transitionDelay: `${index * 0.1}s`
              }}>
                <img src={item.img} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="zoom-hover" />
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

      {/* Why Choose Us & Content Expansion */}
      <section className="section-padding" style={{ backgroundColor: '#f9fafb', padding: '100px 5%' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
            <div ref={addToRefs} className="fade-in-up">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '25px', color: '#1a1a1a' }}>Why Choose Luxury Trip India?</h2>
              <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.8', marginBottom: '20px' }}>
                At Luxury Trip India, we specialize in crafting the most immersive and **Customized Ayodhya Varanasi Tour Packages** tailored to your spiritual and logistical needs. Our team understands that a journey to the heart of Uttar Pradesh is more than just a vacation; it's a soul-stirring experience that connects you with centuries of heritage.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.8', marginBottom: '20px' }}>
                Whether you are looking for a quick 2-day trip or an extensive spiritual circuit, our **Ayodhya Varanasi Tour Packages** offer unmatched comfort, expert guides, and seamless transfers. We pride ourselves on our local knowledge, ensuring you witness the Ganga Aarti from the best vantage points and visit the most divine temples without the stress of planning.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Expert Local Guides', '24/7 On-Ground Support', 'Comfortable AC Vehicles', 'Handpicked Luxury Accommodations'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#1a1a1a', fontWeight: '600' }}>
                    <i className="fas fa-check-circle" style={{ color: 'var(--primary-orange)' }}></i> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div ref={addToRefs} className="fade-in-up" style={{ backgroundColor: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#1a1a1a' }}>Spiritual Highlights</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div>
                  <h4 style={{ color: 'var(--primary-orange)', fontWeight: '700', fontSize: '1.1rem' }}>Varanasi (Kashi)</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666', marginTop: '5px' }}>Experience the timeless rituals at Dashashwamedh Ghat and the serenity of <Link href="/tour-packages" style={{ color: 'inherit', textDecoration: 'underline' }}>Sarnath</Link> where Buddha preached his first sermon.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary-orange)', fontWeight: '700', fontSize: '1.1rem' }}>Ayodhya (Ram Janmabhoomi)</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666', marginTop: '5px' }}>Visit the grand <Link href="/tour-packages" style={{ color: 'inherit', textDecoration: 'underline' }}>Ram Mandir</Link>, Hanuman Garhi, and the holy banks of the Saryu River in the birthplace of Lord Rama.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary-orange)', fontWeight: '700', fontSize: '1.1rem' }}>Prayagraj (Sangam)</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666', marginTop: '5px' }}>Witness the sacred confluence of Ganga, Yamuna, and mythical Saraswati, a must-visit for every <Link href="/tour-packages" style={{ color: 'inherit', textDecoration: 'underline' }}>spiritual seeker</Link>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="section-padding" style={{ padding: '80px 5%' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 ref={addToRefs} className="fade-in-up" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
              <div key={index} ref={addToRefs} className="fade-in-up" style={{ borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#1a1a1a', display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--primary-orange)' }}>Q:</span> {faq.q}
                </h4>
                <div style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6', paddingLeft: '30px' }}>{faq.a}</div>
              </div>
            ))}
          </div>
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
