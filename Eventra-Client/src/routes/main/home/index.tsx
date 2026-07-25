import React, { useState } from "react";
import { Search, MapPin, Calendar, CheckCircle2, QrCode, ShieldCheck, ChevronDown } from "lucide-react";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { VibeGrid } from "@/components/events/vibe-grid";
import { FeaturedEvents } from "@/components/events/featured-events";
import { PaginatedEvents } from "@/components/events/paginated-events";
import { FEATURED_EVENTS, STATS, FAQ_ITEMS, TESTIMONIALS } from "@/lib/constants";
import { Format } from "@/lib/format";

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <PageWrapper className="pt-8">
      {/* 1. HERO SECTION */}
      <section className="relative rounded-3xl overflow-hidden bg-slate-950 text-white p-6 sm:p-12 lg:p-16 mb-12 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-slate-950/95 to-slate-950 z-0" />
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format&fit=crop&q=80')`,
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
              EXPLORE • EXPERIENCE • ENJOY
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Find events worth <span className="text-amber-400">showing up</span> for.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-light">
              Tailored recommendations, instant ticket delivery, and 100% verified gate entry across Africa's top live events.
            </p>

            {/* Search Input Bar */}
            <div className="bg-white/10 backdrop-blur-md p-2 sm:p-3 rounded-2xl border border-white/15 flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-2 px-3 w-full sm:w-auto flex-1">
                <Search className="w-5 h-5 text-emerald-400" />
                <input
                  type="text"
                  placeholder="Search events, artists, or venues..."
                  className="bg-transparent border-none text-white placeholder-slate-400 text-sm focus:outline-none w-full"
                />
              </div>
              <div className="h-6 w-[1px] bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2 px-3 w-full sm:w-auto">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <select className="bg-transparent text-slate-200 text-sm focus:outline-none cursor-pointer w-full">
                  <option value="lagos" className="bg-slate-900">Lagos, NG</option>
                  <option value="abuja" className="bg-slate-900">Abuja, NG</option>
                  <option value="accra" className="bg-slate-900">Accra, GH</option>
                </select>
              </div>
              <button className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/25">
                Search
              </button>
            </div>
          </div>

          {/* Featured Hero Banner Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md">
              <div className="relative h-56 rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80"
                  alt="Afrobeats Night Market"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded uppercase">
                  FEATURED
                </span>
              </div>
              <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">FRI, DEC 19 • 8:00 PM</span>
              <h3 className="text-xl font-bold text-white mt-1">Afrobeats Night Market</h3>
              <p className="text-xs text-slate-400 mt-1">Muri Okunola Park, Victoria Island</p>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Tickets from</span>
                  <span className="text-lg font-extrabold text-white">{Format.amount(15000)}</span>
                </div>
                <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs rounded-lg transition-colors">
                  Get Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-8 border-y border-slate-200 dark:border-slate-800 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <h4 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">{stat.value}</h4>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BROWSE BY VIBE */}
      <VibeGrid />

      {/* 4. FEATURED THIS WEEK */}
      <FeaturedEvents isLoggedIn={true} events={FEATURED_EVENTS} />

      {/* 5. FEATURE HIGHLIGHTS & APP SHOWCASE */}
      <section className="py-16 space-y-20">
        {/* Feature 1: Discover events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">FOR ATTENDEES</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Discover events you'll actually love.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Eventra uses smart interest matching to bring you live concerts, tech meetups, nightlife, and cultural popups tailored specifically to your taste.
            </p>
            <ul className="space-y-2 pt-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Smart match based on your favorite artists</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Filter by proximity, date, and budget</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Instant notifications for drop tickets</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex justify-center">
            <div className="w-64 bg-slate-950 p-4 rounded-[40px] shadow-2xl border-4 border-slate-800 text-white space-y-3">
              <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-4" />
              <div className="p-3 bg-slate-900 rounded-xl space-y-2">
                <span className="text-[10px] text-emerald-400 font-bold">RECOMMENDED</span>
                <p className="text-xs font-bold">Afrobeats Night Market</p>
                <div className="h-1.5 w-full bg-emerald-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Pay your way */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-slate-100 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex justify-center">
            <div className="w-64 bg-white dark:bg-slate-950 p-5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white space-y-3">
              <span className="text-xs font-bold text-emerald-600">Checkout Summary</span>
              <div className="flex justify-between text-xs py-2 border-y border-slate-100 dark:border-slate-800">
                <span>VIP Ticket (x1)</span>
                <span className="font-bold">{Format.amount(15000)}</span>
              </div>
              <button className="w-full py-2 bg-emerald-600 text-white text-xs font-bold rounded-lg">Pay with Card / USSD</button>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <span className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">FAST CHECKOUT</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Pay your way — card, transfers, or USSD.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Checkout in under 15 seconds. Support for major debit cards, instant bank transfers, and USSD codes with zero payment delays.
            </p>
          </div>
        </div>

        {/* Feature 3: Ticket security */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">GATE SECURITY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              A ticket that can't be faked.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Say goodbye to duplicate screenshots and scalpers. Every Eventra ticket comes with dynamic anti-counterfeit QR security.
            </p>
          </div>
          <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex justify-center">
            <div className="w-56 bg-slate-950 p-6 rounded-3xl text-center space-y-4 text-white shadow-2xl border border-slate-800">
              <QrCode className="w-24 h-24 mx-auto text-emerald-400" />
              <div className="flex items-center justify-center gap-1 text-xs text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Anti-Fake QR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Banner Highlight */}
        <div className="bg-slate-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              From "where's it happening?" to <span className="text-emerald-400">inside the gate.</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Eventra delivers complete end-to-end ticketing clarity for both attendees and organizers.
            </p>
          </div>
        </div>

        {/* Feature 4: Organizers Section */}
        <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-3xl p-8 sm:p-12 border border-emerald-200/60 dark:border-emerald-900/50 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400 tracking-wider">FOR ORGANIZERS</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Selling tickets? Do it properly.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Create your event in minutes, track real-time ticket sales analytics, assign scanners to gate staff, and receive automated payouts.
            </p>
            <div className="flex gap-4 pt-2">
              <button className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-colors shadow-md">
                Host an Event
              </button>
              <button className="px-5 py-2.5 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold text-sm rounded-xl border border-slate-200 dark:border-slate-800">
                View Pricing
              </button>
            </div>
          </div>
          <div className="w-full md:w-80 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <span className="text-xs text-slate-400 block mb-1">TOTAL SALES TODAY</span>
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{Format.amount(450000)}</span>
            <div className="mt-4 h-2 bg-emerald-100 dark:bg-emerald-950 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-3/4 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">TESTIMONIALS</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Loved by fans and organizers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <p className="text-sm text-slate-600 dark:text-slate-300 italic mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.author}</h4>
                  <p className="text-xs text-slate-400">{t.handle} • {t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">GOT QUESTIONS?</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Frequently asked questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between font-bold text-slate-900 dark:text-white text-base hover:text-emerald-600 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openFaq === idx ? "rotate-180 text-emerald-500" : "text-slate-400"}`} />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/60 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. TANSTACK QUERY PAGINATED EVENTS LIST */}
      <PaginatedEvents />

      {/* 9. BOTTOM CTA BANNER */}
      <section className="mt-12 bg-slate-950 rounded-3xl p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-xl mx-auto space-y-6">
          <span className="text-xs font-extrabold uppercase text-emerald-400 tracking-widest">JOIN EVENTRA TODAY</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Your next night out starts here.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/25">
              Get Started
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-800 transition-colors">
              Explore Events
            </button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
