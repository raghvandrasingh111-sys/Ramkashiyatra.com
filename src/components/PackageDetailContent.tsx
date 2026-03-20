"use client";

import React from 'react';
import { TourPackage, CHILD_POLICY, GENERAL_EXCLUSIONS, GENERAL_INCLUSIONS, CANCELLATION_POLICY, HOTEL_REFERENCE } from '@/data/packages';
import PackageItinerary from '@/components/PackageItinerary';
import PackageSidebar from '@/components/PackageSidebar';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function PackageDetailContent({ pkg }: { pkg: TourPackage }) {
  return (
    <>
      <Navbar />
      
      {/* Detail Hero */}
      <section className="detail-hero" style={{
        padding: '160px 5% 100px',
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${pkg.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff'
      }}>
        <div className="container">
          <div className="badge" style={{ background: '#FF8C00', display: 'inline-block', padding: '5px 15px', borderRadius: '5px', marginBottom: '20px', fontWeight: 'bold' }}>
            {pkg.location} Tours
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '15px' }}>{pkg.name}</h1>
          <p style={{ fontSize: '1.2rem', opacity: '0.9', maxWidth: '800px' }}>{pkg.description}</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container main-layout-grid">
        
        {/* Left Column: Itinerary & Details */}
        <div className="main-content">
          <div className="intro-text">
             <h2 style={{ fontSize: '2.2rem', color: '#2B3036' }}>Experience {pkg.name}</h2>
             <p style={{ fontSize: '1.1rem', color: '#666', marginTop: '15px', lineHeight: '1.8' }}>
               This carefully curated {pkg.duration} tour is designed to immerse you in the spiritual atmosphere and cultural richness of {pkg.location}. 
               From exploring ancient temples to experiencing the divine Sarayu Aarti, every moment is planned for your comfort and enlightenment.
             </p>
          </div>
          
          <PackageItinerary itinerary={pkg.itinerary} />

          {/* Pricing Table Section - Hidden by user request */}
          {/* {pkg.pricingTable && (
            <div className="pricing-section" style={{ marginTop: '50px' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#2B3036', marginBottom: '25px' }}>Pricing Details (Per Person)</h3>
              <div className="table-responsive" style={{ overflowX: 'auto' }}>
                <table className="pricing-table" style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
                  <thead>
                    <tr style={{ background: '#f8f9fa' }}>
                      <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Category</th>
                      <th style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>02 Pax</th>
                      <th style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>04 Pax</th>
                      <th style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>06 Pax</th>
                      <th style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>08 Pax</th>
                      <th style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>10 Pax</th>
                      <th style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>12 Pax</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pkg.pricingTable.map((row, idx) => (
                      <tr key={idx}>
                        <td style={{ padding: '12px', fontWeight: 'bold', border: '1px solid #ddd' }}>{row.category}</td>
                        <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>{row.pax2}</td>
                        <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>{row.pax4}</td>
                        <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>{row.pax6}</td>
                        <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>{row.pax8}</td>
                        <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>{row.pax10}</td>
                        <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #ddd' }}>{row.pax12}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#888' }}>* Rate valid from 01st April to 31st August 2026, Except Long weekends. Twin Sharing Per Person.</p>
            </div>
          )} */}

          {/* Child Policy Section */}
          <div className="policy-section" style={{ marginTop: '50px', padding: '30px', background: '#fcfcfc', borderRadius: '10px', border: '1px solid #eee' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#2B3036', marginBottom: '20px' }}>Child Policy</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {CHILD_POLICY.map((p, i) => (
                <li key={i} style={{ marginBottom: '10px', color: '#555', paddingLeft: '25px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#FF8C00' }}>•</span> {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Cancellation Policy Section */}
          <div className="policy-section" style={{ marginTop: '40px' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#2B3036', marginBottom: '20px' }}>Cancellation Policy</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              {CANCELLATION_POLICY.map((item, i) => (
                <div key={i} style={{ padding: '15px', background: '#fff', border: '1px solid #eee', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', color: '#2B3036' }}>{item.duration}</div>
                  <div style={{ color: '#FF4D4D', marginTop: '5px' }}>{item.refund} Refund</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hotel Reference Section */}
          <div className="hotel-reference-section" style={{ marginTop: '50px' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#2B3036', marginBottom: '25px' }}>Recommended Hotels</h3>
            <div className="table-responsive" style={{ overflowX: 'auto' }}>
              <table className="hotel-table" style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #eee', fontSize: '0.95rem' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa' }}>
                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #eee' }}>City</th>
                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #eee' }}>Deluxe</th>
                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #eee' }}>Luxury</th>
                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #eee' }}>Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {HOTEL_REFERENCE.map((row, idx) => (
                    <tr key={idx}>
                      <td style={{ padding: '12px', fontWeight: 'bold', border: '1px solid #eee' }}>{row.city}</td>
                      <td style={{ padding: '12px', border: '1px solid #eee' }}>{row.deluxe}</td>
                      <td style={{ padding: '12px', border: '1px solid #eee' }}>{row.luxury}</td>
                      <td style={{ padding: '12px', border: '1px solid #eee' }}>{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <aside>
          <PackageSidebar 
            duration={pkg.duration}
            inclusions={pkg.inclusions}
          />
          
          <div className="detailed-costing" style={{ marginTop: '30px', padding: '25px', background: '#f8f9fa', borderRadius: '15px' }}>
            <h4 style={{ marginBottom: '15px', color: '#2B3036' }}>Cost Inclusions</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem' }}>
              {GENERAL_INCLUSIONS.map((item, i) => (
                <li key={i} style={{ marginBottom: '8px', color: '#666' }}>✓ {item}</li>
              ))}
            </ul>
            <h4 style={{ margin: '20px 0 15px', color: '#2B3036' }}>Cost Exclusions</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem' }}>
              {GENERAL_EXCLUSIONS.map((item, i) => (
                <li key={i} style={{ marginBottom: '8px', color: '#999' }}>✕ {item}</li>
              ))}
            </ul>
          </div>
        </aside>

      </div>

      <Footer />

      <style jsx>{`
        .detail-hero { min-height: 50vh; display: flex; align-items: center; }
        .main-layout-grid {
          padding: 80px 5%;
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 50px;
        }
        .pricing-table th, .pricing-table td {
          transition: background 0.2s;
        }
        .pricing-table tr:hover td {
          background: #fafafa;
        }
        @media (max-width: 1024px) {
          .main-layout-grid { grid-template-columns: 1fr !important; }
          aside { order: 2; }
          .main-content { order: 1; }
        }
      `}</style>
    </>
  );
}
