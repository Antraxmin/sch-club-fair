import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-60 z-50 transition-transform duration-300 bg-[#F2EFE8] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4">
        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faTimes}
            size="lg"
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <Link href={"/"}>
            <div className="flex items-center justify-between bg-[#2B9F70] text-white text-sm py-1 px-4 rounded-full shadow-lg mb-4">
              <span>모여봐요 동아리의 숲</span>
            </div>
          </Link>
          <ul className="text-md font-bold mt-6">
            <Link href={"/booth"}>
              <li className="mb-8 flex">
                <Image
                  src="/img/logo.png"
                  width="25"
                  height="20"
                  alt=""
                  className="mr-2"
                />
                부스 안내
              </li>
            </Link>
            <Link href={"/concert"}>
              <li className="mb-8 flex">
                <Image
                  src="/img/logo.png"
                  width="25"
                  height="20"
                  alt=""
                  className="mr-2"
                />
                공연 일정
              </li>
            </Link>

            <Link href={"/guest"}>
              <li className="mb-8 flex">
                <Image
                  src="/img/logo.png"
                  width="25"
                  height="20"
                  alt=""
                  className="mr-2"
                />
                방명록
              </li>
            </Link>
            <Link href={"/notice"}>
              <li className="mb-6 flex">
                <Image
                  src="/img/logo.png"
                  width="25"
                  height="20"
                  alt=""
                  className="mr-2"
                />
                공지사항
              </li>
            </Link>
            {/* <Link href={"/about"}>
              <li className="mb-6 flex">
                <Image
                  src="/img/logo.png"
                  width="25"
                  height="20"
                  alt=""
                  className="mx-2"
                />
                만든 사람
              </li>
            </Link> */}
          </ul>
          {/* <div className="mt-8">
            <Link href={"/login"}>
              <button className="text-blue-600 hover:underline mx-2">
                로그인
              </button>
            </Link>

            <Link href={"/signup"}>
              <button className="text-blue-600 hover:underline mx-2">
                회원가입
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
