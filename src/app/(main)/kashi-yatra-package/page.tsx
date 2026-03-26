import { Metadata } from 'next';
import { packages } from '@/data/packages';
import PackageCard from '@/components/PackageCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Kashi Yatra Package 2026 | Varanasi Tour Booking | Ram Kashi Yatra',
  description: 'Book the best Kashi Yatra package for 2026. Explore Varanasi spiritual ghats, Kashi Vishwanath temple, and Sarnath with our expert-led tour packages.',
  keywords: ['kashi yatra package', 'varanasi tour packages', 'kashi darshan package cost'],
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
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://www.ramkashiyatra.com/wp-content/uploads/Rectangle-5632.png.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Kashi Yatra Packages</h1>
        <p style={{ fontSize: '1.2rem' }}>Experience the eternal divinity of the world's oldest living city</p>
      </section>

      <div className="container section-padding">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Tour Packages', href: '/tour-packages' },
          { label: 'Kashi Yatra', href: '/kashi-yatra-package' }
        ]} />

        <div style={{ marginTop: '50px' }}>
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
