"use client";

import { packages } from '@/data/packages';
import PackageCard from '@/components/PackageCard';

export default function TourPackages() {
  const allPackages = packages.map(pkg => ({
    image: pkg.image,
    duration: pkg.duration,
    location: pkg.location,
    title: pkg.name,
    href: `/tour-packages/${pkg.slug}`
  }));

  return (
    <main>
      
      {/* Banner */}
      <section style={{
        height: '45vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632.png.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        paddingTop: '80px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Tour Packages</h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'normal', opacity: '0.9' }}>Explore the Spiritual Essence of Uttar Pradesh</h2>
      </section>

      {/* Packages Grid */}
      <section className="section-padding bg-light" style={{ padding: '80px 5%' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '40px' 
          }}>
            {allPackages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
