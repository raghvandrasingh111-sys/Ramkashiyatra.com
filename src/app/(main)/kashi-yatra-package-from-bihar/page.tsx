import { Metadata } from 'next';
import { packages } from '@/data/packages';
import PackageCard from '@/components/PackageCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Kashi Yatra Package from Bihar | Best Tour Packages | Ram Kashi Yatra',
  description: 'Book your Kashi Yatra Package from Bihar. Easy travel arrangements from Patna and other cities to Kashi and Ayodhya with guided darshan.',
  keywords: ['kashi yatra package from bihar', 'varanasi tour from bihar', 'ayodhya tour package from bihar'],
};

export default function BiharLocationLanding() {
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
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Kashi Yatra Package from Bihar</h1>
        <p style={{ fontSize: '1.2rem' }}>Sacred Journey Arrangements for the Land of Buddha's Enlightenment</p>
      </section>

      <div className="container section-padding">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Tour Packages', href: '/tour-packages' },
          { label: 'From Bihar', href: '/kashi-yatra-package-from-bihar' }
        ]} />

        <div style={{ marginTop: '50px' }}>
          <div style={{ marginBottom: '40px', lineHeight: '1.8', color: '#444' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Looking for a **Kashi Yatra Package from Bihar**? We offer specialized tour packages for pilgrims from Bihar, providing easy transport, comfortable stays, and spiritual guidance throughout your journey.</p>
          </div>

          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Top Packages for Bihar Devotees</h2>
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
