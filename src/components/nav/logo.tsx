import React from "react";
import { Link } from "react-router";
import logoUrl from "@/assets/logo.svg";

export const Logo: React.FC = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 "
    >
      <div className=" rounded-xl flex items-center justify-center text-white shadow-emerald-600/20 group-hover:scale-105 transition-transform">
        <img src={logoUrl} alt="Eventra" className="w-32.25 h-7.63 object-contain" />
      </div>
    </Link>
  );
};