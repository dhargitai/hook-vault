// app/(private)/app/hooks/page.tsx
'use client';

import { useState, useMemo } from 'react';
import hooksData from '@/hooksData';
import type { Hook } from '@/types';

// We will create these components in the next steps
import { SwipeCard, type Swipeable } from '@/components/swipe/SwipeCard';
import { Filters } from '@/components/swipe/Filters';
import { Pagination } from '@/components/swipe/Pagination';
import { HooksCheatsheet } from '@/components/swipe/HooksCheatsheet';

const HOOKS_PER_PAGE = 4;

export default function HooksPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});

  const hooksWithId: Hook[] = useMemo(() => hooksData.map((hook, index) => ({ ...hook, id: index + 1 })), []);

  const filterOptions = useMemo(() => {
    const psychological_triggers = [...new Set(hooksData.flatMap(hook => hook.psychological_triggers))];
    const ideal_video_types = [...new Set(hooksData.flatMap(hook => hook.ideal_video_types))];
    const best_for_audience_stages = [...new Set(hooksData.flatMap(hook => hook.best_for_audience_stages))];
    return { psychological_triggers, ideal_video_types, best_for_audience_stages };
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

      // Reset to page 1 when filters change
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

  const filteredHooks = useMemo(() => {
    return hooksWithId
      .filter(hook => {
        // Search term filter
        return hook.hook.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .filter(hook => {
        // Category filters
        return Object.entries(selectedFilters).every(([category, values]) => {
          if (values.length === 0) return true;
          return values.some(value => (hook[category as keyof Hook] as string[])?.includes(value));
        });
      });
  }, [searchTerm, selectedFilters]);

  const paginatedHooks = useMemo(() => {
    const startIndex = (currentPage - 1) * HOOKS_PER_PAGE;
    return filteredHooks.slice(startIndex, startIndex + HOOKS_PER_PAGE);
  }, [filteredHooks, currentPage]);

  const totalPages = Math.ceil(filteredHooks.length / HOOKS_PER_PAGE);

  return (
    <div className="bg-slate-50 text-[var(--text-primary)] min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Find Your Next Hook</h1>
          <p className="text-sm font-medium text-zinc-500">{filteredHooks.length} hooks found</p>
        </div>

        <div className="mb-8">
            <Filters 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm}
              filterOptions={filterOptions}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              filterCategories={{
                psychological_triggers: 'Triggers',
                ideal_video_types: 'Video Types',
                best_for_audience_stages: 'Audience Stages',
              }}
              onResetFilters={handleResetFilters}
              searchPlaceholder="Search hooks by keyword, e.g., 'tutorial', 'storytelling', 'productivity'"
            />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paginatedHooks.map((hook) => {
            const swipeableItem: Swipeable = {
                title: hook.hook,
                tags: hook.framework_tags,
                imageUrl: `/hooks/hook0000${String(hook.id)}.svg`,
                notes: hook.customization_note,
                tips: hook.quick_tips,
            };
            return <SwipeCard key={hook.id} item={swipeableItem} copyButtonText="Copy Hook" />;
          })}
        </div>

        <div className="mt-12 flex justify-center">
            {totalPages > 1 && (
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            )}
        </div>

        <HooksCheatsheet />
      </main>
    </div>
  );
}
