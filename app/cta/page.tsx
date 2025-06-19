// app/cta/page.tsx
'use client';

import { useState, useMemo } from 'react';
import ctaData from '@/ctaData';
import type { Cta } from '@/types';
import { SwipeCard, type Swipeable } from '@/components/swipe/SwipeCard';
import { Filters } from '@/components/swipe/Filters';
import { Pagination } from '@/components/swipe/Pagination';

const CTAS_PER_PAGE = 4;

export default function CtaPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});

  const ctasWithId: Cta[] = useMemo(() => ctaData.map((cta, index) => ({ ...cta, id: index + 1 })), []);

  const filterOptions = useMemo(() => {
    const trigger_types = [...new Set(ctaData.flatMap(c => c.trigger_types))];
    const ideal_placements = [...new Set(ctaData.flatMap(c => c.ideal_placements))];
    const audience_stages = [...new Set(ctaData.flatMap(c => c.audience_stages))];
    return { trigger_types, ideal_placements, audience_stages };
  }, []);

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters(prev => {
      const newCategoryFilters = prev[category] ? [...prev[category]] : [];
      const valueIndex = newCategoryFilters.indexOf(value);

      if (valueIndex > -1) {
        newCategoryFilters.splice(valueIndex, 1);
      } else {
        newCategoryFilters.push(value);
      }

      setCurrentPage(1);

      return {
        ...prev,
        [category]: newCategoryFilters,
      };
    });
  };

  const handleResetFilters = () => {
    setSelectedFilters({});
    setCurrentPage(1);
  };

  const filteredCtas = useMemo(() => {
    return ctasWithId
      .filter(c => c.cta.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter(c => {
        return Object.entries(selectedFilters).every(([category, values]) => {
          if (values.length === 0) return true;
          // The data keys for CTAs are different, so we map them here.
          const dataKey = category === 'audience_stages' ? 'audience_stages' : category;
          return values.some(value => (c[dataKey as keyof Cta] as string[])?.includes(value));
        });
      });
  }, [searchTerm, selectedFilters]);

  const paginatedCtas = useMemo(() => {
    const startIndex = (currentPage - 1) * CTAS_PER_PAGE;
    return filteredCtas.slice(startIndex, startIndex + CTAS_PER_PAGE);
  }, [filteredCtas, currentPage]);

  const totalPages = Math.ceil(filteredCtas.length / CTAS_PER_PAGE);

  return (
    <div className="text-[var(--text-primary)] min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Find Your Next CTA</h1>
          <p className="text-sm font-medium text-zinc-500">{filteredCtas.length} CTAs found</p>
        </div>

        <div className="mb-8">
            <Filters 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm}
              filterOptions={filterOptions}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              filterCategories={{
                trigger_types: 'Trigger Types',
                ideal_placements: 'Ideal Placements',
                audience_stages: 'Audience Stages',
              }}
              onResetFilters={handleResetFilters}
              searchPlaceholder="Search CTAs by keyword, e.g., 'community', 'value', 'urgency'"
            />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paginatedCtas.map((cta) => {
            const swipeableItem: Swipeable = {
                title: cta.cta,
                tags: cta.trigger_types,
                imageUrl: `/ctas/cta0000${String(cta.id)}.svg`,
            };
            return <SwipeCard key={cta.id} item={swipeableItem} copyButtonText="Copy CTA" />;
          })}
        </div>

        <div className="mt-12 flex justify-center">
            {totalPages > 1 && (
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            )}
        </div>
      </main>
    </div>
  );
}
