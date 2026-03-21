"use strict";

import Link from 'next/link';

interface PackageCardProps {
  image: string;
  duration: string;
  location: string;
  title: string;
  href: string;
  imageAlt?: string;
}

export default function PackageCard({
  image,
  duration,
  location,
  title,
  href,
  imageAlt
}: PackageCardProps) {
  return (
    <div className="package-card" style={{
      backgroundColor: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    }}>
      <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
        <img 
          src={image} 
          alt={imageAlt || title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
          className="card-image"
        />
        <div style={{
          position: 'absolute',
          bottom: '15px',
          left: '15px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '6px 15px',
          borderRadius: '5px',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          color: '#2B3036',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <span style={{ color: '#E94545' }}>{duration.includes('|') ? duration.split('|')[0].trim() : duration.split(' ')[0]}</span>
          <span style={{ opacity: 0.8 }}>{duration.includes('|') ? '| ' + duration.split('|').slice(1).join(' | ') : duration.split(' ').slice(1).join(' ')}</span>
        </div>
      </div>
      
      <div style={{ padding: '25px' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', fontWeight: '600', color: '#2B3036', height: '3.5rem', lineHeight: '1.4', overflow: 'hidden' }}>
          <Link href={href} style={{ color: 'inherit', textDecoration: 'none' }}>{title}</Link>
        </h3>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#B49122' }}>
              Enquire for Price
            </div>
            <div style={{ fontSize: '0.85rem', color: '#666' }}>Best Rates Guaranteed</div>
          </div>
          <Link href={href} className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem', borderRadius: '5px', textTransform: 'none' }}>
            View Package
          </Link>
        </div>
      </div>

      <style jsx>{`
        .package-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .package-card:hover .card-image {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
