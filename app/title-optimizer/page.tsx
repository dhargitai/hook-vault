// app/title-optimizer/page.tsx
'use client';

import React from 'react';

// Data for the Title Optimizer Page
const fundamentalsChecklist = [
  "<b>Delivers the Promise:</b> The main benefit/viewer result is front and center.",
  "<b>Closes the Loop</b> (If You Open One): If the hook is a question or tease, your content delivers a clear answer.",
  "<b>Is Specific, Not Generic:</b> Quantify (numbers, timeframes), name names (platforms, tools, audiences), and call out milestones.",
  "<b>Uses Natural Language:</b> Titles that feel like real speech perform better than ‘ad speak.’",
  "<b>Highlights “Who” It’s For:</b> When possible, mention the target group for personalization or relatability.",
  "<b>Avoids Hype Words Unless Justified:</b> Words like ‘insane,’ ‘shocking,’ ‘crazy’ must be backed by ultra-relevant content.",
];

const powerTitleFormulas = {
  "A. \"What/Why/How\"-Driven Formulas": [
    { title: "How to [Win/Result] Even If [Common Obstacle]", example: "How to Grow on YouTube Even If You Have Zero Subscribers" },
    { title: "Why [Common Advice] Actually Holds You Back", example: "Why Posting Daily Might KILL Your Channel’s Growth" },
    { title: "What Happens When You [Do Challenge/Process] for [Timeframe]?", example: "What Happened When I Posted Shorts Every Day for 30 Days?" },
    { title: "How I [Impressive Result]—and What I’d Do Differently", example: "How I Hit 10K Subscribers—And The Mistake I Made Along The Way" },
  ],
  "B. Result/Metric + Tension Formulas": [
    { title: "The [X] Mistakes Killing Your [Result/Goal]", example: "The 3 Mistakes Killing Your Video Engagement" },
    { title: "The #1 Reason You’re Not [Achieving Result] (And What To Do About It)", example: "The #1 Reason You’re Not Landing High-Paying Clients (And How To Fix It)" },
    { title: "The Surprising Way I [Achieved Result]", example: "The Surprising Trick That Doubled My Watch Time" },
  ],
  "C. Timely & FOMO Formulas": [
    { title: "Don't [Common Action] Until You Watch This", example: "Don’t Make Your Next Video Until You Watch This" },
    { title: "[Year/Trend]: [Big Promise or Lesson]", example: "2025 YouTube Growth Playbook: What’s Changed and What Still Works" },
    { title: "Do This Before [Milestone/Deadline]", example: "Do This Before You Launch Your First Video" },
  ],
  "D. Community/Identity & Challenge Formulas": [
    { title: "[Group/Identity]: Are You Making This Mistake?", example: "New Creators: Are You Making This Hook Mistake?" },
    { title: "Who Else Wants [Result/Transformation]?", example: "Who Else Wants Client-Booking Intros For Their Videos?" },
    { title: "Can You Guess What Happened When I [Did X]?", example: "Can You Guess What Happened When I Stopped Editing My Videos?" },
  ],
  "E. Before/After, Reveal, and Social Proof Formulas": [
    { title: "From [Starting Point] to [Result]: My [Timeframe] Transformation", example: "From Zero to 5K Subs: My 60-Day Journey" },
    { title: "I Tried [Tool/Strategy] So You Don’t Have To—Here’s What Happened", example: "I Tried Viral Hook Templates So You Don’t Have To—My Honest Review" },
    { title: "[Influencer/Expert]'s Advice Was WRONG About [Topic]—Here’s Proof", example: "MrBeast’s Advice Was WRONG About Video Hooks—Here’s Proof" },
  ],
};

const dosAndDonts = {
  "DO:": [
    "Use numbers and specifics (“5 Hooks That 10x’d My Views”)",
    "Reference time frames (“What Changed In 30 Days ...”)",
    "Signal a transformation or solution (“…and the mistake I made that almost ruined it”)",
    "Use keywords/search intent (think like your audience: \"How to...\" \"Best way to...\" \"Why does X…\")",
    "Curate for target audience (\"For New Coaches\" | \"If You’re Over 40\")",
    "Pair title with your thumbnail for a single, clear promise",
  ],
  "DON’T:": [
    "Stack too many buzzwords or all caps (“AMAZING SECRET INSANE VIDEO HOOKS”)",
    "Make empty promises (“Instant Viral Hacks!”—unless truly backed up in the video by results)",
    "Use long run-on sentences—punchy and readable wins",
    "Try to “hide” the value with vagueness (“Watch This!”)",
    "Overpromise results you know most people absolutely won’t get",
  ],
};

const refinementQuestions = [
  "Does this instantly tell my target viewer “this video is for you”?",
  "If I read only this title, would I know the #1 value/takeaway?",
  "Would a competitor, audience member, or stranger know exactly what will be covered?",
  "Is this clickable AND credible?",
  "Can I defend the claim/result/lesson I promise here?",
];

const algorithmTips = [
  "<b>Front-load the benefit.</b> The first 3–5 words appear almost everywhere in the feed.",
  "<b>For Search:</b> Make the “How to,” “Why,” or “Best” clear, and echo target phrases your audience is using.",
  "<b>For Suggested/Browse:</b> Lean on curiosity, drama, emotional or identity hooks.",
  "<b>Test relevance with the “fast scroll.”</b> Read your title in the context of similar videos—does it actually stand out but still belong?",
  "<b>Pair with Thumbnail:</b> Don’t duplicate the exact message; create a “1+1=3” effect.",
];

