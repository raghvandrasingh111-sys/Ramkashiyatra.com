import React, { useState, useEffect, useRef } from 'react';
import NextImage from 'next/image';

interface Hotel {
  name: string;
  image: string;
}

interface CityHotelCarouselProps {
  title: string;
  hotels: Hotel[];
}

export default function CityHotelCarousel({ title, hotels }: CityHotelCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) setItemsToShow(1);
        else if (window.innerWidth < 1024) setItemsToShow(3);
        else setItemsToShow(5);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = hotels.length;
  const maxIndex = Math.max(0, totalItems - itemsToShow);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
      <div className="container" style={{ padding: '0 5%' }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '40px', 
          textAlign: 'left',
          fontWeight: '700'
        }}>
          {title}
        </h2>
        
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div 
            style={{ 
              display: 'flex', 
              transition: 'transform 0.5s ease',
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
            }}
          >
            {hotels.map((hotel, idx) => (
              <div 
                key={idx} 
                style={{ 
                  flex: `0 0 ${100 / itemsToShow}%`,
                  padding: '0 10px'
                }}
              >
                <div style={{
                  backgroundColor: '#fff',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                  textAlign: 'center',
                  height: '100%'
                }}>
                  <div style={{ position: 'relative', height: '200px' }}>
                    <NextImage 
                      src={hotel.image} 
                      alt={hotel.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                      style={{ 
                        objectFit: 'cover' 
                      }}
                    />
                  </div>
                  <div style={{ padding: '15px' }}>
                    <h3 style={{ fontSize: '1.1rem', margin: 0, color: '#333' }}>{hotel.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              border: '1px solid #ddd',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              border: '1px solid #ddd',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
