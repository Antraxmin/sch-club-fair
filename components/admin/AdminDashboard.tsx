import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

interface AdminDashboardProps {
  categories: string[];
}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AdminDashboard: React.FC<AdminDashboardProps> = ({ categories }) => {
  const [content, setContent] = useState<string>("");

  const handleAddNotice = () => {};

  return (
    <div className="flex">
      <div className="w-1/6 bg-[#2B9F70] h-screen text-white p-4 text-center">
        <h2 className="text-3xl font-bold mt-24 mb-10">ADMIN</h2>
        <ul className="space-y-6">
          {categories.map((category, index) => (
            <li key={index} className="text-lg hover:underline cursor-pointer">
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-5/6 p-4">
        <h1 className="text-3xl font-bold mb-4">공지사항 관리</h1>
        <div className="mb-6">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={(value) => setContent(value)}
          />
          <button
            onClick={handleAddNotice}
            className="bg-[#2B9F70] text-white py-2 px-4 rounded-md mt-2"
          >
            추가
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
