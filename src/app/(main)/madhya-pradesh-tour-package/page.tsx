import { Metadata } from 'next';
import { packages } from '@/data/packages';
import PackageCard from '@/app/components/PackageCard';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { buildSeo } from '@/lib/seo';

export const metadata: Metadata = buildSeo({
  title: 'Madhya Pradesh Tour Package | Ujjain, Omkareshwar & Wildlife Tours',
  description: 'Book premium Madhya Pradesh Tour Packages. Explore Mahakaleshwar & Omkareshwar Jyotirlinga, Khajuraho temples, Pachmarhi hills, Gwalior Fort, and wildlife safaris in Kanha & Bandhavgarh. Customizable itineraries with hotels, transport, and guided darshan.',
  path: '/madhya-pradesh-tour-package',
  keywords: [
    'madhya pradesh tour package',
    'mp tourism package',
    'ujjain omkareshwar tour package',
    'mahakal lok corridor ujjain',
    'khajuraho temple tour',
    'kanha bandhavgarh safari package',
    'pachmarhi tour package',
    'gwalior orchha tour',
    'madhya pradesh pilgrimage tour'
  ],
});

export default function MadhyaPradeshTourLanding() {
  const mpPackageSlugs = [
    'malwa-bhopal-heritage-yatra-6d',
    'grand-madhya-pradesh-heritage-tour-7d',
    'quick-ujjain-omkareshwar-indore-yatra-3d',
    'wild-satpura-khajuraho-heritage-trail-9d',
    'forts-temples-bundelkhand-gwalior-orchha-khajuraho-6d',
    'madhya-pradesh-tiger-safari-special-6d',
    'pachmarhi-wildlife-nature-special-5d',
    'kanha-wildlife-jabalpur-tour-5d',
    'madhya-pradesh-pilgrimage-ujjain-omkareshwar-maheshwar-5d',
    'heart-of-heritage-gwalior-jhansi-orchha-4d',
    'wild-tiger-trail-bandhavgarh-panna-khajuraho-6d'
  ];

  const mpPackages = packages.filter(p => mpPackageSlugs.includes(p.slug));

  return (
    <main style={{ paddingTop: '100px' }}>
      <section style={{
        height: '45vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("/images/destinations/madhya-pradesh.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 20px'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px', fontWeight: '700', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>Madhya Pradesh Tour Packages</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '800px', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>Discover the Heart of Incredible India - Spiritual Jyotirlingas, Majestic Forts, Scenic Hills & Untamed Wildlife</p>
      </section>

      <div className="container section-padding">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Tour Packages', href: '/tour-packages' },
          { label: 'Madhya Pradesh Tours', href: '/madhya-pradesh-tour-package' }
        ]} />

        <div style={{ marginTop: '50px' }}>
          <div style={{ marginBottom: '40px', lineHeight: '1.8', color: '#444' }}>
            <p style={{ fontSize: '1.15rem', marginBottom: '20px' }}>
              Explore the rich heritage and spiritual essence of central India with our customized <strong>Madhya Pradesh Tour Packages</strong>. 
              From the sacred chants at <strong>Ujjain Mahakaleshwar</strong> and <strong>Omkareshwar Jyotirlinga</strong> to the intricate carvings of 
              <strong> Khajuraho temples</strong>, the royal history of <strong>Gwalior Fort & Mandu</strong>, and the thrilling tiger safaris in 
              <strong> Kanha, Bandhavgarh, and Satpura</strong>—Madhya Pradesh offers a diverse range of wonders for every traveler.
            </p>
            
            <h3 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#111', fontWeight: '600' }}>Tour Highlights:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '25px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-om" style={{ color: 'var(--primary-orange)', marginRight: '10px', fontSize: '1.2rem' }}></i>
                <span>Mahakal Lok Corridor & Ujjain Darshan</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary-orange)', marginRight: '10px', fontSize: '1.1rem' }}></i>
                <span>Omkareshwar & Mamleshwar Jyotirlinga</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary-orange)', marginRight: '10px', fontSize: '1.1rem' }}></i>
                <span>UNESCO World Heritage Khajuraho Sculptures</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary-orange)', marginRight: '10px', fontSize: '1.1rem' }}></i>
                <span>Historic Mandu & Gwalior Fort Sightseeing</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-paw" style={{ color: 'var(--primary-orange)', marginRight: '10px', fontSize: '1.1rem' }}></i>
                <span>Tiger Safaris in Kanha & Bandhavgarh</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary-orange)', marginRight: '10px', fontSize: '1.1rem' }}></i>
                <span>Scenic Bee Falls & Viewpoints in Pachmarhi</span>
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: '2.2rem', marginBottom: '35px', fontWeight: '700', color: '#111', borderBottom: '3px solid var(--primary-orange)', display: 'inline-block', paddingBottom: '8px' }}>Exclusive Madhya Pradesh Tour Packages</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            marginTop: '20px'
          }}>
            {mpPackages.map((pkg) => (
              <PackageCard key={pkg.slug} {...pkg} title={pkg.name} href={`/tour-packages/${pkg.slug}`} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
