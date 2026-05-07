import { Metadata } from 'next';
import { packages } from '@/data/packages';
import PackageCard from '@/app/components/PackageCard';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { buildSeo } from '@/lib/seo';

export const metadata: Metadata = buildSeo({
  title: 'Kashi Yatra Package from Mumbai  | Mumbai to Varanasi Ayodhya Tour',
  description: 'Premium Kashi Yatra Package from Mumbai  — flights from Mumbai to Varanasi, VIP Kashi Vishwanath Sugam Darshan, Ram Mandir Ayodhya darshan, Ganga Aarti at Dashashwamedh and Triveni Sangam in Prayagraj. Hotel + cab + meals + 24×7 concierge. Book at best price.',
  path: '/kashi-yatra-package-from-mumbai',
  keywords: [
    'kashi yatra package from mumbai',
    'ayodhya tour package from mumbai',
    'varanasi tour package from mumbai',
    'mumbai to varanasi tour package',
    'mumbai to ayodhya tour package',
    'kashi ayodhya tour package from mumbai',
    'mumbai to kashi vishwanath flight package',
    'spiritual tour from mumbai',
  ],
});

export default function MumbaiLocationLanding() {
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
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Kashi Yatra Package from Mumbai</h1>
        <p style={{ fontSize: '1.2rem' }}>Divine Connection from the Financial Capital to the Holy Heart of India</p>
      </section>

      <div className="container section-padding">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Tour Packages', href: '/tour-packages' },
          { label: 'From Mumbai', href: '/kashi-yatra-package-from-mumbai' }
        ]} />

        <div style={{ marginTop: '50px' }}>
          <div style={{ marginBottom: '40px', lineHeight: '1.8', color: '#444' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Find the perfect **Kashi Yatra Package from Mumbai**. We specialize in providing comprehensive spiritual itineraries for travelers from Maharashtra, ensuring a holy and comfortable experience in Varanasi and Ayodhya.</p>
          </div>

          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Most Booked Packages from Mumbai</h2>
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
