import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogs, BlogPost } from '@/data/blogs';
import { packages, TourPackage } from '@/data/packages';
import Breadcrumbs from '@/components/Breadcrumbs';
import PackageCard from '@/components/PackageCard';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogs.map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const post = blogs.find((p: BlogPost) => p.slug === slug);
  
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: `${post.title} | Luxury Trip India Blog`,
    description: post.excerpt,
    keywords: post.tags,
  };
}

const BlogPostPage = async ({ params }: Props) => {
  const slug = (await params).slug;
  const post = blogs.find((p: BlogPost) => p.slug === slug);

  if (!post) notFound();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Luxury Trip India",
      "logo": {
        "@type": "ImageObject",
        "url": "https://luxurytripindia.com/img/logo-luxury.png"
      }
    },
    "datePublished": new Date(post.date).toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.ramkashiyatra.com/blog/${post.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ramkashiyatra.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.ramkashiyatra.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.ramkashiyatra.com/blog/${post.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main style={{ paddingTop: '120px' }}>
        <article className="container" style={{ padding: '0 5%', maxWidth: '900px', margin: '0 auto' }}>
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title, href: `/blog/${post.slug}` }
            ]} 
          />

          <header style={{ marginTop: '40px', marginBottom: '50px' }}>
             <div style={{ color: '#FF8C00', fontWeight: 'bold', marginBottom: '15px', fontSize: '1rem', textTransform: 'uppercase' }}>
               {post.category}
             </div>
             <h1 style={{ fontSize: '3.5rem', color: '#2B3036', lineHeight: '1.2', marginBottom: '30px' }}>
               {post.title}
             </h1>
             <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: '#888' }}>
               <span>By <strong>{post.author}</strong></span>
               <span>•</span>
               <span>{post.date}</span>
             </div>
          </header>

          <div style={{ 
            borderRadius: '25px', 
            overflow: 'hidden', 
            marginBottom: '60px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
            position: 'relative',
            aspectRatio: '16/9'
          }}>
            <Image 
              src={post.image} 
              alt={post.title} 
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="blog-content" style={{
            fontSize: '1.2rem',
            lineHeight: '1.9',
            color: '#333'
          }}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Related Packages Section */}
          {post.relatedPackages && post.relatedPackages.length > 0 && (
            <section style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid #eee' }}>
              <h2 style={{ fontSize: '2rem', color: '#2B3036', marginBottom: '40px' }}>Recommended Tour Packages</h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '30px' 
              }}>
                {post.relatedPackages.map((slug: string) => {
                  const pkg = packages.find((p: TourPackage) => p.slug === slug);
                  if (!pkg) return null;
                  return (
                    <PackageCard 
                      key={pkg.slug} 
                      {...pkg} 
                      title={pkg.name} 
                      href={`/tour-packages/${pkg.slug}`} 
                    />
                  );
                })}
              </div>
            </section>
          )}

          {/* Call to Action */}
          <div style={{ 
            marginTop: '80px', 
            padding: '60px', 
            background: '#2B3036', 
            borderRadius: '25px', 
            color: '#fff', 
            textAlign: 'center',
            marginBottom: '100px'
          }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready for Your Spiritual Journey?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '40px', opacity: 0.9 }}>
              Experience the divinity of Kashi and Ayodhya with our expert-led luxury tours.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <Link href="/tour-packages" style={{
                background: '#FF8C00',
                color: '#fff',
                padding: '18px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}>Explore All Packages</Link>
              <a href="https://wa.me/919999995475" target="_blank" rel="noopener noreferrer" style={{
                background: 'transparent',
                color: '#fff',
                padding: '18px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                border: '2px solid #fff'
              }}>WhatsApp Enquiry</a>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default BlogPostPage;
