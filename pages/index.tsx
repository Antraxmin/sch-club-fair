// pages/index.js
import React, { useState } from "react";
import Footer from "@/components/common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Drawer from "@/components/common/Drawer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-full ">
        <Image
          src={"/img/main.png"}
          layout="responsive"
          width={100}
          height={100}
          alt={""}
        />
      </div>
    </>
  );
}
