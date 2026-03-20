"use client";

import React from 'react';

interface SidebarProps {
  duration: string;
  inclusions: string[];
}

export default function PackageSidebar({ duration, inclusions }: SidebarProps) {
  return (
    <div className="sidebar-sticky">
      <div className="price-card">
        <div className="price-header">
          <span className="starting-label">Starting From</span>
          <div className="badge">Best Offers</div>
        </div>
        <div className="pricing">
          <span className="current-price" style={{ fontSize: '1.8rem' }}>Price on Enquiry</span>
        </div>
        <p className="price-info">Contact us for the best customized rates</p>
        
        <button className="cta-button" onClick={() => window.open(`https://wa.me/919999995475?text=I'm interested in the Package: ${duration} trip`, '_blank')}>
          ENQUIRE NOW!
        </button>
      </div>

      <div className="info-card">
        <h4>Package Highlights</h4>
        <div className="info-item">
          <i className="fas fa-clock"></i>
          <span><strong>Duration:</strong> {duration}</span>
        </div>
        <div className="inclusions-grid">
          {inclusions.map((item, id) => (
            <div key={id} className="inclusion-item">
              <div className="icon-box">
                <i className={`fas ${getInclusionIcon(item)}`}></i>
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="help-card">
        <div className="help-icon"><i className="fas fa-headset"></i></div>
        <div className="help-text">
          <h5>Need Assistance?</h5>
          <p>Talk to our experts today!</p>
          <a href="tel:18005705475">1800 570 5475</a>
        </div>
      </div>

      <style jsx>{`
        .sidebar-sticky {
          position: sticky;
          top: 100px;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        .price-card {
          background: #fff;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          border-top: 5px solid #FF8C00;
        }
        .price-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .starting-label {
          font-weight: 700;
          color: #2B3036;
          font-size: 1.1rem;
        }
        .badge {
          background: #FF4D4D;
          color: #fff;
          font-size: 0.75rem;
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: 800;
          text-transform: uppercase;
        }
        .pricing {
          margin-bottom: 10px;
          display: flex;
          align-items: baseline;
          gap: 10px;
        }
        .old-price {
          text-decoration: line-through;
          color: #999;
          font-size: 1.2rem;
        }
        .current-price {
          color: #FF8C00;
          font-size: 2.2rem;
          font-weight: 800;
        }
        .price-info {
          font-size: 0.85rem;
          color: #777;
          margin-bottom: 25px;
        }
        .cta-button {
          width: 100%;
          background: #FF8C00;
          color: #fff;
          border: none;
          padding: 16px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(255, 140, 0, 0.3);
        }
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(255, 140, 0, 0.4);
          background: #e67e00;
        }
        .info-card {
          background: #fff;
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.05);
        }
        .info-card h4 {
          font-size: 1.2rem;
          margin-bottom: 20px;
          color: #2B3036;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: #555;
        }
        .info-item i { color: #FF8C00; }
        .inclusions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .inclusion-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          text-align: center;
          font-weight: 600;
        }
        .icon-box {
          width: 45px;
          height: 45px;
          background: #FFF5E6;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: #FF8C00;
        }
        .help-card {
          background: #1a2b48;
          border-radius: 20px;
          padding: 20px;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .help-icon {
          font-size: 2.5rem;
          opacity: 0.3;
        }
        .help-text h5 { margin: 0; font-size: 1.1rem; }
        .help-text p { margin: 3px 0 10px; font-size: 0.75rem; opacity: 0.7; }
        .help-text a { color: #FF8C00; text-decoration: none; font-weight: 800; font-size: 1.2rem; }
      `}</style>
    </div>
  );
}

function getInclusionIcon(item: string) {
  const map: Record<string, string> = {
    'Hotel Stay': 'fa-hotel',
    'Breakfast': 'fa-coffee',
    'Sightseeing': 'fa-camera',
    'Transfers': 'fa-car',
    'Guided Tours': 'fa-user-tie',
    'AC Transport': 'fa-bus',
    'Premium Hotels': 'fa-star',
    'Monastery Visits': 'fa-dharmachakra'
  };
  return map[item] || 'fa-check-circle';
}
