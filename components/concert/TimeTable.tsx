import React, { useState } from "react";

export default function Timetable() {
  const [selectedTab, setSelectedTab] = useState("Day1");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setSelectedTab(tab);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="flex justify-evenly">
        <button
          onClick={() => handleTabClick("Day1")}
          className={`text-lg font-medium focus:outline-none ${
            selectedTab === "Day1" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          1일차
        </button>
        <button
          onClick={() => handleTabClick("Day2")}
          className={`text-lg font-medium focus:outline-none ${
            selectedTab === "Day2" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          2일차
        </button>
      </div>
      <div className="mb-8 mt-4">
        {selectedTab === "Day1" && (
          <div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm text-gray-500">18:00 ~ 18:30</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                UNTITLE
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm text-gray-500">18:30 ~ 19:00 </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">REAL</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm text-gray-500">19:00 ~ 19:25 </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                DENIS
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm text-gray-500">19:25 ~ 20:00 </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                Thu.G
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm text-gray-500">19:00 ~ 19:25 </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                합동공연 - UNTITLE x REAL x DENIS x Thu.G
              </dd>
            </div>
          </div>
        )}
        {selectedTab === "Day2" && (
          <div>
            <div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm text-gray-500">18:00 ~ 18:30</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  클로저
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm text-gray-500">18:30 ~ 19:00</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  크레인
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm text-gray-500">19:00 ~ 19:30</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  이그니어스
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm text-gray-500">19:30 ~ 20:00</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  CHORD
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm text-gray-500">20:00 ~ </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  CUBE
                </dd>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
