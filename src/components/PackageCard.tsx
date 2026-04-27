"use client";

import Link from 'next/link';
import Image from 'next/image';

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
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
      cursor: 'pointer'
    }}>
      <div className="card-image-wrapper" style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
          className="card-image"
        />
        {/* Gradient overlay on hover */}
        <div className="card-gradient-overlay" />

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
          gap: '5px',
          zIndex: 2
        }}>
          <span style={{ color: '#E94545' }}>{duration.includes('|') ? duration.split('|')[0].trim() : duration.split(' ')[0]}</span>
          <span style={{ opacity: 0.8 }}>{duration.includes('|') ? '| ' + duration.split('|').slice(1).join(' | ') : duration.split(' ').slice(1).join(' ')}</span>
        </div>

        {/* Location badge */}
        <div style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(8px)',
          padding: '5px 12px',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: '600',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          zIndex: 2
        }}>
          <i className="fas fa-map-marker-alt" style={{ color: '#FF8C00', fontSize: '0.7rem' }}></i>
          {location.split(',')[0].split('-')[0].trim()}
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
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }
        .package-card:hover :global(.card-image) {
          transform: scale(1.1);
        }
        .card-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.3) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }
        .package-card:hover .card-gradient-overlay {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
