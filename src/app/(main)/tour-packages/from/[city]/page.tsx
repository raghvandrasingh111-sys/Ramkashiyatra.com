import React from 'react';
import { Metadata } from 'next';
import { packages } from '@/data/packages';
import PackageCard from '@/components/PackageCard';
import Breadcrumbs from '@/components/Breadcrumbs';

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  const cities = ['delhi', 'mumbai', 'bangalore', 'chennai', 'hyderabad', 'kolkata', 'pune', 'ahmedabad', 'lucknow', 'jaipur'];
  return cities.map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = (await params).city;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  
  return {
    title: `Kashi Yatra Package from ${cityName} | Ram Mandir Ayodhya Tour | Ram Kashi Yatra`,
    description: `Book the best Kashi Yatra and Ayodhya Ram Mandir tour packages from ${cityName}. 3 to 9 day spiritual itineraries including Kashi Vishwanath VIP access and luxury stay.`,
    keywords: [`Kashi Yatra from ${cityName}`, `Ayodhya tour from ${cityName}`, `Varanasi tour package from ${cityName}`, `Ram Mandir tour from ${cityName}`],
  };
}

const CityPackagesPage = async ({ params }: Props) => {
  const city = (await params).city;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <>
      <main style={{ paddingTop: '120px' }}>
        <div className="container" style={{ padding: '0 5%' }}>
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Tour Packages', href: '/tour-packages' },
              { label: `From ${cityName}`, href: `/tour-packages/from/${city}` }
            ]} 
          />
          
          <div style={{ marginTop: '40px', marginBottom: '60px' }}>
            <h1 style={{ fontSize: '3rem', color: '#2B3036', marginBottom: '20px' }}>
              Varanasi Ayodhya Tour Package from {cityName}
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.8', maxWidth: '900px' }}>
              Plan your divine pilgrimage to the holiest cities of India with Luxury Trip India. We offer specialized, all-inclusive 
              <strong> Varanasi and Ayodhya tour packages from {cityName}</strong>, featuring seamless flight/train connectivity, 
              premium AC transfers, and handpicked luxury accommodations. Experience the magic of the Ganga Aarti and the 
              divinity of the Ram Mandir with our expert-led journeys.
            </p>
          </div>

          <div className="packages-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
            gap: '30px',
            marginBottom: '80px'
          }}>
            {packages.map((pkg) => (
              <PackageCard 
                key={pkg.slug} 
                {...pkg} 
                title={pkg.name} 
                href={`/tour-packages/${pkg.slug}`} 
              />
            ))}
          </div>

          {/* Regional SEO Content Section */}
          <section className="regional-seo-info" style={{ 
            padding: '60px', 
            background: '#fcfcfc', 
            borderRadius: '20px', 
            border: '1px solid #eee',
            marginBottom: '100px'
          }}>
            <h2 style={{ fontSize: '2.2rem', color: '#2B3036', marginBottom: '30px' }}>
              Why Book Your Kashi Yatra from {cityName} with Us?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#FF8C00', marginBottom: '15px' }}>Direct Connectivity</h3>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  We coordinate with all major airlines and trains from <strong>{cityName}</strong> to ensure your arrival in Varanasi is timely and stress-free. Our team handles your pickup from the moment you land.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#FF8C00', marginBottom: '15px' }}>End-to-End Logistics</h3>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  From {cityName} to the ghats of Kashi, we manage your entire itinerary. No negotiating with local taxis or worrying about temple entries—we handle everything.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#FF8C00', marginBottom: '15px' }}>24/7 Support</h3>
                <p style={{ color: '#555', lineHeight: '1.7' }}>
                  Our dedicated tour managers are available around the clock to assist travelers from {cityName}, ensuring that your spiritual journey remains focused on devotion and comfort.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default CityPackagesPage;
