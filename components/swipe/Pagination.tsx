// app/components/hooks/Pagination.tsx
'use client';

type PaginationProps = {
currentPage: number;
totalPages: number;
onPageChange: (page: number) => void;
};

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
const handlePrevious = () => {
if (currentPage > 1) {
onPageChange(currentPage - 1);
}
};

const handleNext = () => {
if (currentPage < totalPages) {
onPageChange(currentPage + 1);
}
};

const getPageNumbers = () => {
const pageNumbers = [];
if (totalPages <= 7) { // Show all pages if 7 or less
for (let i = 1; i <= totalPages; i++) {
pageNumbers.push(i);
}
} else {
// Always show the first page
pageNumbers.push(1);

// Logic for ellipses and surrounding pages
if (currentPage > 3) {
pageNumbers.push('...');
}

let startPage = Math.max(2, currentPage - 1);
let endPage = Math.min(totalPages - 1, currentPage + 1);

if(currentPage <= 3) {
startPage = 2;
endPage = 4;
}

if(currentPage >= totalPages - 2) {
startPage = totalPages - 3;
endPage = totalPages - 1;
}

for (let i = startPage; i <= endPage; i++) {
pageNumbers.push(i);
}

if (currentPage < totalPages - 2) {
pageNumbers.push('...');
}

// Always show the last page
pageNumbers.push(totalPages);
}
return pageNumbers;
};

if (totalPages <= 1) return null;

return (
<nav className="flex items-center justify-center space-x-2" aria-label="Pagination">
<button
onClick={handlePrevious}
disabled={currentPage === 1}
className="flex size-9 items-center justify-center rounded-lg text-[var(--text-secondary)] hover:bg-[var(--secondary-color)] disabled:opacity-50 transition-colors"
aria-label="Go to previous page"
>
<span className="sr-only">Previous</span>
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
</button>

{getPageNumbers().map((page, index) => {
if (typeof page === 'string') {
return <span key={`ellipsis-${index}`} className="flex size-9 items-center justify-center text-sm font-medium text-[var(--text-secondary)]">...</span>;
}
return (
<button
key={`page-${page}`}
onClick={() => onPageChange(page)}
className={`flex size-9 items-center justify-center rounded-lg text-sm font-medium transition-colors ${currentPage === page ? 'bg-indigo-600 text-white shadow-sm' : 'text-[var(--text-primary)] hover:bg-[var(--secondary-color)]'}`}
aria-current={currentPage === page ? 'page' : undefined}
>
  {page}
</button>
);
})}

<button
onClick={handleNext}
disabled={currentPage === totalPages}
  className="flex size-9 items-center justify-center rounded-lg text-[var(--text-secondary)] hover:bg-[var(--secondary-color)] disabled:opacity-50 transition-colors"
  aria-label="Go to next page"
>
<span className="sr-only">Next</span>
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
</button>
</nav>
);
}
