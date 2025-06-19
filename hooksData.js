const hooks = [
  {
    "hook": "The #1 mistake killing your [goal] (and how to fix it fast)",
    "framework_tags": ["PAS"],
    "psychological_triggers": ["Curiosity", "Belief Bridge"],
    "ideal_video_types": ["Tip", "Educational", "Tutorial", "Ad"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap [goal] for your niche’s main desire—e.g., “fitness progress,” “sales calls,” “short-form video reach”",
    "quick_tips": "Use a bold on-screen graphic or voiceover to underline the “#1 mistake”; immediately tease the solution for fast pacing."
  },
  {
    "hook": "You’re losing 80% of your viewers in the first 10 seconds—here’s why.",
    "framework_tags": ["Story", "Contrarian"],
    "psychological_triggers": ["Pain", "Fear of Loss", "Authority"],
    "ideal_video_types": [
      "Retention Analysis",
      "Behind-the-Scenes",
      "Ad",
      "Case Study"
    ],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Use real stats for credibility – adjust % if your analytics show a different figure.",
    "quick_tips": "Show a retention graph or quick example of a video dropping off; pair with energetic delivery to create urgency."
  },
  {
    "hook": "I did [challenge] for 30 days—here’s what happened.",
    "framework_tags": ["Story", "Challenge"],
    "psychological_triggers": ["Curiosity", "FOMO"],
    "ideal_video_types": ["Challenge", "Vlog", "Transformation", "Documentary"],
    "best_for_audience_stages": ["Cold", "Warm", "Hot"],
    "customization_note": "Swap [challenge] for a trend, habit, or result relevant to your audience (“cold showers,” “$0 ad spend,” “posting daily”).",
    "quick_tips": "Use high-energy B-roll and “before”/“after” moment early; set up the question, “Would you get the same result?” in the intro."
  },
  {
    "hook": "Most [your audience] are doing this wrong—are you?",
    "framework_tags": ["Contrarian", "Challenge"],
    "psychological_triggers": ["Vanity", "Curiosity", "Belonging"],
    "ideal_video_types": ["Myth-Busting", "Tutorial", "Rant", "Listicle"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap [your audience] for a clear group (“new YouTubers,” “remote workers,” “first-time parents”).",
    "quick_tips": "Insert a quick montage of “common mistake” clips, then pause for self-reflection (“Are YOU making this mistake?”)."
  },
  {
    "hook": "I wish I knew this before I started [activity].",
    "framework_tags": ["Story", "Vulnerability"],
    "psychological_triggers": ["Believability", "Warm Authority"],
    "ideal_video_types": ["Personal Story", "Lessons Learned", "Testimonial"],
    "best_for_audience_stages": ["Warm", "Hot"],
    "customization_note": "Swap [activity] for your field/journey (“freelancing,” “YouTube,” “selling online courses”).",
    "quick_tips": "Open with a scene showing you struggling, followed by the realization; be authentic and specific to raise trust."
  },
  {
    "hook": "Why your [effort] isn’t working (and what to do instead)",
    "framework_tags": ["PAS"],
    "psychological_triggers": ["Curiosity", "Pain", "Relief"],
    "ideal_video_types": ["Tip", "Educational", "Tutorial", "Ad"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap [effort] for the main action your audience is taking (e.g., “Instagram posts,” “workout routine,” “lead generation emails”).",
    "quick_tips": "Pair with a visual of disappointing or stagnant results, then tease the new approach clearly before going deep."
  },
  {
    "hook": "The surprising truth about [common belief in your niche].",
    "framework_tags": ["Contrarian"],
    "psychological_triggers": ["Curiosity", "Authority"],
    "ideal_video_types": ["Myth-Busting", "Thought Leadership", "Rant"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap [common belief] for a statement your target audience believes but that you’ll challenge (“more content = more growth”).",
    "quick_tips": "Lead with a strong visual or stat that flips expectations; use a confident, conversational tone to invite open-mindedness."
  },
  {
    "hook": "What nobody tells you about [unspoken topic/problem].",
    "framework_tags": ["Reveal", "Authority"],
    "psychological_triggers": [
      "Curiosity",
      "Belief Bridge",
      "Fear of Missing Out"
    ],
    "ideal_video_types": ["Tips", "Story", "Deep Dive", "Vulnerable Share"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap [unspoken topic/problem] for a pain point that feels “taboo” or rarely discussed publicly (“burnout in entrepreneurship,” “hidden YouTube rules”).",
    "quick_tips": "Speak in a low, honest tone to convey secrecy; set the scene as if you’re letting viewers in on an “insider secret.”"
  },
  {
    "hook": "I spent $X on [strategy/tool], and here’s what I learned.",
    "framework_tags": ["Story", "Authority"],
    "psychological_triggers": ["Curiosity", "Social Proof"],
    "ideal_video_types": ["Case Study", "Tool Review", "Challenge"],
    "best_for_audience_stages": ["Cold", "Warm", "Hot"],
    "customization_note": "Swap $X and [strategy/tool] for a real (or attention-grabbing fake) number and niche tool/hack (“$1,000 on ads,” “$20 self-editing software”).",
    "quick_tips": "Show receipts, dashboards, or real evidence early; mention upfront if the lesson surprised you—hooks even more curiosity."
  },
  {
    "hook": "Can you guess the result of [wild experiment]?",
    "framework_tags": ["Challenge", "Curiosity"],
    "psychological_triggers": ["Curiosity", "Playfulness"],
    "ideal_video_types": ["Walkthrough", "Transformation", "Experiment"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap [wild experiment] for something unusual and unexpected in your field (“posting 6 times a day for a week,” “no coffee for 30 days”).",
    "quick_tips": "Invoke interactive “pause and guess” moments; tease unexpected outcomes subtly in thumbnail/title for added intrigue."
  },
  {
    "hook": "I almost quit, but then this happened...",
    "framework_tags": ["Story", "Vulnerability"],
    "psychological_triggers": ["Believability", "Curiosity", "Empathy"],
    "ideal_video_types": [
      "Personal Story",
      "Transformation",
      "Behind-the-Scenes"
    ],
    "best_for_audience_stages": ["Warm", "Hot"],
    "customization_note": "Use any pivotal struggle or moment from your journey (business, fitness, content creation, etc.).",
    "quick_tips": "Open with emotional visuals or a “raw” scene; pause after “but then…” to spike curiosity before revealing the turnaround."
  },
  {
    "hook": "Struggling to [outcome]? Here’s why—no one talks about this.",
    "framework_tags": ["PAS"],
    "psychological_triggers": ["Pain", "Relief", "Curiosity", "Insider Secret"],
    "ideal_video_types": ["Tips", "Tutorial", "Myth-Busting", "Story"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap [outcome] for your audience’s main goal (e.g., “grow your channel,” “close more sales,” “lose weight”).",
    "quick_tips": "Mirror the audience’s frustration early; use a bold statement (“You’re not alone—almost everyone hits this wall.”) to build trust."
  },
  {
    "hook": "The fastest way to [desirable result]—even if you’re a total beginner.",
    "framework_tags": ["Quick Win", "Contrarian"],
    "psychological_triggers": ["Hope", "Inclusion", "Curiosity"],
    "ideal_video_types": ["Tutorial", "Educational", "Listicle"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap [desirable result] for the main achievement in your field (e.g., “get clients,” “edit videos fast,” “get abs”).",
    "quick_tips": "Use quick-hit visuals like progress bars or clocks; stress that nothing “special” is required except the process you share."
  },
  {
    "hook": "Here’s the painful reason you’re not seeing results from [routine/method].",
    "framework_tags": ["PAS"],
    "psychological_triggers": ["Pain", "Curiosity", "Belief Bridge"],
    "ideal_video_types": ["Tips", "Tutorial", "Deep Dive"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap [routine/method] for any repeated activity your audience is stuck on (“posting daily,” “cold emailing,” “workouts”).",
    "quick_tips": "Show an example of failed attempts; tease the core mistake or hidden obstacle for maximum click appeal before revealing the fix."
  },
  {
    "hook": "What would you do if you could start again? Here’s my answer.",
    "framework_tags": ["Story", "Challenge", "Thought Experiment"],
    "psychological_triggers": ["Curiosity", "Authority", "Vulnerability"],
    "ideal_video_types": ["Storytime", "Expert Advice", "Q&A"],
    "best_for_audience_stages": ["Warm", "Hot"],
    "customization_note": "Personalize to your industry/position (“with everything I know now about…,” “if I lost my job today…”).",
    "quick_tips": "Start with a “flashback” or time-travel visual, use introspection and honesty to quickly connect with viewers’ own what-ifs."
  },
  {
    "hook": "Stop wasting time on [common action]. Do this instead.",
    "framework_tags": ["PAS", "Contrarian"],
    "psychological_triggers": ["Pain", "Relief", "Curiosity"],
    "ideal_video_types": ["Tutorial", "Tips", "Productivity", "Myth-Busting"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap [common action] for a well-known but ineffective routine in your niche (“hashtag research,” “cold calls,” “counting calories”)",
    "quick_tips": "Start with a rapid-fire montage of the wasted action, then hit with “Do this instead” and a visual demonstration of your shortcut/fix."
  },
  {
    "hook": "[Influencer/Expert] was wrong about [topic]—let me show you the truth.",
    "framework_tags": ["Contrarian", "Authority"],
    "psychological_triggers": [
      "Status",
      "Controversy",
      "Curiosity",
      "Social Proof"
    ],
    "ideal_video_types": [
      "Hot Take",
      "Analysis",
      "Thought Leadership",
      "Reaction"
    ],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Use a real influencer in your field (or combine several popular opinions); swap [topic] for a common best practice or belief.",
    "quick_tips": "Lead with a quote or clip from the influencer, then cut to your face for strong opinion—be respectful but bold for maximum interest."
  },
  {
    "hook": "The step-by-step guide I wish I had when I was starting.",
    "framework_tags": ["Story", "Educational", "Authority"],
    "psychological_triggers": ["Warmth", "Believability", "Hope"],
    "ideal_video_types": ["Guide", "Listicle", "Personal Story", "Tutorial"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Tailor the guide to your expertise area and audience (“coaching business,” “video editing,” “freelancing on Upwork”).",
    "quick_tips": "Use authentic “then vs. now” visuals; share at least one step most people overlook for added perceived value."
  },
  {
    "hook": "How I got [impressive result]—and the mistake I made along the way.",
    "framework_tags": ["Story", "Authority", "Vulnerability"],
    "psychological_triggers": ["Social Proof", "Relatability", "Curiosity"],
    "ideal_video_types": ["Case Study", "Story", "Personal Journey"],
    "best_for_audience_stages": ["Warm", "Hot"],
    "customization_note": "Swap [impressive result] for any quantifiable win (“my first $10K month,” “100K YouTube subs,” “lost 50 lbs”); highlight a real, memorable mistake.",
    "quick_tips": "Tease the mistake early (don’t wait until the end); use real screenshots, graphs, or before/after to boost credibility."
  },
  {
    "hook": "This tiny tweak doubled my [metric] overnight.",
    "framework_tags": ["Quick Win"],
    "psychological_triggers": ["Curiosity", "FOMO", "Hope"],
    "ideal_video_types": ["Tips", "Tutorial", "Growth Hack", "Productivity"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap [metric] for a number your audience cares about (“email open rate,” “views,” “sales calls booked”).",
    "quick_tips": "Show the “before” and “after” results with visuals immediately; make the tweak simple and actionable so viewers feel empowered."
  },
  {
    "hook": "Think you’ve tried everything? Think again.",
    "framework_tags": ["Challenge", "Curiosity"],
    "psychological_triggers": ["Curiosity", "FOMO", "Hope"],
    "ideal_video_types": ["Tips", "Tutorial", "Myth-Busting", "Challenge"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Works for any niche where people are frustrated with lack of results; tailor follow-up to a unique or rarely-shared approach.",
    "quick_tips": "Use rapid “failed attempts” montage, then pause dramatically before introducing your new method."
  },
  {
    "hook": "How to get [result] without [thing everyone hates].",
    "framework_tags": ["How-To", "Quick Win", "Contrarian"],
    "psychological_triggers": ["Hope", "Relief", "Curiosity"],
    "ideal_video_types": ["Tutorial", "Educational", "Listicle", "Explainer"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap [result] and [thing everyone hates] for your audience’s major goal and big frustration (“leads without cold calls”, “abs without crunches”).",
    "quick_tips": "Use bold on-screen titles contrasting the “painful way” vs. your shortcut, and show a clear A-to-B transformation."
  },
  {
    "hook": "My controversial opinion on [hot topic]: [statement]",
    "framework_tags": ["Contrarian", "Authority", "Thought Leadership"],
    "psychological_triggers": ["Status", "Curiosity", "Identity"],
    "ideal_video_types": ["Hot Take", "Rant", "Analysis", "Commentary"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Select [hot topic] that is actively debated in your niche; form a sharp, memorable stance for [statement].",
    "quick_tips": "Open with “Unpopular Opinion” text or warning; quickly back your stance with data, case studies, or emotional reasoning."
  },
  {
    "hook": "POV: You’ve tried it all, but nothing’s working—watch this.",
    "framework_tags": ["Story", "Challenge", "Empathy"],
    "psychological_triggers": ["Curiosity", "Relatability", "Hope"],
    "ideal_video_types": ["POV", "Story", "Relatable", "Motivational"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Frame for viewers who are burnt out or disillusioned; personalize visuals to common struggles in your field.",
    "quick_tips": "Use direct-to-camera empathy and pacing—let the viewer “feel seen” in the first few seconds before showing your breakthrough."
  },
  {
    "hook": "If you felt stuck with [pain point], you’re not alone.",
    "framework_tags": ["Vulnerability", "Belief Bridge", "Empathy"],
    "psychological_triggers": ["Belonging", "Relief", "Curiosity"],
    "ideal_video_types": [
      "Story",
      "Inspirational",
      "Problem",
      "Solution",
      "Testimonial"
    ],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap [pain point] for anything your audience struggles with (“low engagement,” “finding clients,” “burnout”).",
    "quick_tips": "Start with a relatable personal or community story; reinforce solidarity and offer a glimpse of solution or hope by the end of the hook."
  },
  {
    "hook": "Here’s why most [your audience] fail—and how to avoid it.",
    "framework_tags": ["PAS", "Authority"],
    "psychological_triggers": ["Fear of Failure", "Relief", "Curiosity"],
    "ideal_video_types": ["Educational", "Tips", "Listicle", "Analysis"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Replace [your audience] with your core group (“coaches,” “new freelancers,” “beginner creators”).",
    "quick_tips": "Use social proof/statistics to quickly show most do fail, then tease the coming solution very directly."
  },
  {
    "hook": "Ever wondered how [experts] get ahead? Let me show you.",
    "framework_tags": ["Authority", "Social Proof", "Curiosity"],
    "psychological_triggers": ["Aspiration", "Curiosity", "Belonging"],
    "ideal_video_types": ["Tutorial", "Analysis", "Motivational", "Story"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap [experts] for reputable figures in your field (“6-figure creators,” “top closers,” “elite athletes”).",
    "quick_tips": "Start with a split-screen or montage of expert highlights, then transition to “pulling back the curtain” on their methods."
  },
  {
    "hook": "Every ‘pro’ tells you this—but here’s what actually works.",
    "framework_tags": ["Contrarian", "Myth-Busting", "Authority"],
    "psychological_triggers": ["Status", "Curiosity", "Relief"],
    "ideal_video_types": ["Rant", "Deep Dive", "How-To", "Analysis"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Use “pro” as a stand-in for gurus/influencers/industry leaders—call out a common piece of advice to challenge.",
    "quick_tips": "Open with a quick summary of the “common advice,” then use a pattern-break (your solution) with proof/story."
  },
  {
    "hook": "Try this for just one week and thank me later.",
    "framework_tags": ["Challenge", "Quick Win", "Social Proof"],
    "psychological_triggers": ["Curiosity", "FOMO", "Hope"],
    "ideal_video_types": ["Tips", "Challenge", "How-To", "Case Study"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Customize “just one week” and “this” for your niche—fast experiment, habit, or growth tactic works best.",
    "quick_tips": "Use a call-to-action in description/pinned comment for users to share their own results after a week—build community fast."
  },
  {
    "hook": "Here’s the critical thing nobody prepared me for.",
    "framework_tags": ["Vulnerability", "Story", "Revelation"],
    "psychological_triggers": ["Curiosity", "Empathy", "Belief Bridge"],
    "ideal_video_types": [
      "Story",
      "Lessons-Learned",
      "Tutorial",
      "Behind the Scenes"
    ],
    "best_for_audience_stages": ["Warm", "Hot"],
    "customization_note": "Works for any moment of transition or struggle—launch, first failure, big win.",
    "quick_tips": "Start with tense, honest storytelling (“I thought I was ready, and then...”), then immediately share the “critical thing.”"
  },
  {
    "hook": "You won’t believe what happened when I changed just this ONE thing.",
    "framework_tags": ["Story", "Curiosity", "Teaser"],
    "psychological_triggers": ["Curiosity", "Surprise", "FOMO"],
    "ideal_video_types": [
      "Transformation",
      "Before",
      "After",
      "Case Study",
      "Vlog"
    ],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "“ONE thing” can be process, mindset, tool, or routine specific to your audience (“content upload time,” “daily routine,” etc.)",
    "quick_tips": "Use a dramatic “before/after” or stat visual; pause before the reveal to heighten intrigue and boost retention."
  },
  {
    "hook": "Are you making these 3 deadly mistakes?",
    "framework_tags": ["PAS", "Challenge"],
    "psychological_triggers": ["Fear", "Curiosity", "Inclusion"],
    "ideal_video_types": ["Checklist", "Listicle", "Tutorial", "Educational"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Customize “deadly mistakes” to your topic (health, sales, content, etc.) and consider linking to a downloadable checklist.",
    "quick_tips": "Use quick cuts or graphics showing the mistakes, then walk through fixes; invite viewer reflection (“Which mistake surprises you?”)"
  },
  {
    "hook": "Why [commonly accepted advice] is holding you back.",
    "framework_tags": ["Contrarian", "Myth-Busting"],
    "psychological_triggers": ["Curiosity", "Relief", "Belief Bridge"],
    "ideal_video_types": ["Tutorial", "Analysis", "Rant", "Deep Dive"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Replace [commonly accepted advice] with a widespread tip or mantra in your field (“niche down,” “post daily,” “always multitask”).",
    "quick_tips": "Show evidence (your data or client results) to debunk the advice early; position your alternative as the “hidden unlock.”"
  },
  {
    "hook": "The exact blueprint I used to go from [zero] to [result].",
    "framework_tags": ["Authority", "Social Proof", "Educational"],
    "psychological_triggers": ["Aspiration", "Hope", "Trust"],
    "ideal_video_types": ["Guide", "Case Study", "Tutorial", "Educational"],
    "best_for_audience_stages": ["Cold", "Warm", "Hot"],
    "customization_note": "Personalize [zero] and [result] for your journey; works across fitness, revenue, audience, etc. (“0 to 10K subs,” “$0 to $50K”).",
    "quick_tips": "Promise the entire process up front, summarize steps visually; spotlight 1–2 counterintuitive or lesser-known steps."
  },
  {
    "hook": "I’m breaking ALL the rules—and getting better results. Here’s how.",
    "framework_tags": ["Contrarian", "Story", "Authority"],
    "psychological_triggers": ["Status", "Curiosity", "Believability"],
    "ideal_video_types": [
      "Story",
      "Analysis",
      "Motivational",
      "Thought Leadership"
    ],
    "best_for_audience_stages": ["Warm", "Hot"],
    "customization_note": "“ALL the rules” can be the accepted best practices, cultural norms, or guru advice in your niche.",
    "quick_tips": "Open with clips/statements of what “the rules” are, then quickly cut to your alternative method and its results—be bold but relatable."
  },
  {
    "hook": "Ever feel like you’re missing something? You are: [tease].",
    "framework_tags": ["Curiosity", "Belief Bridge"],
    "psychological_triggers": ["Curiosity", "FOMO", "Inclusion"],
    "ideal_video_types": ["Tip", "Deep Dive", "Reveal", "Tutorial"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "[tease] can be a tactic, mindset, tool, or shift in your niche (“audience research,” “mindset hack,” “editing trick”).",
    "quick_tips": "Tease the reveal visually (blurred/covered), then quickly deliver the payoff so viewers feel rewarded, not baited."
  },
  {
    "hook": "The advice that changed everything for me—and nobody talks about.",
    "framework_tags": ["Story", "Advice", "Revelation"],
    "psychological_triggers": ["Curiosity", "Vulnerability", "Authority"],
    "ideal_video_types": [
      "Storytime",
      "Lessons Learned",
      "Guide",
      "Motivational"
    ],
    "best_for_audience_stages": ["Warm", "Hot"],
    "customization_note": "Pick a non-obvious tip in your niche—something with a personal, emotional connection.",
    "quick_tips": "Start with a scene of struggle or plateau, then deliver the advice as a turning point narrative for higher emotional resonance."
  },
  {
    "hook": "Watch me [do a process] in real time (unfiltered!)",
    "framework_tags": ["Demonstration", "Challenge", "Story"],
    "psychological_triggers": ["Authenticity", "Curiosity", "Social Proof"],
    "ideal_video_types": [
      "Walkthrough",
      "Live Demo",
      "Transformation",
      "Tutorial"
    ],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "[do a process] could be anything practical in your field (“close a sale,” “film a video,” “run a client call,” “edit a reel”).",
    "quick_tips": "Show your workspace and real reactions—embrace imperfections; use on-screen timestamps or commentary for added transparency."
  },
  {
    "hook": "I failed for years. This is what finally worked.",
    "framework_tags": ["Story", "Vulnerability", "Authority"],
    "psychological_triggers": ["Relatability", "Hope", "Credibility"],
    "ideal_video_types": ["Transformation", "Personal Story", "Educational"],
    "best_for_audience_stages": ["Cold", "Warm", "Hot"],
    "customization_note": "Use your own journey or a client/case study to make it ultra-specific (“5 years of trying to grow on YouTube…”).",
    "quick_tips": "Open with a fast timeline/journey visual; be honest and humble about failures to deepen trust before presenting your key insight."
  },
  {
    "hook": "Can you spot the hidden mistake in this?",
    "framework_tags": ["Challenge", "Interactive"],
    "psychological_triggers": ["Curiosity", "Playfulness", "Inclusion"],
    "ideal_video_types": ["Quiz", "Teardown", "Tutorial", "Mistake Review"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Use a real example from your niche—screenshot, video clip, design, landing page, code, etc.",
    "quick_tips": "Pause before revealing the answer; encourage comments/guesses early to drive engagement and boost algorithm signals."
  },
  {
    "hook": "So many people give up at this stage—don’t be one of them.",
    "framework_tags": ["Story", "Empathy", "Belief Bridge"],
    "psychological_triggers": ["Belonging", "Hope", "Fear of Failure"],
    "ideal_video_types": ["Motivational", "Story", "Process Breakdown"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Reference a specific stage in your audience’s common journey (“posting consistently for 2 months,” “after the first rejection”).",
    "quick_tips": "Use timeline or milestone graphics; highlight success stories or stats that prove most people quit too soon."
  },
  {
    "hook": "I tracked my progress for 30 days—here are the real results.",
    "framework_tags": ["Challenge", "Transparency", "Authority"],
    "psychological_triggers": ["Curiosity", "Authenticity", "Social Proof"],
    "ideal_video_types": ["Transformation", "Progress", "Vlog", "Case Study"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap “30 days” with a relevant time frame (“7 days,” “90 days”) and track progress in any field (fitness, business, content).",
    "quick_tips": "Show visual charts or before/after shots; mention an unexpected or counterintuitive result early for extra intrigue."
  },
  {
    "hook": "You don’t need to [hard action everyone hates]. Here’s a shortcut.",
    "framework_tags": ["Contrarian", "Quick Win"],
    "psychological_triggers": ["Relief", "Curiosity", "Hope"],
    "ideal_video_types": [
      "Tutorial",
      "Listicle",
      "Productivity",
      "Myth-Busting"
    ],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap [hard action everyone hates] for your niche “pain” (“cold outreach,” “posting daily,” “counting calories”).",
    "quick_tips": "Open with a high-energy montage of the problem/pain, then shift quickly to the shortcut—with a step-by-step guide for instant credibility."
  },
  {
    "hook": "If I had to start over, here’s exactly what I’d do.",
    "framework_tags": ["Story", "Authority", "Educational"],
    "psychological_triggers": ["Trust", "Curiosity", "Aspiration"],
    "ideal_video_types": ["Storytime", "Guide", "Tutorial", "Motivational"],
    "best_for_audience_stages": ["Warm", "Hot"],
    "customization_note": "Frame as “knowing what I know now…” for your journey—works for career, business, personal growth.",
    "quick_tips": "Break your advice into actionable steps or phases; use storytelling and honesty to humanize your past mistakes or missed opportunities."
  },
  {
    "hook": "I interviewed [number] experts—these were their best-kept secrets.",
    "framework_tags": ["Authority", "Social Proof", "Listicle"],
    "psychological_triggers": ["Aspiration", "Curiosity", "Trust"],
    "ideal_video_types": [
      "Interview Recap",
      "Listicle",
      "Tips",
      "Authority Roundup"
    ],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Pick an impressive or relatable number of experts and a relevant field for your audience.",
    "quick_tips": "Feature expert names/photos or quick sound bites for credibility; end with your own “biggest surprise” to personalize the learning."
  },
  {
    "hook": "Let me bust the #1 myth about [your topic].",
    "framework_tags": ["Contrarian", "Myth-Busting"],
    "psychological_triggers": ["Curiosity", "Relief", "Authority"],
    "ideal_video_types": ["Tutorial", "Rant", "Analysis", "Educational"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Replace [your topic] with a widely discussed belief in your niche (“YouTube growth,” “dieting,” “remote work”).",
    "quick_tips": "Open by stating the myth directly, then immediately counter with a surprising fact or story for strong engagement."
  },
  {
    "hook": "Want to shortcut months of frustration? Watch this.",
    "framework_tags": ["Quick Win", "Promise"],
    "psychological_triggers": ["Hope", "FOMO", "Relief"],
    "ideal_video_types": ["Tutorial", "Tips", "Explainer", "Productivity"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Target any journey with a common struggle (fitness, content creation, client acquisition, etc.)",
    "quick_tips": "Show a relatable “frustration” montage first, then immediately tease the shortcut with a visual preview or bullet point."
  },
  {
    "hook": "This one mindset shift skyrocketed my results.",
    "framework_tags": ["Story", "Authority", "Transformation"],
    "psychological_triggers": ["Aspiration", "Curiosity", "Hope"],
    "ideal_video_types": ["Storytime", "Educational", "Inspirational"],
    "best_for_audience_stages": ["Cold", "Warm", "Hot"],
    "customization_note": "Choose a mindset shift that challenged your old beliefs—customize for your field (“scarcity → abundance,” “consumer → producer”).",
    "quick_tips": "Briefly show your “old results” versus “new results” visually; be specific about the shift and how to implement it for credibility."
  },
  {
    "hook": "You’re making [problem] harder than it has to be—here’s why.",
    "framework_tags": ["Empathy", "Belief Bridge", "PAS"],
    "psychological_triggers": ["Curiosity", "Relief", "Empathy"],
    "ideal_video_types": ["Educational", "How-To", "Rant", "Mistake Review"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Swap [problem] for a frustration in your community (“email marketing,” “losing weight,” “finding clients”).",
    "quick_tips": "Open with a common struggle montage, then use simple visuals or an analogy to make your solution feel attainable."
  },
  {
    "hook": "This new tool/strategy is a total game changer. Here’s why.",
    "framework_tags": ["Authority", "Reveal", "Trend"],
    "psychological_triggers": ["Curiosity", "FOMO", "Aspiration"],
    "ideal_video_types": ["Tool Review", "Tutorial", "Trends", "Listicle"],
    "best_for_audience_stages": ["Cold", "Warm"],
    "customization_note": "Use a recent tool/platform/update or a “new method” shaking up your industry.",
    "quick_tips": "Start with an attention-grabbing demo or before/after; briefly highlight the key features or unexpected wins, and offer a clear CTA for trying it."
  }
]
;

export default hooks;