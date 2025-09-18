import type React from "react";

export const GridLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 justify-items-center ${className}`}
    >
      {children}
    </div>
  );
};
