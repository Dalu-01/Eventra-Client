import React from "react";
import { ArrowRight, Link } from "lucide-react";
import { type EventItem } from "@/lib/types";
import { EventCard } from "@/components/events/EventCard";

interface FeaturedEventsProps {
  isLoggedIn: boolean;
  events: EventItem[];
}

// whoever is handling this should replace with API call — /api/events?featured=true

export const FeaturedEvents: React.FC<FeaturedEventsProps> = ({
  isLoggedIn,
  events,
}) => {
  return (
    <section className="">
      {/* Header */}
      <div className="flex items-end justify-between mb-3.5">
        <div>
          <div className="flex items-center gap-1 mb-1">
            <div className="w-[11.81px] h-0 border border-[#F5A524] rounded-none inline-block" />
            <span className="text-xs uppercase text-[#0F6E56] tracking-tight font-geist">
              HANDPICKED
            </span>
          </div>
          <h2 className="font-geist font-bold text-2xl tracking-[-2%] text-[#1A1523] md:text-[34px]">
            Featured this week
          </h2>
        </div>

        <Link to="/events" className="flex flex-row items-center gap-1 hover:bg-[#0F6E56]/10 rounded-2xl px-2.5 py-1.25 transition-colors duration-300 cursor-pointer">
          <h5 className="font-geist font-regular text-[#0F6E56]">View All</h5>
          <span><ArrowRight className="w-4 h-4" /></span>
        </Link>
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="md:hidden -mx-4 sm:-mx-6">
        <div className="flex gap-3.5 overflow-x-auto px-4 sm:px-6 pb-2 scrollbar-hide">
          {events.map((event, i) => (
            <EventCard
              key={event.id}
              eventData={event}
              ticketNumber={String(i + 1).padStart(4, "0")}
              isLoggedIn={isLoggedIn}
            />
          ))}
        </div>
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
        {events.map((event, i) => (
          <EventCard
            key={event.id}
            eventData={event}
            ticketNumber={String(i + 1).padStart(4, "0")}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </div>
    </section>
  );
};

// import React from "react";
// import { Calendar, MapPin, Clock } from "lucide-react";
// import { type EventItem } from "@/lib/constants";
// import { Format } from "@/lib/format";

// interface FeaturedEventsProps {
//   isLoggedIn: boolean;
//   events: EventItem[];
// }

// export const FeaturedEvents: React.FC<FeaturedEventsProps> = ({
//   isLoggedIn,
//   events,
// }) => {
//   const getBadgeStyles = (badge: string) => {
//     switch (badge) {
//       case "TRENDING":
//         return "bg-gradient-to-r from-amber-500 to-orange-600 text-white";
//       case "SELLING FAST":
//         return "bg-gradient-to-r from-rose-500 to-red-600 text-white animate-pulse";
//       case "HOT":
//         return "bg-gradient-to-r from-purple-500 to-indigo-600 text-white";
//       default:
//         return "bg-slate-500 text-white";
//     }
//   };

//   return (
//     <section className="mb-[14.6px]">
//       <div className="flex flex-col md:flex-row md:items-end justify-between mb-3.5">
//         <div className="flex items-center gap-1">
//           <div className="w-[11.81px] h-0 border border-[#F5A524] rounded-none inline-block" />
//           <span className="text-xs font-regular uppercase text-[#0F6E56] tracking-tight font-geist">
//             HANDPICKED
//           </span>
//         </div>
//         <h2 className="text-3xl font-bold font-geist text-[#1A1523] dark:text-white">
//           Featured this week
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {events.map((event) => (
//           <div
//             key={event.id}
//             className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 hover:-translate-y-1"
//           >
//             {/* Event Image Container */}
//             <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 to-transparent" />

//               {/* Event Category Badge */}
//               <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-emerald-400 tracking-wider uppercase">
//                 {event.category}
//               </span>

//               {/* Special Floating Badge */}
//               {event.badge && (
//                 <span
//                   className={`absolute top-3 right-3 px-2.5 py-1 text-[9px] font-extrabold tracking-widest rounded-full uppercase shadow-md ${getBadgeStyles(
//                     event.badge,
//                   )}`}
//                 >
//                   {event.badge}
//                 </span>
//               )}
//             </div>

//             {/* Event Details */}
//             <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
//               <div className="space-y-2">
//                 <h3 className="text-base font-extrabold text-slate-900 dark:text-white line-clamp-1 group-hover:text-emerald-500 transition-colors">
//                   {event.title}
//                 </h3>

//                 {/* Metadata List */}
//                 <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
//                   <div className="flex items-center gap-2">
//                     <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
//                     <span>{Format.date(event.date)}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
//                     <span>{Format.time(event.time)}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
//                     <span className="line-clamp-1">{event.location}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Price and Action Section */}
//               <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/60">
//                 <div className="flex flex-col">
//                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
//                     Price
//                   </span>
//                   <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">
//                     {event.price === 0 ? "FREE" : Format.amount(event.price)}
//                   </span>
//                 </div>

//                 <button className="px-4 py-2 bg-slate-900 hover:bg-emerald-600 dark:bg-slate-800 dark:hover:bg-emerald-500 text-white hover:text-slate-950 text-xs font-bold rounded-xl transition-all duration-300 shadow-md">
//                   {isLoggedIn ? "Get Ticket" : "Details"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
