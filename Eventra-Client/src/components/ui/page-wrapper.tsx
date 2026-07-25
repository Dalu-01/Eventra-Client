import React from "react";
import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, className }) => {
  return (
    <div className={cn("pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen", className)}>
      {children}
    </div>
  );
};

export default PageWrapper;
