import React, { useState } from "react";
import { NavLink, Link } from "react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const Nav: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900/80  dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4 md:h-22.75">
        <Logo />
        {/* for the Desktop Links */}
        <nav className="hidden md:flex md:ml-11.25 items-center gap-5.75">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 text-[15px]",
                  isActive
                    ? "text-emerald-600 font-semibold dark:text-emerald-400 border-b-2 border-emerald-600 py-1"
                    : "text-primary dark:text-slate-300",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex gap-3.25 md:ml-auto">
          <Link
            to="/auth/login"
            className="text-sm font-medium text-primary dark:text-slate-200 hover:text-emerald-600 transition-colors hidden md:flex items-center gap-4"
          >
            Log in
          </Link>
          <Link
            to="/auth/register"
            className="text-sm font-bold px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-[7px] transition-all shadow-sm shadow-emerald-600/20 active:scale-95 text-[#E4F1EB] m"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-slate-600 dark:text-slate-300 focus:outline-none rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 ml-auto transition"
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
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
                    ? "bg-emerald-50 text-primary dark:bg-emerald-950/40 dark:text-emerald-400 font-medium"
                    : "text-primary text-[15px] dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2 font-bold">
            <Link
              to="/auth/login"
              onClick={() => setIsMobileOpen(false)}
              className="w-full text-center py-2 text-primary dark:text-slate-200 font-bold"
            >
              Log In
            </Link>
            <Link
              to="/auth/register"
              onClick={() => setIsMobileOpen(false)}
              className="w-full text-center py-3.5 px-3 bg-[#0F6E56] text-[#E4F1EB] rounded-[7px] ml-auto"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
