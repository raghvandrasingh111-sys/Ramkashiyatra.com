"use client";

import React, { useEffect, useRef, useState } from 'react';

interface LiteInstagramProps {
  id: string;
  type: string;
  height?: string;
}

export default function LiteInstagram({ id, type, height = '500px' }: LiteInstagramProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading 200px before it comes into view
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      style={{ 
        width: '100%', 
        height: height, 
        backgroundColor: '#f8f9fa', 
        borderRadius: '20px', 
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {!shouldLoad && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          fontSize: '0.9rem',
          gap: '12px'
        }}>
          <i className="fab fa-instagram" style={{ fontSize: '2rem', opacity: 0.5 }}></i>
          <span>Loading Instagram...</span>
        </div>
      )}
      
      {shouldLoad && (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.instagram.com/${type}/${id}/embed`}
          frameBorder="0"
          scrolling="no"
          allowTransparency
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title={`Instagram ${type} ${id}`}
        ></iframe>
      )}
    </div>
  );
}
