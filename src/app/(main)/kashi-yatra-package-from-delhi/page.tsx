import { Metadata } from 'next';
import { packages } from '@/data/packages';
import PackageCard from '@/components/PackageCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Kashi Yatra Package from Delhi | Best Tour Packages | Ram Kashi Yatra',
  description: 'Book the best Kashi Yatra Package from Delhi. Complete travel arrangements from Delhi to Varanasi and Ayodhya including hotel and guided darshan.',
  keywords: ['kashi yatra package from delhi', 'ayodhya tour package from delhi', 'varanasi tour package from delhi'],
};

export default function DelhiLocationLanding() {
  const localPackages = packages.filter(p => 
    p.name.toLowerCase().includes('ayodhya') || p.location.toLowerCase().includes('varanasi')
  );

  return (
    <main style={{ paddingTop: '100px' }}>
      <section style={{
        height: '40vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/destinations/ayodhya.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Kashi Yatra Package from Delhi</h1>
        <p style={{ fontSize: '1.2rem' }}>Hassle-free Spiritual Journey from the National Capital</p>
      </section>

      <div className="container section-padding">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Tour Packages', href: '/tour-packages' },
          { label: 'From Delhi', href: '/kashi-yatra-package-from-delhi' }
        ]} />

        <div style={{ marginTop: '50px' }}>
          <div style={{ marginBottom: '40px', lineHeight: '1.8', color: '#444' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Embark on the ultimate **Kashi Yatra Package from Delhi**. We offer seamless connectivity from New Delhi to Varanasi and Ayodhya, covering all major spiritual sites with premium comfort and expert on-ground support.</p>
          </div>

          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Top Rated Packages for Delhi Devotees</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {localPackages.map((pkg) => (
              <PackageCard key={pkg.slug} {...pkg} title={pkg.name} href={`/tour-packages/${pkg.slug}`} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
