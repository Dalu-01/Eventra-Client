import React from "react";
import { Logo } from "../nav/logo";
import { Link } from "react-router";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section matching homepage.png */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Never miss a good one.
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Get the best events sent to your inbox every week.
            </p>
          </div>
          <div className="flex w-full md:w-auto items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email..."
              className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-72"
            />
            <button className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl transition-colors shrink-0 shadow-sm">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-4">
            <Logo />
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              Discover, organize, and manage unforgettable events with Nigeria's safest ticketing and event management ecosystem.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white text-xs font-extrabold uppercase tracking-wider mb-4">Attendees</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/explore" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Find Events</Link></li>
              <li><Link to="/categories" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Browse Categories</Link></li>
              <li><Link to="/my-tickets" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">My Tickets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white text-xs font-extrabold uppercase tracking-wider mb-4">Organizers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/create-event" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Create Event</Link></li>
              <li><Link to="/pricing" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Pricing & Plans</Link></li>
              <li><Link to="/gate-scanner" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Gate App Scanner</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white text-xs font-extrabold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contact Support</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Eventra Inc. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built for attendees, organizers & admins.</p>
        </div>
      </div>

      {/* Large Brand Watermark Footer background (matching screenshot) */}
      <div className="mt-10 select-none pointer-events-none opacity-10 dark:opacity-5 text-center font-black text-6xl sm:text-9xl tracking-tighter text-emerald-600 leading-none">
        Eventra
      </div>
    </footer>
  );
};
