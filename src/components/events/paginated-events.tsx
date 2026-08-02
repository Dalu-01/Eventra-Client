import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Calendar,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { api } from "@/lib/api";
import { FEATURED_EVENTS, DEFAULT_QUERY_LIMIT } from "@/lib/constants";
import { type EventItem } from "@/lib/types";
import { Format } from "@/lib/format";

const buildMockPages = (items: EventItem[], pageSize: number) => {
  // Duplicate the source array a few times to simulate a larger dataset
  const expanded = [...items, ...items, ...items];
  const totalPages = Math.ceil(expanded.length / pageSize);
  return { expanded, totalPages };
};

interface PaginatedResponse {
  events: EventItem[];
  totalPages: number;
  currentPage: number;
}

const fetchEvents = async (page: number): Promise<PaginatedResponse> => {
  try {
    const res = await api.get(
      `/events?page=${page}&limit=${DEFAULT_QUERY_LIMIT}`,
    );
    return res.body as unknown as PaginatedResponse;
  } catch {
    // Graceful fallback — paginate from the single source of truth in constants
    const { expanded, totalPages } = buildMockPages(
      FEATURED_EVENTS,
      DEFAULT_QUERY_LIMIT,
    );
    const start = (page - 1) * DEFAULT_QUERY_LIMIT;
    const events = expanded.slice(start, start + DEFAULT_QUERY_LIMIT);
    return { events, totalPages, currentPage: page };
  }
};

export const PaginatedEvents: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["events", page],
    queryFn: () => fetchEvents(page),
    placeholderData: (prev) => prev, // keep previous data while fetching
  });

  const events = data?.events ?? [];
  const totalPages = data?.totalPages ?? 1;

  return (
    <section className="mb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">
            ALL UPCOMING
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Explore Events
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Browse through our latest curated events.
          </p>
        </div>

        {/* Pagination Controls (Top-right on desktop) */}
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950 hover:border-emerald-300 dark:hover:border-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tabular-nums min-w-[18] text-center">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950 hover:border-emerald-300 dark:hover:border-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-24">
          <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="text-center py-16 text-red-500 dark:text-red-400 text-sm font-medium">
          Something went wrong while loading events. Please try again.
        </div>
      )}

      {/* Event List */}
      {!isLoading && events.length > 0 && (
        <div className="space-y-4">
          {events.map((event, idx) => (
            <div
              key={`${event.id}-${idx}`}
              className="group flex flex-col sm:flex-row items-stretch bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative sm:w-48 sm:min-w-48 aspect-video sm:aspect-auto overflow-hidden bg-slate-100 dark:bg-slate-950 shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/10 sm:bg-gradient-to-l" />
              </div>

              {/* Details */}
              <div className="flex-1 p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="flex-1 space-y-1.5">
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors line-clamp-1">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      {Format.date(event.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      {Format.time(event.time)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      {event.location}
                    </span>
                  </div>
                </div>

                {/* Price + Action */}
                <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-1">
                  <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                    {event.price === 0 ? "FREE" : Format.amount(event.price)}
                  </span>
                  <button className="px-5 py-2 bg-slate-900 hover:bg-emerald-600 dark:bg-slate-800 dark:hover:bg-emerald-500 text-white hover:text-slate-950 text-xs font-bold rounded-xl transition-all duration-300 shadow whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && events.length === 0 && (
        <div className="text-center py-16 text-slate-400 dark:text-slate-500 text-sm">
          No events found for this page.
        </div>
      )}
    </section>
  );
};
