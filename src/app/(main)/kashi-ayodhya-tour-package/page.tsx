import { Metadata } from 'next';
import { packages } from '@/data/packages';
import PackageCard from '@/app/components/PackageCard';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { buildSeo } from '@/lib/seo';

export const metadata: Metadata = buildSeo({
  title: 'Kashi Ayodhya Tour Package 2026 | 3-5 Day Spiritual Pilgrimage · Best Price',
  description: 'Book the best Kashi Ayodhya tour package 2026 — 3 to 5 day combined Varanasi + Ayodhya itineraries with Shri Ram Mandir darshan, Kashi Vishwanath VIP Sugam Darshan, Ganga Aarti and luxury hotels. Perfect for families, seniors and group travel. Best price guaranteed.',
  path: '/kashi-ayodhya-tour-package',
  keywords: [
    'kashi ayodhya tour package',
    'kashi ayodhya tour package 3 days',
    'kashi ayodhya tour package 4 days',
    'kashi ayodhya tour package 5 days',
    'varanasi ayodhya tour package',
    'kashi ayodhya prayagraj tour package',
    'spiritual tour india kashi ayodhya',
    'best kashi ayodhya tour operator',
    'luxury kashi ayodhya pilgrimage',
  ],
});

export default function KashiAyodhyaLanding() {
  const combinedPackages = packages.filter(p => 
    (p.location.toLowerCase().includes('varanasi') || p.location.toLowerCase().includes('ayodhya')) &&
    p.name.toLowerCase().includes('ayodhya')
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
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Kashi Ayodhya Tour Package</h1>
        <p style={{ fontSize: '1.2rem' }}>The ultimate spiritual journey through India's holiest cities</p>
      </section>

      <div className="container section-padding">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Tour Packages', href: '/tour-packages' },
          { label: 'Kashi Ayodhya Packages', href: '/kashi-ayodhya-tour-package' }
        ]} />

        <div style={{ marginTop: '50px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Multi-City Spiritual Circuit Packages</h2>
          <p style={{ marginBottom: '30px', color: '#666', lineHeight: '1.6', maxWidth: '800px' }}>
            Our combined **Kashi Ayodhya tour packages** offer a seamless pilgrimage experience covering the divine highlights of Uttar Pradesh. From the ancient Ghats of Varanasi to the grand Ram Mandir in Ayodhya, we ensure every detail of your spiritual journey is handled with care. 
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {combinedPackages.map((pkg) => (
              <PackageCard key={pkg.slug} {...pkg} title={pkg.name} href={`/tour-packages/${pkg.slug}`} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
