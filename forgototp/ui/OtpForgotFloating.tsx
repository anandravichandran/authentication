import React from "react";

interface OtpForgotFloatingNavProps {
  className?: string;
  children?: React.ReactNode; // This allows the component to accept children
}

export const SignupFloatingNav: React.FC<OtpForgotFloatingNavProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};