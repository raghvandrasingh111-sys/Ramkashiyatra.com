import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { blogs } from '@/data/blogs';
import { buildSeo } from '@/lib/seo';

export const metadata: Metadata = buildSeo({
  title: 'Spiritual Travel Blog | Kashi, Ayodhya, Varanasi Tour Guides ',
  description: 'Expert spiritual travel guides, Kashi Yatra tips, Ayodhya Ram Mandir Darshan timings, Varanasi Ganga Aarti schedule, Triveni Sangam Snan dates, Pind Daan information and  itineraries from Ram Kashi Yatra — India\u2019s premium luxury pilgrimage agency.',
  path: '/blog',
  keywords: [
    'kashi yatra travel guide',
    'ayodhya travel guide ',
    'varanasi travel guide',
    'ram mandir darshan timings',
    'kashi vishwanath darshan timings',
    'ganga aarti varanasi timings',
    'best time to visit varanasi',
    'best time to visit ayodhya',
    'kashi yatra tips',
    'pind daan in gaya guide',
  ],
});

const BlogIndex = () => {
  return (
    <>
      <main style={{ paddingTop: '120px' }}>
        <div className="container" style={{ padding: '0 5%' }}>
          <header style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', color: '#2B3036', marginBottom: '20px' }}>Spiritual Exploration Blog</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              Your definitive guide to the ancient rituals, sacred temples, and timeless traditions of Varanasi, Ayodhya, and Prayagraj.
            </p>
          </header>

          <div className="blog-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '40px',
            marginBottom: '100px'
          }}>
            {blogs.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card" style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ position: 'relative', height: '240px' }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 350px"
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: '#FF8C00',
                    color: '#fff',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    {post.category}
                  </div>
                </div>
                <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.85rem', color: '#999', marginBottom: '10px' }}>{post.date}</div>
                  <h2 style={{ fontSize: '1.4rem', color: '#2B3036', marginBottom: '15px', lineHeight: '1.4' }}>{post.title}</h2>
                  <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>{post.excerpt}</p>
                  <div style={{ marginTop: 'auto', fontWeight: 'bold', color: '#FF8C00', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Read Guide <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogIndex;
