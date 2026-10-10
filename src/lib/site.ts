export const site = {
  name: "Maison Femme",
  tagline: "Where community becomes change.",
  description:
    "Maison Femme convenes women across Tanzania, advocates for women's and children's health and dignity, and partners with companies who want their CSR to do real work.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://maisonfemme.co.tz",
  email: "hello@maisonfemme.co.tz",
  location: "Dar es Salaam, Tanzania",
} as const;

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Programmes" },
  { href: "/pink-legacy", label: "Pink Legacy" },
  { href: "/partner", label: "Partner" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;

export type NavHref = (typeof navLinks)[number]["href"] | "/";

/** Kanga sayings (jina) used in the signature band. */
export const proverbs = [
  { sw: "Umoja ni nguvu", en: "Unity is strength" },
  { sw: "Haba na haba hujaza kibaba", en: "Little by little fills the measure" },
  { sw: "Mwanamke ni nguzo ya nyumba", en: "A woman is the pillar of the home" },
] as const;

export const pillars = [
  {
    title: "Community",
    body: "We convene women across Dar es Salaam and beyond, building the kind of belonging that outlasts a single event — and shows up again the next time.",
  },
  {
    title: "Advocacy",
    body: "We speak for women and children on the issues too often left off the corporate agenda: health, early detection, safety and dignity.",
  },
  {
    title: "Partnership",
    body: "We connect companies with documented community programmes — real audiences, named outcomes, and reporting your leadership can use.",
  },
  {
    title: "Celebration",
    body: "Our gatherings are where the community actually feels itself: rest, honest conversation and joy, designed with care.",
  },
] as const;

export const audiences = [
  {
    label: "For women",
    body: "A community that is theirs: gatherings, retreats and a network that holds.",
  },
  {
    label: "For children",
    body: "Advocacy on wellbeing, safety and health, carried into rooms where decisions are made.",
  },
  {
    label: "For corporate Tanzania",
    body: "A partner who turns a CSR line item into a programme with a real audience and real reporting.",
  },
] as const;

/** Topic ribbon — areas of work shown as a living strip. */
export const focusTopics = [
  "Women's Community",
  "Children's Wellbeing",
  "Breast Health",
  "Early Detection",
  "CSR Partnerships",
  "Advocacy",
  "Retreats",
  "Celebration",
] as const;

export const vision = {
  eyebrow: "Vision",
  statement:
    "A Tanzania where women gather in strength, children are protected with dignity, and companies fund work that can be named and measured.",
  promise: "Convene. Advocate. Partner.",
} as const;

export const faqs = [
  {
    q: "What does Maison Femme actually do?",
    a: "We convene women across Dar es Salaam, run advocacy programmes like Pink Legacy breast screening days, and design CSR partnerships for companies who want documented community impact.",
  },
  {
    q: "How can my company partner with you?",
    a: "Start with a brief — your objective, audience and reporting calendar. We design a programme around that, deliver it end to end, and hand back outcomes your leadership can use.",
  },
  {
    q: "What is the Pink Legacy Initiative?",
    a: "Free breast examination days and awareness sessions in Kiswahili, delivered where women already are — markets, workplaces and neighbourhoods — with clinical partners.",
  },
  {
    q: "Can I join as a community member or volunteer?",
    a: "Yes. Reach out through our contact page and tell us whether you want to attend gatherings, volunteer at a screening day, or bring a friend into the community.",
  },
] as const;

export const programmes = [
  {
    slug: "salt-and-soul",
    tag: "Community",
    place: "Coastal Tanzania",
    title: "Salt & Soul",
    summary:
      "A retreat, not a conference. Two days away from the city for rest, honest conversation and each other's company.",
    body: "Salt & Soul is built around the belief that women do their best thinking when they are allowed to stop. No panels, no name badges — a small group, the coast, and conversations that are still being talked about months later.",
    details: [
      ["Format", "Two-day residential retreat"],
      ["Audience", "Women of the Maison Femme community"],
      ["Partner role", "Co-host or presenting sponsor"],
    ],
    impact: "A room that becomes a network",
    image:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1400&q=85",
    alt: "A group of women laughing together outdoors",
  },
  {
    slug: "mothers-edition",
    tag: "Community · Advocacy",
    place: "Dar es Salaam",
    title: "Mother's Edition",
    summary:
      "Our annual celebration of motherhood in every form it takes — including the mothers still waiting, and those who lost the chance.",
    body: "Mother's Edition holds space for the full picture of motherhood in Tanzania: joy, grief, waiting, and the health conversations that rarely get a room of their own. It is our most tender gathering, and one of our most attended.",
    details: [
      ["Format", "Annual gathering with advocacy sessions"],
      ["Audience", "Mothers, expectant mothers and those hoping"],
      ["Partner role", "Sponsor, in-kind partner or speaker"],
    ],
    impact: "Motherhood held in full",
    image:
      "https://images.unsplash.com/photo-1494386346843-e12284507169?auto=format&fit=crop&w=1400&q=85",
    alt: "A mother holding her child close",
  },
  {
    slug: "pink-legacy",
    tag: "Advocacy",
    place: "Markets & workplaces",
    title: "The Pink Legacy Initiative",
    summary:
      "Free breast examination days, awareness sessions in Kiswahili, and support for women navigating a diagnosis.",
    body: "Pink Legacy takes screening to where women already are — markets, workplaces and neighbourhoods — staffed by qualified clinicians and delivered in the language women actually speak.",
    details: [
      ["Format", "Screening days and awareness sessions"],
      ["Clinical partner", "Tanzania Oncology Association"],
      ["Partner role", "Fund and co-brand a screening block"],
    ],
    impact: "Screening brought to women",
    href: "/pink-legacy",
    cta: "Explore Pink Legacy",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
    alt: "A healthcare professional in conversation with a patient",
  },
  {
    slug: "csr-partnerships",
    tag: "Partnership",
    place: "Corporate Tanzania",
    title: "Corporate CSR Partnerships",
    summary:
      "Programmes designed and delivered end to end for companies who want to support women and children beyond a donation.",
    body: "We design the programme around your objective and reporting calendar, run it without needing to be managed, and hand back outcomes you can put in front of your own board.",
    details: [
      ["Format", "Event, advocacy or standing partnership"],
      ["Audience", "Our community, your stakeholders"],
      ["Deliverable", "Documented, reportable outcomes"],
    ],
    impact: "CSR with named outcomes",
    href: "/partner",
    cta: "Partner with us",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    alt: "Colleagues in discussion around a table",
  },
] as const;

/** Image-backed pillar tiles for the initiatives grid. */
export const initiatives = [
  {
    title: "Community",
    body: "Gatherings and retreats where belonging outlasts a single afternoon.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
    alt: "Women gathered outdoors in warm light",
  },
  {
    title: "Advocacy",
    body: "Health, safety and dignity brought into rooms where decisions are made.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
    alt: "Hands clasped in a supportive conversation",
  },
  {
    title: "Partnership",
    body: "CSR programmes with real audiences, named outcomes and clear reporting.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85",
    alt: "Partners reviewing work together",
  },
  {
    title: "Celebration",
    body: "Joy designed with care — rest, honesty and the feeling of being held.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85",
    alt: "A joyful community gathering",
  },
] as const;

/** A real sequence — the partnership process — so numbering carries meaning. */
export const processSteps = [
  {
    title: "Brief",
    body: "You tell us the CSR objective, the audience you need to reach and the calendar you report against.",
  },
  {
    title: "Design",
    body: "We shape a programme with a real audience and named outcomes — and tell you honestly if we are not the right partner.",
  },
  {
    title: "Deliver",
    body: "We run it end to end: venues, clinicians, communities, communications. You attend; you do not manage.",
  },
  {
    title: "Report",
    body: "You receive documented outcomes, photography and a summary written for your leadership, not for us.",
  },
] as const;

export const partnershipPaths = [
  {
    title: "Event partnership",
    body: "Co-host or sponsor Salt & Soul, Mother's Edition or a community gathering. Brand presence with an audience that is genuinely present.",
    fit: "Best for visibility and community goodwill",
  },
  {
    title: "Advocacy partnership",
    body: "Fund and co-brand Pink Legacy screening blocks with named, reportable impact: screenings delivered, referrals made, communities reached.",
    fit: "Best for health-led CSR with hard numbers",
  },
  {
    title: "Standing CSR partnership",
    body: "A season-long relationship across our full programme, built around your reporting calendar and renewed on results.",
    fit: "Best for companies with an annual CSR mandate",
  },
] as const;

/**
 * Impact figures. Replace `null` with confirmed data before publishing —
 * placeholders render as an em dash.
 */
export const stats: { value: number | null; suffix?: string; label: string }[] =
  [
    { value: null, label: "Women reached" },
    { value: null, label: "Screenings funded" },
    { value: null, label: "Children supported" },
    { value: null, suffix: "%", label: "Partners retained" },
  ];

export const stories = [
  {
    category: "Impact recap",
    title: "When community becomes action",
    excerpt:
      "What happens after the gathering ends — the outcomes, the follow-ups and the women who came back as volunteers.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85",
    alt: "A community event in warm light",
  },
  {
    category: "Partner story",
    title: "Building CSR with purpose",
    excerpt:
      "A partnership told from the company's side: what they asked for, what they received, and what they would do differently.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=85",
    alt: "Colleagues reviewing a programme together",
  },
  {
    category: "Community voice",
    title: "A gathering that stayed with us",
    excerpt:
      "An attendee's reflection on Salt & Soul, and why rest turned out to be the most useful thing on the agenda.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85",
    alt: "Portrait of a woman smiling",
  },
] as const;

export const contactRoutes = [
  {
    title: "Community",
    body: "Joining a gathering, volunteering, or bringing a friend.",
    subject: "Community enquiry",
  },
  {
    title: "Advocacy",
    body: "Pink Legacy screening days and awareness sessions.",
    subject: "Pink Legacy enquiry",
  },
  {
    title: "Partnerships",
    body: "CSR, sponsorship and corporate collaboration.",
    subject: "Partnership enquiry",
  },
  {
    title: "Press",
    body: "Media, interviews and communications.",
    subject: "Press enquiry",
  },
] as const;
