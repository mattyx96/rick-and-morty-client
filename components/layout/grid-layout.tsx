import type React from "react";

export const GridLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
      {children}
    </div>
  );
};
