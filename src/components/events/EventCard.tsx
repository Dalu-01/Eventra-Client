import React from "react";
import { type EventItem } from "@/lib/types";
import { Format } from "@/lib/format";
import { UI_ASSETS } from "@/utils/assets";
import { Link } from "react-router";

interface EventCardProps {
  eventData: EventItem;
  ticketNumber?: string;
  isLoggedIn?: boolean;
  onClick?: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  eventData,
  ticketNumber,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex-none w-[75vw] max-w-85 md:w-full md:max-w-none bg-white dark:bg-slate-900 rounded-2xl shadow-xs overflow-hidden border border-[#E8E6E0] dark:border-slate-800 cursor-pointer group"
    >
      {/* Image */}
      <div className="relative w-full aspect-4/3 overflow-hidden bg-slate-100">
        <img
          src={eventData.image}
          alt={eventData.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Featured Badge — top left */}
        <span className="absolute top-3 left-3  py-[3.6px] px-[7.3px] rounded-3xl bg-[#F5A524] text-[#1A1523] text-[9.5px] font-normal font-geist flex items-center justify-center gap-0.47 md:gap-0.75">
          <img className="h-3 w-3" src={UI_ASSETS.star} alt="star" />
          Featured
        </span>

        {/* Ticket Number — top right */}
        {ticketNumber && (
          <span className="absolute top-3 right-3 text-[10px] font-space text-white tracking-wider font-bold">
            № {ticketNumber}
          </span>
        )}
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col gap-1.5">
        {/* Category */}
        <span className="text-[11.72px] font-normal font-geist tracking-[16%] uppercase text-[#0F6E56]">
          {eventData.category}
        </span>

        {/* Title */}
        <h3 className="text-[17px] font-bold text-[#1A1523] dark:text-white font-grotesk leading-snug line-clamp-1">
          {eventData.title}
        </h3>

        {/* Date · Location */}
        <p className="text-[10.26px] text-[#4A4451] dark:text-slate-500">
          {Format.shortDate(eventData.date)} ·{" "}
          {Format.shortLocation(eventData.location)}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-[8x]">
          <span className="text-[18px] font-bold text-[#1A1523] dark:text-white font-space">
            {eventData.price === 0 ? "FREE" : Format.amount(eventData.price)}
          </span>

          <Link to={`/events/${eventData.id}`}>
            <img
              className="hover:shadow-sm w-8 h-8"
              src={UI_ASSETS.arrowUpRight}
              alt="arrowupright"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
