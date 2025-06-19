// components/swipe/HooksCheatsheet.tsx
'use client';

import React from 'react';

// A palette of accent colors for icons and borders
const accentColors = [
  'text-indigo-500',
  'text-rose-500',
  'text-amber-500',
  'text-teal-500',
  'text-sky-500',
];

const borderColors = [
  'border-indigo-500',
  'border-rose-500',
  'border-amber-500',
  'border-teal-500',
  'border-sky-500',
];

// Helper component for section headers with icons
const SectionHeader: React.FC<{ icon: React.ReactNode; title: string; colorClass: string }> = ({ icon, title, colorClass }) => (
  <div className="flex items-center mb-6">
    {/* <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${colorClass.replace('text-', 'bg-')}/10`}>
      {React.cloneElement(icon as React.ReactElement, { className: `w-7 h-7 ${colorClass}` })}
    </div> */}
    <h2 className="text-3xl font-bold text-zinc-800">{title}</h2>
  </div>
);

// Helper component for framework/trigger items
const DefinitionItem: React.FC<{ title: string; children: React.ReactNode; example?: string; borderColorClass: string }> = ({ title, children, example, borderColorClass }) => (
  <div>
    <h3 className="text-xl font-semibold text-zinc-700">{title}</h3>
    <p className="mt-2 text-lg text-zinc-600">{children}</p>
    {example && <p className={`mt-3 text-md text-zinc-700 italic p-4 bg-slate-50 border-l-4 rounded-r-md ${borderColorClass}`}><span className="font-semibold not-italic text-zinc-800">Example:</span> {example}</p>}
  </div>
);

// Helper component for Q&A items
const QaItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <div className="p-4 bg-slate-50 rounded-lg">
    <p className="text-lg font-semibold text-zinc-800">Q: {question}</p>
    <p className="mt-1 text-lg text-zinc-600">A: {answer}</p>
  </div>
);

