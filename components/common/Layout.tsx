import React, { ReactNode } from "react";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-[#F2EFE8] min-h-screen">
      <div className="h-full max-w-md mx-auto ">
        <div>{children}</div>
      </div>
    </div>
  );
}
