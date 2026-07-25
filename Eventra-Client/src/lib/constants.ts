export interface NavLinkItem {
  label: string;
  path: string;
}

export interface VibeCategory {
  id: string;
  title: string;
  count: string;
  image: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  image: string;
  badge?: "TRENDING" | "SELLING FAST" | "HOT";
  category: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  handle: string;
  avatar: string;
  role: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Explore", path: "/explore" },
  { label: "Get Started", path: "/get-started" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const VIBE_CATEGORIES: VibeCategory[] = [
  {
    id: "concerts",
    title: "Concerts",
    count: "120+ Events",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "nightlife",
    title: "Nightlife",
    count: "85+ Events",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "conference",
    title: "Conference",
    count: "40+ Events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "seminars",
    title: "Seminars",
    count: "35+ Events",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "sports",
    title: "Sports",
    count: "50+ Events",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "social-treats",
    title: "Social Treats",
    count: "65+ Events",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "food-drink",
    title: "Food & Drink",
    count: "90+ Events",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "theatre",
    title: "Theatre",
    count: "25+ Events",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=600&auto=format&fit=crop&q=80",
  },
];

export const FEATURED_EVENTS: EventItem[] = [
  {
    id: "feat-1",
    title: "Island Rooftop Party",
    date: "2026-11-28",
    time: "2026-11-28T16:00:00",
    location: "V.I. Rooftop, Lagos",
    price: 12500,
    category: "Nightlife",
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "feat-2",
    title: "Lagos Tech Fest 2026",
    date: "2026-12-05",
    time: "2026-12-05T09:00:00",
    location: "Landmark Event Center, VI",
    price: 25000,
    category: "Conference",
    badge: "SELLING FAST",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "feat-3",
    title: "Runway Festival Live",
    date: "2026-12-12",
    time: "2026-12-12T18:30:00",
    location: "Eko Hotel & Suites, Victoria Island",
    price: 15000,
    category: "Concerts",
    badge: "HOT",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "feat-4",
    title: "Afrobeats Night Market",
    date: "2026-12-19",
    time: "2026-12-19T20:00:00",
    location: "Muri Okunola Park, VI",
    price: 15000,
    category: "Concerts",
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80",
  },
];

export const DEFAULT_QUERY_LIMIT = 10;

export const STATS = [
  { label: "EVENTS HOSTED", value: "20k+" },
  { label: "ACTIVE USERS", value: "500k+" },
  { label: "TICKETS SOLD", value: "120k+" },
  { label: "AVERAGE RATING", value: "4.9★" },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "I could easily buy tickets with zero friction, and entry at the venue was seamless. I love using Eventra!",
    author: "Femi Adebayo",
    handle: "@femi_afro",
    role: "Attendee",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: "test-2",
    quote: "I sold out my entire event in under 48 hours. The analytics dashboard and real-time payout are top tier.",
    author: "Tolu Alabi",
    handle: "@tolu_events",
    role: "Organizer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: "test-3",
    quote: "Their anti-fake QR code tickets eliminated gate crashing completely for our festival. Highly recommended!",
    author: "Chika Nwosu",
    handle: "@chika_live",
    role: "Organizer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
];

export const FAQ_ITEMS = [
  {
    question: "How do I pay for a ticket?",
    answer: "You can pay instantly using Debit/Credit card, direct Bank Transfer, or USSD code through our secure checkout system.",
  },
  {
    question: "Is my ticket valid for multiple entries?",
    answer: "Entry validity depends on the event organizer's policy. Details are clearly shown on your encrypted digital QR ticket.",
  },
  {
    question: "Can I get a refund?",
    answer: "Refund policies are set by each event organizer. If an event is cancelled by the host, full automatic refunds are issued.",
  },
  {
    question: "How do organizers get paid?",
    answer: "Organizers receive automated payouts directly into their registered Nigerian bank account within 24 hours of event completion.",
  },
  {
    question: "Is Eventra available worldwide?",
    answer: "Yes! Eventra supports international event discovery and localized ticketing for global audiences.",
  },
];
