import { Metadata } from 'next';
import { packages } from '@/data/packages';
import PackageCard from '@/app/components/PackageCard';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { buildSeo } from '@/lib/seo';

export const metadata: Metadata = buildSeo({
  title: 'Varanasi Tour Package 2026 | 3 Days Kashi Itinerary · Best Price',
  description: 'Book Varanasi tour package 2026 from ₹5,975 onwards. 2N/3D and 3N/4D Kashi itineraries with Kashi Vishwanath VIP darshan, evening Ganga Aarti, Sarnath, Manikarnika & Dashashwamedh Ghats. Premium hotel + AC cab + breakfast + spiritual guide. Best price guaranteed.',
  path: '/varanasi-tour-package',
  keywords: [
    'varanasi tour package',
    'varanasi tour package cost',
    'varanasi tour package 2026',
    'varanasi 3 days itinerary',
    'kashi tour package price',
    'kashi trip cost per person',
    '2 nights 3 days varanasi tour',
    'varanasi sarnath tour package',
    'varanasi prayagraj tour package',
    'varanasi ayodhya tour package',
  ],
});

export default function VaranasiTourLanding() {
  const varanasiPackages = packages.filter(p => 
    p.location.toLowerCase().includes('varanasi') || 
    p.name.toLowerCase().includes('varanasi')
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
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Varanasi Tour Package Cost 2026</h1>
        <p style={{ fontSize: '1.2rem' }}>Discover the spiritual heart of India along the sacred Ganges</p>
      </section>

      <div className="container section-padding">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Tour Packages', href: '/tour-packages' },
          { label: 'Varanasi Tours', href: '/varanasi-tour-package' }
        ]} />

        <div style={{ marginTop: '50px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Premium Varanasi & Kashi Vishwanath Packages</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {varanasiPackages.map((pkg) => (
              <PackageCard key={pkg.slug} {...pkg} title={pkg.name} href={`/tour-packages/${pkg.slug}`} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
