'use client';

import React from 'react';

const FloatingContact: React.FC = () => {
  return (
    <>
      <div className="floating-contact-container" style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919999995475"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float pulse-ring"
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#25d366',
            color: '#FFF',
            borderRadius: '50px',
            textAlign: 'center',
            boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            position: 'relative',
            zIndex: 1
          }}
          title="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.061 3.978l-1.127 4.114 4.212-1.105c1.164.635 2.478.969 3.813.969h.004c4.368 0 7.926-3.558 7.93-7.927a7.868 7.868 0 0 0-2.311-5.611zM7.998 14.511c-1.189 0-2.352-.313-3.376-.906l-.243-.141-2.508.658.67-2.441-.155-.246a6.568 6.568 0 0 1-1.006-3.52c0-3.633 2.964-6.597 6.6-6.597 1.762 0 3.419.686 4.665 1.932 1.246 1.246 1.932 2.903 1.932 4.665.002 3.635-2.964 6.598-6.601 6.598zm3.628-4.881c-.199-.099-1.178-.581-1.36-.647-.182-.066-.314-.099-.446.099-.132.198-.511.647-.626.776-.115.13-.231.146-.43.047-.199-.099-.843-.311-1.607-.991-.595-.53-.996-1.185-1.112-1.385-.116-.2-.012-.308.087-.407.089-.089.199-.232.299-.347.101-.115.134-.197.199-.329.066-.132.033-.248-.016-.347-.049-.099-.446-1.076-.611-1.474-.16-.388-.323-.335-.446-.341-.114-.007-.245-.008-.376-.008-.13 0-.342.049-.522.245-.18.198-.686.671-.686 1.638 0 .967.703 1.901.802 2.033.099.132 1.383 2.112 3.352 2.961.468.202.833.323 1.118.413.47.15.897.129 1.235.078.377-.058 1.178-.481 1.345-.944.167-.464.167-.861.117-.944-.05-.084-.182-.132-.381-.231z"/>
          </svg>
        </a>

        {/* Call Button */}
        <a
          href="tel:+919999995475"
          className="phone-float"
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#FF8C00',
            color: '#FFF',
            borderRadius: '50px',
            textAlign: 'center',
            boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
          }}
          title="Call Us Now"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
        </a>
      </div>

      <style jsx>{`
        .whatsapp-float:hover,
        .phone-float:hover {
          transform: scale(1.12);
          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
        }
        @media (max-width: 768px) {
          .floating-contact-container {
            bottom: 20px !important;
            right: 15px !important;
            gap: 10px !important;
          }
          .whatsapp-float,
          .phone-float {
            width: 52px !important;
            height: 52px !important;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingContact;
