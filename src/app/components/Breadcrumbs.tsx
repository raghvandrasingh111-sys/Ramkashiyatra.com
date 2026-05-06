'use client';

import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: '20px' }}>
      <ol style={{ 
        display: 'flex', 
        listStyle: 'none', 
        padding: 0, 
        margin: 0, 
        fontSize: '0.9rem',
        color: '#666'
      }}>
        {items.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            {index < items.length - 1 ? (
              <>
                <Link href={item.href} style={{ 
                  color: 'inherit', 
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#FF8C00'}
                onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}
                >
                  {item.label}
                </Link>
                <span style={{ margin: '0 10px', opacity: 0.5 }}>/</span>
              </>
            ) : (
              <span style={{ color: '#2B3036', fontWeight: '500' }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
