// types/index.ts

// Defines the structure for a single hook item.
export interface Hook {
  id: number;
  hook: string;
  framework_tags: string[];
  psychological_triggers: string[];
  ideal_video_types: string[];
  best_for_audience_stages: string[];
  customization_note: string;
  quick_tips: string;
}

// Defines the structure for a single CTA item.
export interface Cta {
  id: number;
  cta: string;
  trigger_types: string[];
  ideal_placements: string[];
  audience_stages: string[];
}
