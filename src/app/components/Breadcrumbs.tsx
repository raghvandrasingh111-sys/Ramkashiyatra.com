"use client";

import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="bc-nav">
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {index < items.length - 1 ? (
              <>
                <Link href={item.href} className="bc-link">
                  {index === 0 && (
                    <i className="fas fa-home" style={{ marginRight: 6 }} />
                  )}
                  {item.label}
                </Link>
                <i className="fas fa-chevron-right bc-sep" />
              </>
            ) : (
              <span className="bc-current">{item.label}</span>
            )}
          </li>
        ))}
      </ol>

      <style jsx>{`
        .bc-nav { margin-bottom: 24px; }
        ol {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 4px 8px;
          list-style: none;
          padding: 8px 16px;
          margin: 0;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-pill);
          font-size: 0.85rem;
          width: fit-content;
          backdrop-filter: blur(8px);
        }
        li { display: flex; align-items: center; gap: 8px; }
        .bc-link {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.25s ease;
          font-weight: 500;
        }
        .bc-link:hover { color: var(--brand-saffron); }
        .bc-sep {
          font-size: 0.65rem;
          color: var(--text-light);
        }
        .bc-current {
          color: var(--brand-ink);
          font-weight: 700;
        }
      `}</style>
    </nav>
  );
};

export default Breadcrumbs;
