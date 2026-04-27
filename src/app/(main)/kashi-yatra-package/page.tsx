import { Metadata } from 'next';
import { packages } from '@/data/packages';
import PackageCard from '@/components/PackageCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Kashi Yatra Package | Varanasi Tour Package with Ganga Aarti',
  description: 'Book the best Kashi Yatra package. Includes Kashi Vishwanath Temple darshan, Ganga Aarti, boat ride, and expert guided tours in Varanasi.',
  keywords: ['kashi yatra package', 'varanasi tour package', 'kashi darshan package cost'],
};

export default function KashiYatraLanding() {
  const kashiPackages = packages.filter(p => 
    p.location.toLowerCase().includes('varanasi') || 
    p.name.toLowerCase().includes('varanasi') ||
    p.name.toLowerCase().includes('kashi')
  );

  return (
    <main style={{ paddingTop: '100px' }}>
      <section style={{
        height: '40vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/destinations/varanasi.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Kashi Yatra Package</h1>
        <p style={{ fontSize: '1.2rem' }}>Experience the spiritual essence of Varanasi with our Kashi Yatra Package.</p>
      </section>

      <div className="container section-padding">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Tour Packages', href: '/tour-packages' },
          { label: 'Kashi Yatra', href: '/kashi-yatra-package' }
        ]} />

        <div style={{ marginTop: '50px' }}>
          <div style={{ marginBottom: '40px', lineHeight: '1.8', color: '#444' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Known as the city of Lord Shiva, Kashi is one of the holiest places in India. Our package includes Kashi Vishwanath Temple darshan, Ganga Aarti, boat ride, and visits to famous ghats. We ensure a smooth and comfortable यात्रा with hotel, transport, and guided tours.</p>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Detailed Itinerary</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><strong>Day 1:</strong> Arrival + Ganga Aarti</li>
              <li style={{ marginBottom: '10px' }}><strong>Day 2:</strong> Temple Darshan + Local Sightseeing</li>
              <li style={{ marginBottom: '10px' }}><strong>Day 3:</strong> Departure</li>
            </ul>
          </div>

          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Our Best Selling Kashi Yatra Packages</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {kashiPackages.map((pkg) => (
              <PackageCard key={pkg.slug} {...pkg} title={pkg.name} href={`/tour-packages/${pkg.slug}`} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
