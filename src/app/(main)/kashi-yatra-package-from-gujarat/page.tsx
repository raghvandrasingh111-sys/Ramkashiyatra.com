import { Metadata } from 'next';
import { packages } from '@/data/packages';
import PackageCard from '@/app/components/PackageCard';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { buildSeo } from '@/lib/seo';

export const metadata: Metadata = buildSeo({
  title: 'Kashi Yatra Package from Gujarat  | Ahmedabad Surat Vadodara to Varanasi Ayodhya',
  description: 'Best Kashi Yatra Package from Gujarat  — Ahmedabad, Surat, Vadodara, Rajkot to Varanasi & Ayodhya with VIP Ram Mandir darshan, Kashi Vishwanath Sugam Darshan, Ganga Aarti and Triveni Sangam Snan. Sattvic meals, hotel + AC cab + spiritual guide included.',
  path: '/kashi-yatra-package-from-gujarat',
  keywords: [
    'kashi yatra package from gujarat',
    'kashi yatra package from ahmedabad',
    'kashi yatra package from surat',
    'kashi yatra package from vadodara',
    'kashi yatra package from rajkot',
    'ayodhya tour package from gujarat',
    'varanasi tour package from gujarat',
    'gujarat to varanasi spiritual tour',
    'gujarat to ayodhya tour package',
  ],
});

export default function GujaratLocationLanding() {
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
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Kashi Yatra Package from Gujarat</h1>
        <p style={{ fontSize: '1.2rem' }}>Spiritual Pilgrimage Arrangements for Devotees from Gujarat</p>
      </section>

      <div className="container section-padding">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Tour Packages', href: '/tour-packages' },
          { label: 'From Gujarat', href: '/kashi-yatra-package-from-gujarat' }
        ]} />

        <div style={{ marginTop: '50px' }}>
          <div style={{ marginBottom: '40px', lineHeight: '1.8', color: '#444' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Plan your **Kashi Yatra Package from Gujarat** with us. We understand the unique requirements of pilgrims from Gujarat and offer tailored services for a divine journey to Kashi Vishwanath and Ram Janmabhoomi.</p>
          </div>

          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Recommended Packages for Gujarat Travelers</h2>
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
