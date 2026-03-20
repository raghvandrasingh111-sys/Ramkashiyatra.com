"use client";

import React, { useState } from 'react';
import { ItineraryDay } from '../data/packages';

interface ItineraryProps {
  itinerary: ItineraryDay[];
}

export default function PackageItinerary({ itinerary }: ItineraryProps) {
  const [openDay, setOpenDay] = useState<number | null>(1);

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? null : day);
  };

  return (
    <div className="itinerary-container">
      <h3 className="section-title">Suggested Itinerary</h3>
      <div className="itinerary-list">
        {itinerary.map((day) => (
          <div key={day.day} className={`itinerary-item ${openDay === day.day ? 'active' : ''}`}>
            <button 
              className="itinerary-header" 
              onClick={() => toggleDay(day.day)}
              aria-expanded={openDay === day.day}
            >
              <div className="day-badge">Day {day.day}</div>
              <span className="itinerary-item-title">{day.title}</span>
              <span className="icon">{openDay === day.day ? '−' : '+'}</span>
            </button>
            <div className="itinerary-content">
              <div className="itinerary-inner">
                {day.image && (
                  <div className="day-image-container">
                    <img src={day.image} alt={day.title} />
                  </div>
                )}
                <ul>
                  {day.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .itinerary-container {
          margin-top: 40px;
        }
        .section-title {
          font-size: 1.8rem;
          margin-bottom: 25px;
          color: #2B3036;
          font-weight: 700;
          border-left: 5px solid #FF8C00;
          padding-left: 15px;
        }
        .itinerary-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .itinerary-item {
          border: 1px solid #eee;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
          transition: all 0.3s ease;
        }
        .itinerary-item.active {
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          border-color: #FF8C00;
        }
        .itinerary-header {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 18px 25px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 15px;
        }
        .day-badge {
          background: #FF8C00;
          color: #fff;
          padding: 4px 12px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.85rem;
          flex-shrink: 0;
        }
        .itinerary-item-title {
          flex: 1;
          font-size: 1.1rem;
          font-weight: 600;
          color: #2B3036;
        }
        .icon {
          font-size: 1.5rem;
          font-weight: 300;
          color: #FF8C00;
        }
        .itinerary-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .itinerary-item.active .itinerary-content {
          max-height: 1000px;
        }
        .itinerary-inner {
          padding: 0 25px 25px 75px;
        }
        .itinerary-inner ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .itinerary-inner li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 12px;
          color: #555;
          line-height: 1.6;
        }
        .itinerary-inner li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #FF8C00;
          font-weight: bold;
        }
        .day-image-container {
          margin-bottom: 20px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .day-image-container img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 768px) {
          .itinerary-inner {
            padding: 0 20px 20px 20px;
          }
           .day-image-container img {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
}
