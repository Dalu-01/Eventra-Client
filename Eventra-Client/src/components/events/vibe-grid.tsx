import React from "react";
import { VIBE_CATEGORIES } from "@/lib/constants";

export const VibeGrid: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">
            DISCOVER YOUR ENERGY
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Browse by Vibe
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Find the event that matches your exact energy.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {VIBE_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="group relative h-40 sm:h-48 rounded-2xl overflow-hidden cursor-pointer border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url(${category.image})` }}
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

            {/* Content (Bottom aligned) */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex flex-col justify-end">
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                {category.title}
              </h3>
              <span className="text-xs font-medium text-slate-300 mt-0.5">
                {category.count}
              </span>
            </div>

            {/* Hover Border highlight */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/30 rounded-2xl transition-all duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

// Also support VibeCategory alias in case the commented code references it
export const VibeCategory = VibeGrid;