export function HooksCheatsheet() {
  return (
    <div className="mt-20 bg-white text-zinc-800 p-8 md:p-12 rounded-xl shadow-xl border border-zinc-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-zinc-900">Frameworks Cheatsheet</h1>
            <p className="text-xl text-zinc-600 mt-4 max-w-3xl mx-auto">
              Use this guide to clarify core terms, frameworks, and targeting insights—so you always know <em>why</em> a hook works.
            </p>
        </div>

        <div className="space-y-16">
          <section>
            <SectionHeader 
              title="1. Frameworks Explained" 
              colorClass={accentColors[0]}
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h4.5M15 3h4.5a2.25 2.25 0 012.25 2.25" /></svg>}
            />
            <div className="space-y-8">
              <DefinitionItem title="PAS – Problem–Agitate–Solution" example="Struggling to grow on YouTube? It’s probably not your content. Here’s why—and how to fix it fast." borderColorClass={borderColors[0]}>
                Pinpoint a real problem, amplify the pain or consequences, THEN offer your solution as the fix.
              </DefinitionItem>
              <DefinitionItem title="Contrarian / Myth-Busting" example="Why “niching down” is killing new creators—and what you should do instead." borderColorClass={borderColors[0]}>
                Challenge something “everyone” believes; instantly sets you apart and builds trust with skeptics.
              </DefinitionItem>
              <DefinitionItem title="Quick Win" example="This tiny tweak doubled my open rate overnight." borderColorClass={borderColors[0]}>
                Promise a fast, actionable result or improvement.
              </DefinitionItem>
              <DefinitionItem title="Story / Vulnerability" example="I almost quit video making, but then this happened…" borderColorClass={borderColors[0]}>
                Share a personal experience—especially a struggle, failure, or emotional moment.
              </DefinitionItem>
              <DefinitionItem title="Authority / Social Proof" example="I interviewed 7 experts—these were their best-kept secrets." borderColorClass={borderColors[0]}>
                Reference social results, expert opinions, or big numbers.
              </DefinitionItem>
            </div>
          </section>

          <section>
            <SectionHeader 
              title="2. Psychological Triggers" 
              colorClass={accentColors[1]}
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a7.5 7.5 0 01-7.5 0c-1.255 0-2.443.29-3.5.832a7.5 7.5 0 01-7.5 0c-1.255 0-2.443.29-3.5.832m21 0a7.5 7.5 0 01-7.5 0c-1.255 0-2.443.29-3.5.832a7.5 7.5 0 01-7.5 0c-1.255 0-2.443.29-3.5.832M12 6.75h.008v.008H12V6.75z" /></svg>}
            />
            <div className="space-y-8">
              <DefinitionItem title="Curiosity" borderColorClass={borderColors[1]}>
                Makes viewers <em>need</em> to know the answer or next step.
                <br />
                <span className="text-zinc-500"><em>Words to look for:</em> “You won’t believe…”, “The truth about…”, “What happened next…”</span>
              </DefinitionItem>
              <DefinitionItem title="Belief Bridge" example="“If you felt stuck with [pain], you’re not alone.”" borderColorClass={borderColors[1]}>
                Gently guides the audience from their current skepticism to a more empowered perspective.
              </DefinitionItem>
              <DefinitionItem title="Vanity / Aspiration" example="“How top creators go viral—without copying trends.”" borderColorClass={borderColors[1]}>
                Appeals to self-image, status, or the desire to be seen as smart, successful, etc.
              </DefinitionItem>
              <DefinitionItem title="Inclusion / Belonging" example="“If you’re a coach struggling with sales calls, this is for you.”" borderColorClass={borderColors[1]}>
                Speaks directly to identity and creates a sense of “this is for people like me.”
              </DefinitionItem>
              <DefinitionItem title="FOMO (Fear of Missing Out)" example="“Don’t post another video without watching this.”" borderColorClass={borderColors[1]}>
                Highlights what could be lost or missed by not acting.
              </DefinitionItem>
            </div>
          </section>

          <section>
            <SectionHeader 
              title="3. Audience Stages" 
              colorClass={accentColors[2]}
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.968.08l-2.185.874a1.5 1.5 0 01-1.6.12L13.5 18M3.375 19.5a3 3 0 012.75-2.582m16.875-3.582a3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.968.08l-2.185.874a1.5 1.5 0 01-1.6.12L13.5 18m-9.375 1.5a3.75 3.75 0 015.968.08l-2.185.874a1.5 1.5 0 01-1.6.12l-1.8-1.8a3.75 3.75 0 01-.6-3.063m16.875-3.582a3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.968.08l-2.185.874a1.5 1.5 0 01-1.6.12L13.5 18M3.375 19.5a3 3 0 012.75-2.582m4.5-6a3.75 3.75 0 015.968.08l-2.185.874a1.5 1.5 0 01-1.6.12l-1.8-1.8a3.75 3.75 0 01-.6-3.063m9.375 9.375a3.75 3.75 0 01-5.968-.08l2.185-.874a1.5 1.5 0 011.6-.12l1.8 1.8a3.75 3.75 0 01.6 3.063m-9.375-9.375a3.75 3.75 0 015.968.08l-2.185.874a1.5 1.5 0 01-1.6.12L13.5 18" /></svg>}
            />
            <p className="text-lg text-zinc-600 mb-6">Understanding audience readiness helps you select the right hook/CTA.</p>
            <ul className="space-y-4 text-lg">
              <li><strong className="font-semibold text-zinc-800">Cold:</strong> <span className="text-zinc-600">New or just discovered you. They need clarity, credibility, and emotional resonance fast.</span></li>
              <li><strong className="font-semibold text-zinc-800">Warm:</strong> <span className="text-zinc-600">Know you a bit—may follow, engage, or lurk, but haven’t taken a big action yet.</span></li>
              <li><strong className="font-semibold text-zinc-800">Hot:</strong> <span className="text-zinc-600">Fans or leads who trust you and are already primed for offers, signups, or sales.</span></li>
            </ul>
            <div className={`mt-6 bg-slate-50 p-4 rounded-lg border-l-4 ${borderColors[2]}`}>
              <h4 className="font-semibold text-xl text-zinc-800">Tip:</h4>
              <ul className="list-disc list-inside mt-2 space-y-2 text-lg text-zinc-600">
                <li><strong>Cold:</strong> Use simple, bold claims and quick wins—don’t assume deep trust yet.</li>
                <li><strong>Warm:</strong> Invite to go deeper (try a new process, comment, join a list).</li>
                <li><strong>Hot:</strong> Strong call to actions, enrollments, or higher-ticket asks.</li>
              </ul>
            </div>
          </section>

          <section>
            <SectionHeader 
              title="4. Common Questions" 
              colorClass={accentColors[3]}
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>}
            />
            <div className="space-y-6">
              <QaItem question="Can I combine frameworks?" answer="YES! Many great hooks do—e.g., “Problem–Authority–Quick Win.”" />
              <QaItem question="What if my results aren’t big yet?" answer="Use story/vulnerability, “before and after,” or social proof from micro-wins (“I finally landed that first client”)." />
              <QaItem question="How much should I personalize?" answer="Always swap in audience-specific pain points, niches, or results! A hook that says “for coaches” will outperform one that says “for anyone.”" />
              <QaItem question="Should every hook be dramatic or surprising?" answer="No. A well-executed, sincerely useful tip or relatable story is sometimes more trustworthy—especially for warm/hot audiences." />
            </div>
          </section>

          <section>
            <SectionHeader 
              title="5. Upgrade Your Hooks" 
              colorClass={accentColors[4]}
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-4.991-2.691L7.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            />
            <ul className="list-disc list-inside space-y-3 text-lg text-zinc-600">
              <li>Swap the [bracketed text] for your niche’s biggest pain, win, or myth.</li>
              <li>Test your hook aloud—does it sound like something you’d say to a friend?</li>
              <li>Always check your final content DELIVERS on the hook you chose. Earning trust &gt; earning a single click.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
