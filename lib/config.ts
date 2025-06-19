// lib/config.ts

// A vibrant and accessible color palette for tags.
const colorPalette = [
  'bg-blue-100 text-blue-800',
  'bg-green-100 text-green-800',
  'bg-yellow-100 text-yellow-800',
  'bg-purple-100 text-purple-800',
  'bg-pink-100 text-pink-800',
  'bg-red-100 text-red-800',
  'bg-indigo-100 text-indigo-800',
  'bg-cyan-100 text-cyan-800',
  'bg-teal-100 text-teal-800',
  'bg-lime-100 text-lime-800',
  'bg-orange-100 text-orange-800',
  'bg-rose-100 text-rose-800',
  'bg-sky-100 text-sky-800',
  'bg-violet-100 text-violet-800',
  'bg-fuchsia-100 text-fuchsia-800',
  'bg-gray-200 text-gray-800',
];

// All unique tags from both hooksData.js and ctaData.js
const allUniqueTags = [
  // Frameworks
  "PAS", "Problem-Agitate-Solution", "Story", "Contrarian", "Challenge", "Authority", "Empathy", "Belief Bridge", "Reveal", "Trend",
  // Psych Triggers
  "Curiosity", "Pain", "Fear of Loss", "FOMO", "Aspiration", "Hope", "Relief",
  // Video Types
  "Tip", "Educational", "Tutorial", "Ad", "Retention Analysis", "Behind-the-Scenes", "Case Study", "Vlog", "Transformation", "Documentary", "Storytime", "Inspirational", "How-To", "Rant", "Mistake Review", "Tool Review", "Trends", "Listicle",
  // Audience Stages
  "Cold", "Warm", "Hot",
  // CTA Triggers
  "Reciprocity", "Community", "Action", "Value", "Engagement", "Urgency", "Virality",
  // CTA Placements
  "End of video", "description", "comment pin", "visual overlay", "spoken call-out", "on-screen prompt", "Mid-video", "end", "spoken", "overlay", "pinned comment",
];

// Create a mapping from tag name to a color class.
// This ensures that each tag always gets the same color, but the colors are distributed.
export const TAG_COLORS: { [key: string]: string } = {};
allUniqueTags.forEach((tag, index) => {
  TAG_COLORS[tag] = colorPalette[index % colorPalette.length];
});

// A fallback color for any tags that might not be in the list.
export const FALLBACK_TAG_COLOR = 'bg-gray-100 text-gray-800';
