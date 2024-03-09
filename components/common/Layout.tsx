import React, { ReactNode, useState } from "react";
import Footer from "./Footer";
import Drawer from "./Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div className="bg-[#F2EFE8] min-h-screen">
      <div className="h-full max-w-md mx-auto ">
        <div className="h-full">
          <div className="flex items-center justify-between p-4">
            <div>
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                onClick={toggleDrawer}
                className="cursor-pointer"
              />
            </div>
            <div className="text-sm">2024 동아리 박람회</div>
          </div>
          <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
          {isDrawerOpen && (
            <div
              className="fixed top-0 left-0 h-screen w-full bg-black opacity-50 z-40"
              onClick={closeDrawer}
            />
          )}
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
