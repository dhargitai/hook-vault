// app/components/hooks/Filters.tsx
'use client';

import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Checkbox } from '@/components/checkbox';

// Define types for props
type FilterOptions = {
  [key: string]: string[];
};

type SelectedFilters = {
  [key: string]: string[];
};

type FiltersProps = {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filterOptions: FilterOptions;
  selectedFilters: SelectedFilters;
  onFilterChange: (category: string, value: string) => void;
  filterCategories: { [key: string]: string };
  onResetFilters: () => void;
  searchPlaceholder: string;
};

export function Filters({ 
  searchTerm, 
  onSearchChange, 
  filterOptions, 
  selectedFilters, 
  onFilterChange,
  filterCategories,
  onResetFilters,
  searchPlaceholder
}: FiltersProps) {
  const hasActiveFilters = Object.values(selectedFilters).some(arr => arr.length > 0);

  return (
    <div className="space-y-6">
        <div className="relative">
            <svg className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="h-12 w-full rounded-lg border border-solid border-zinc-300 bg-white pl-12 pr-5 text-base text-zinc-900 placeholder:text-zinc-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
        </div>

        <div className="flex flex-wrap items-center gap-4">
            {Object.entries(filterCategories).map(([category, displayName]) => {
                const activeFiltersCount = selectedFilters[category]?.length || 0;
                const isActive = activeFiltersCount > 0;
                return (
                    <Menu key={category} as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className={`flex items-center gap-2 whitespace-nowrap rounded-lg border border-solid px-4 py-2.5 text-sm font-medium leading-normal transition-colors duration-150 ease-in-out ${isActive ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50'}`}>
                                {displayName} {isActive && <span className="rounded-full bg-indigo-200 px-2 py-0.5 text-xs">{activeFiltersCount}</span>}
                                <svg className={`h-5 w-5 ${isActive ? 'text-indigo-600' : 'text-zinc-400'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"></path></svg>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-80 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="max-h-60 overflow-y-auto p-2">
                                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                        {filterOptions[category]?.map((option) => (
                                            <Menu.Item key={option}>
                                                {({ active }) => (
                                                    <div className={`${active ? 'bg-zinc-100' : ''} flex items-center rounded-md p-2`}  onClick={() => onFilterChange(category, option)}>
                                                        <Checkbox 
                                                            id={`${category}-${option}`}
                                                            checked={selectedFilters[category]?.includes(option) || false}
                                                            onChange={() => onFilterChange(category, option)}
                                                            name={option}
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label htmlFor={`${category}-${option}`} className="ml-3 block cursor-pointer text-sm font-medium text-zinc-700">
                                                            {option}
                                                        </label>
                                                    </div>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                )
            })}
            {hasActiveFilters && (
                <button onClick={onResetFilters} className="text-sm font-medium text-zinc-500 hover:text-indigo-600">
                    Reset Filters
                </button>
            )}
        </div>
    </div>
  );
}
