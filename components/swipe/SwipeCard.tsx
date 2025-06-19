// app/components/swipe/SwipeCard.tsx
'use client';

import Image from 'next/image';
import toast from 'react-hot-toast';

import { TAG_COLORS, FALLBACK_TAG_COLOR } from '../../lib/config';

// A generic type for any item that can be displayed in a swipe card
export type Swipeable = {
  title: string;
  tags: string[];
  imageUrl: string;
  notes?: string;
  tips?: string;
};

type SwipeCardProps = {
  item: Swipeable;
  copyButtonText?: string;
};

export function SwipeCard({ item, copyButtonText = 'Copy' }: SwipeCardProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(item.title);
    const itemType = copyButtonText.includes('Hook') ? 'Hook' : 'CTA';
    toast.success(`The ${itemType.toLowerCase()} is copied to your clipboard!`);
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
      <div className="relative aspect-video w-full">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="flex grow flex-col p-5">
        <h3 className="text-base font-semibold leading-snug text-zinc-800">
          &ldquo;{item.title}&rdquo;
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className={`rounded-full px-2.5 py-1 text-xs font-semibold ${TAG_COLORS[tag] || FALLBACK_TAG_COLOR}`}>
              {tag === 'PAS' ? 'Problem-Agitate-Solution' : tag}
            </span>
          ))}
        </div>
        {(item.notes || item.tips) && (
            <div className="mt-4 space-y-3 border-t border-zinc-200 pt-4 text-sm">
                {item.notes && (
                    <p><span className="font-semibold text-zinc-800">Notes:</span> <span className="text-zinc-600">{item.notes}</span></p>
                )}
                {item.tips && (
                    <p><span className="font-semibold text-zinc-800">Tip:</span> <span className="text-zinc-600">{item.tips}</span></p>
                )}
            </div>
        )}
        <div className="mt-auto pt-5">
          <button
            onClick={handleCopy}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
            {copyButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
