import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigateHome: () => void;
  onNavigatePath?: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigateHome, onNavigatePath }) => {
  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://zexuna.com/',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.path ? `https://zexuna.com/#${item.path}` : undefined,
      })),
    ],
  };

  return (
    <div className="w-full mb-6">
      {/* Dynamic Schema.org BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />

      <nav aria-label="Breadcrumb" className="flex items-center text-xs font-mono text-[#A7B1C5]">
        <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
          <li className="inline-flex items-center">
            <button
              type="button"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 hover:text-[#65A4FF] transition-colors focus-visible:ring-1 focus-visible:ring-[#65A4FF] rounded px-1 py-0.5"
            >
              <Home className="w-3.5 h-3.5 text-[#65A4FF]" />
              <span>ZEXUNA Home</span>
            </button>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.label} className="inline-flex items-center gap-1.5 sm:gap-2">
                <ChevronRight className="w-3 h-3 text-[#1E293B] shrink-0" aria-hidden="true" />
                {isLast || !item.path ? (
                  <span className="text-white font-semibold" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => onNavigatePath && item.path && onNavigatePath(item.path)}
                    className="hover:text-[#65A4FF] transition-colors focus-visible:ring-1 focus-visible:ring-[#65A4FF] rounded px-1 py-0.5"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};
