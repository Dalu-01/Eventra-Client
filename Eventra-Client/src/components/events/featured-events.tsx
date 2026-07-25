import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { type EventItem } from "@/lib/constants";
import { Format } from "@/lib/format";

interface FeaturedEventsProps {
  isLoggedIn: boolean;
  events: EventItem[];
}

export const FeaturedEvents: React.FC<FeaturedEventsProps> = ({
  isLoggedIn,
  events,
}) => {
  const getBadgeStyles = (badge: string) => {
    switch (badge) {
      case "TRENDING":
        return "bg-gradient-to-r from-amber-500 to-orange-600 text-white";
      case "SELLING FAST":
        return "bg-gradient-to-r from-rose-500 to-red-600 text-white animate-pulse";
      case "HOT":
        return "bg-gradient-to-r from-purple-500 to-indigo-600 text-white";
      default:
        return "bg-slate-500 text-white";
    }
  };

  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">
            HANDPICKED EXPERIENCE
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Featured This Week
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Unmissable events happening around you.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Event Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />

              {/* Event Category Badge */}
              <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-emerald-400 tracking-wider uppercase">
                {event.category}
              </span>

              {/* Special Floating Badge */}
              {event.badge && (
                <span
                  className={`absolute top-3 right-3 px-2.5 py-1 text-[9px] font-extrabold tracking-widest rounded-full uppercase shadow-md ${getBadgeStyles(
                    event.badge
                  )}`}
                >
                  {event.badge}
                </span>
              )}
            </div>

            {/* Event Details */}
            <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white line-clamp-1 group-hover:text-emerald-500 transition-colors">
                  {event.title}
                </h3>

                {/* Metadata List */}
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                    <span>{Format.date(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                    <span>{Format.time(event.time)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Price and Action Section */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/60">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Price
                  </span>
                  <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">
                    {event.price === 0 ? "FREE" : Format.amount(event.price)}
                  </span>
                </div>

                <button className="px-4 py-2 bg-slate-900 hover:bg-emerald-600 dark:bg-slate-800 dark:hover:bg-emerald-500 text-white hover:text-slate-950 text-xs font-bold rounded-xl transition-all duration-300 shadow-md">
                  {isLoggedIn ? "Get Ticket" : "Details"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
