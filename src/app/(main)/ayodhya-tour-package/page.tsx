import { Metadata } from 'next';
import { packages } from '@/data/packages';
import PackageCard from '@/app/components/PackageCard';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { buildSeo } from '@/lib/seo';

export const metadata: Metadata = buildSeo({
  title: 'Ayodhya Tour Package  | Shri Ram Mandir Darshan Package · Best Price',
  description: 'Best Ayodhya Tour Package  with priority Shri Ram Janmabhoomi Mandir darshan, Hanuman Garhi, Kanak Bhawan and evening Sarayu Aarti. Hotel + cab + meals + expert spiritual guide. Book Ayodhya Ram Mandir tour from Lucknow, Varanasi or any city in India.',
  path: '/ayodhya-tour-package',
  keywords: [
    'ayodhya tour package',
    'ayodhya tour package ',
    'ayodhya ram mandir tour package price',
    'ram mandir darshan tour package',
    'ayodhya ram janmabhoomi tour',
    'ayodhya tour package from lucknow',
    'ayodhya tour package from delhi',
    'ayodhya tour package from varanasi',
    '2 nights 3 days ayodhya tour package',
    'ayodhya tour package with ram mandir darshan',
  ],
});

export default function AyodhyaTourLanding() {
  const ayodhyaPackages = packages.filter(p => 
    p.location.toLowerCase().includes('ayodhya') || 
    p.name.toLowerCase().includes('ayodhya')
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
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Ayodhya Tour Package</h1>
        <p style={{ fontSize: '1.2rem' }}>Pilgrimage to the divine birthplace of Lord Rama</p>
      </section>

      <div className="container section-padding">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Tour Packages', href: '/tour-packages' },
          { label: 'Ayodhya Tours', href: '/ayodhya-tour-package' }
        ]} />

        <div style={{ marginTop: '50px' }}>
          <div style={{ marginBottom: '40px', lineHeight: '1.8', color: '#444' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Visit the sacred birthplace of Lord Ram with our Ayodhya Tour Package. This package offers a peaceful and well-organized यात्रा covering Ram Mandir, Hanuman Garhi, and Saryu Aarti. We provide complete arrangements including hotel stay, transport, and guided darshan.</p>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Tour Highlights:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><i className="fas fa-check" style={{ color: 'var(--primary-orange)', marginRight: '10px' }}></i> Ram Mandir Darshan</li>
              <li style={{ marginBottom: '10px' }}><i className="fas fa-check" style={{ color: 'var(--primary-orange)', marginRight: '10px' }}></i> Hanuman Garhi</li>
              <li style={{ marginBottom: '10px' }}><i className="fas fa-check" style={{ color: 'var(--primary-orange)', marginRight: '10px' }}></i> Saryu River Aarti</li>
            </ul>
          </div>

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
