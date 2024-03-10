// pages/index.js
import React, { useState } from "react";
import Image from "next/image";
import Drawer from "@/components/common/Drawer";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="relative w-screen h-screen bg-[#363636]">
      <div onClick={toggleDrawer} className="cursor-pointer">
        <Image
          src="/img/main.svg"
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
          alt=""
        />
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </div>
  );
}
