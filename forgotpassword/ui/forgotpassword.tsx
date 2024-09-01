import React from "react";

interface forgotpasswordFloatingNavProps {
  className?: string;
  children?: React.ReactNode; // This allows the component to accept children
}

export const forgotpassowrdFloatingNav: React.FC<forgotpasswordFloatingNavProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};