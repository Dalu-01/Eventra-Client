import React, { useState } from "react";
import { NavLink, Link } from "react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const Nav: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-emerald-600 dark:hover:text-emerald-400",
                  isActive
                    ? "text-emerald-600 font-semibold dark:text-emerald-400 border-b-2 border-emerald-600 py-1"
                    : "text-slate-600 dark:text-slate-300"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/auth/login"
            className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600 transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/auth/register"
            className="text-sm font-semibold px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all shadow-sm shadow-emerald-600/20 active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-slate-600 dark:text-slate-300 focus:outline-none rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                cn(
                  "block text-base font-medium py-2 px-3 rounded-md transition-colors",
                  isActive
                    ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <Link
              to="/auth/login"
              onClick={() => setIsMobileOpen(false)}
              className="w-full text-center py-2 text-slate-700 dark:text-slate-200 font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/auth/register"
              onClick={() => setIsMobileOpen(false)}
              className="w-full text-center py-2 bg-emerald-600 text-white font-semibold rounded-lg shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
