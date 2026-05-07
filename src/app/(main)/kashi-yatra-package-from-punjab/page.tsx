import { Metadata } from 'next';
import { packages } from '@/data/packages';
import PackageCard from '@/app/components/PackageCard';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { buildSeo } from '@/lib/seo';

export const metadata: Metadata = buildSeo({
  title: 'Kashi Yatra Package from Punjab 2026 | Amritsar Ludhiana Chandigarh to Varanasi Ayodhya',
  description: 'Premium Kashi Yatra Package from Punjab 2026 — Amritsar, Ludhiana, Chandigarh, Jalandhar to Varanasi & Ayodhya with VIP Ram Mandir darshan, Kashi Vishwanath Sugam Darshan and Ganga Aarti. Train + flight options, hotel + cab + sattvic meals. Best price guaranteed.',
  path: '/kashi-yatra-package-from-punjab',
  keywords: [
    'kashi yatra package from punjab',
    'kashi yatra package from amritsar',
    'kashi yatra package from ludhiana',
    'kashi yatra package from chandigarh',
    'ayodhya tour package from punjab',
    'varanasi tour package from punjab',
    'punjab to varanasi spiritual tour',
    'punjab to ayodhya tour package',
  ],
});

export default function PunjabLocationLanding() {
  const localPackages = packages.filter(p => 
    p.name.toLowerCase().includes('ayodhya') || p.location.toLowerCase().includes('varanasi')
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
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Kashi Yatra Package from Punjab</h1>
        <p style={{ fontSize: '1.2rem' }}>Complete Spiritual Arrangements from Punjab to the Holy Cities</p>
      </section>

      <div className="container section-padding">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Tour Packages', href: '/tour-packages' },
          { label: 'From Punjab', href: '/kashi-yatra-package-from-punjab' }
        ]} />

        <div style={{ marginTop: '50px' }}>
          <div style={{ marginBottom: '40px', lineHeight: '1.8', color: '#444' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Looking for a **Kashi Yatra Package from Punjab**? We provide complete travel arrangements from Punjab to Varanasi and Ayodhya. Our package includes train/flight options, hotel stay, and guided tours for a hassle-free यात्रा.</p>
          </div>

          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Recommended Packages for Travelers from Punjab</h2>
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
