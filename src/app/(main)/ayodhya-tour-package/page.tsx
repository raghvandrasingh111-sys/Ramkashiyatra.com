import { Metadata } from 'next';
import { packages } from '@/data/packages';
import PackageCard from '@/components/PackageCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Ayodhya Tour Package Booking 2026 | Ram Mandir Darshan Price | Ram Kashi Yatra',
  description: 'Affordable Ayodhya tour package booking for 2026. Get best price for Ram Mandir Darshan, Hanuman Garhi, and Saryu Aarti with expert guides.',
  keywords: ['ayodhya tour package booking', 'ayodhya tour package price', 'ayodhya ram mandir tour package price'],
};

export default function AyodhyaTourLanding() {
  const ayodhyaPackages = packages.filter(p => 
    p.location.toLowerCase().includes('ayodhya') || 
    p.name.toLowerCase().includes('ayodhya')
  );

  return (
    <main style={{ paddingTop: '100px' }}>
      <section style={{
        height: '40vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://www.ramkashiyatra.com/wp-content/uploads/Rectangle-5632-1.png-2-903x1024.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Ayodhya Tour Package Booking 2026</h1>
        <p style={{ fontSize: '1.2rem' }}>Pilgrimage to the divine birthplace of Lord Rama</p>
      </section>

      <div className="container section-padding">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Tour Packages', href: '/tour-packages' },
          { label: 'Ayodhya Tours', href: '/ayodhya-tour-package' }
        ]} />

        <div style={{ marginTop: '50px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Top Ayodhya Ram Mandir Packages</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {ayodhyaPackages.map((pkg) => (
              <PackageCard key={pkg.slug} {...pkg} title={pkg.name} href={`/tour-packages/${pkg.slug}`} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