const upgradeExamples = [
  { before: "Video Hooks That Work", after: "5 Proven Hooks That Turn Your Next Video Into a Client Magnet" },
  { before: "My Advice For Coaches", after: "The #1 Script Mistake Killing Your Coaching Sales (And the Fix)" },
  { before: "Watch Me Try [challenge]", after: "I Tried Posting Shorts Every Day—Here’s The Truth They Don’t Tell You" },
];

const splitTesting = {
  template: "How to [achieve result] in [time period/without pain point] (Proven/Case Study)",
  tip: "Try 2-3 title variations for the same video when possible, especially on YouTube (“A/B Experiment” feature).",
  use: "Use comments, retention, and watch time to tell you which title (and hook) actually delivers quality viewers.",
};

const summaryCheatSheet = {
  points: [
    "Clear, Specific Benefit",
    "Curiosity or FOMO Loop (if fitting)",
    "Identity or Social Proof (if possible)",
    "Natural Language",
    "No Bait & Switch—EVER",
  ],
  question: "Does my title make the right person STOP, see themselves, and feel “I can’t miss this…and I trust it’s real”?",
};

// Helper component for styled list items
const ChecklistItem: React.FC<{ children: string }> = ({ children }) => (
  <li className="flex items-start">
    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center mr-4 mt-1">
      <svg className="h-4 w-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
    </div>
    <span className="text-lg text-zinc-700" dangerouslySetInnerHTML={{ __html: children }} />
  </li>
);

// Helper component for main content sections
const ContentSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-solid border-zinc-200">
    <h2 className="text-3xl font-bold mb-8 text-zinc-800">{title}</h2>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

export default function TitleOptimizerPage() {
  return (
    <div className="bg-slate-50 text-zinc-800 min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900">Title Optimizer</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600">
            Craft irresistible titles that stop the scroll and drive clicks.
          </p>
        </div>

        <div className="space-y-16">
          <ContentSection title="1. Title Fundamentals Checklist">
            <p className="mb-6 text-lg text-zinc-600">Before optimizing, ensure your title:</p>
            <ul className="space-y-4">
              {fundamentalsChecklist.map((item, index) => <ChecklistItem key={index}>{item}</ChecklistItem>)}
            </ul>
          </ContentSection>

          <ContentSection title="2. The Power Title Formula Library">
            {Object.entries(powerTitleFormulas).map(([subtitle, formulas]) => (
              <div key={subtitle} className="pt-4">
                <h3 className="text-2xl font-bold mb-6 text-zinc-800 border-b border-zinc-200 pb-3">{subtitle}</h3>
                <div className="space-y-6">
                  {formulas.map((formula, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-semibold text-zinc-700">{formula.title}</h4>
                      <p className="text-md text-zinc-600 mt-2 pl-4 border-l-4 border-indigo-500 bg-slate-100 p-4 rounded-r-lg">
                        <span className="font-semibold text-zinc-800">Example:</span> {formula.example}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </ContentSection>

          <ContentSection title="3. Dos & Don’ts for High-Conversion Titles">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">DO:</h3>
                <ul className="space-y-3">
                  {dosAndDonts['DO:'].map((item, index) => <li key={index} className="flex items-start"><span className="text-green-500 mr-3 font-bold text-xl">✓</span><span className="text-zinc-700">{item}</span></li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-red-600">DON’T:</h3>
                <ul className="space-y-3">
                  {dosAndDonts['DON’T:'].map((item, index) => <li key={index} className="flex items-start"><span className="text-red-500 mr-3 font-bold text-xl">✗</span><span className="text-zinc-700">{item}</span></li>)}
                </ul>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="4. Title Refinement Questions">
            <ul className="space-y-4">
              {refinementQuestions.map((item, index) => <ChecklistItem key={index}>{item}</ChecklistItem>)}
            </ul>
          </ContentSection>

          <ContentSection title="5. Algorithm Smart: YouTube & Reels Title Bonus Tips">
            <ul className="space-y-4">
              {algorithmTips.map((item, index) => <ChecklistItem key={index}>{item}</ChecklistItem>)}
            </ul>
          </ContentSection>
          
          <ContentSection title="6. Instant Title Upgrade Examples">
            <div className="space-y-6">
              {upgradeExamples.map((ex, index) => (
                <div key={index} className="relative p-5 border border-zinc-200 rounded-lg bg-slate-50">
                  <p className="text-sm font-semibold text-zinc-500 tracking-wide uppercase">BEFORE:</p>
                  <p className="text-md text-zinc-600 mb-3 italic">“{ex.before}”</p>
                  <p className="text-sm font-semibold text-green-600 tracking-wide uppercase">AFTER:</p>
                  <p className="text-lg font-semibold text-zinc-800">“{ex.after}”</p>
                </div>
              ))}
            </div>
          </ContentSection>

          <ContentSection title="7. Customization & Split Testing">
            <div className="space-y-5 text-lg text-zinc-700">
              <p><span className="font-bold text-zinc-800">Template:</span> {splitTesting.template}</p>
              <p><span className="font-bold text-zinc-800">Tip:</span> {splitTesting.tip}</p>
              <p className="italic text-zinc-600">{splitTesting.use}</p>
            </div>
          </ContentSection>

          <div className="bg-indigo-800 text-indigo-50 p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Summary Cheat Sheet</h2>
            <ul className="space-y-3 list-disc list-inside text-lg">
              {summaryCheatSheet.points.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <hr className="my-6 border-indigo-600" />
            <p className="text-lg font-semibold">Question before you publish:</p>
            <p className="text-xl italic mt-2">“{summaryCheatSheet.question}”</p>
          </div>

        </div>
      </main>
    </div>
  );
}
