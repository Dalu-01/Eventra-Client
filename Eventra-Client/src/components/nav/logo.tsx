import React from "react";
import { Link } from "react-router";
import { Calendar } from "lucide-react";

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white group">
      <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
        <Calendar className="w-5 h-5" />
      </div>
      <span className="font-extrabold tracking-tight">Eventra</span>
    </Link>
  );
};
