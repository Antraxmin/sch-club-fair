import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface AdminDashboardProps {
  categories: string[];
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ categories }) => {
  const [content, setContent] = useState<string>("");

  const handleAddNotice = () => {
    // content 상태를 사용하여 공지사항을 추가하는 로직을 작성하세요.
  };

  return (
    <div className="flex">
      {/* Sidebar */}
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
      {/* Main content */}
      <div className="w-5/6 p-4">
        <h1 className="text-3xl font-bold mb-4">공지사항 관리</h1>
        {/* 공지사항 추가 */}
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
        {/* 공지사항 목록 */}
        {/* 필요한 공지사항 목록 UI를 추가하세요. */}
      </div>
    </div>
  );
};

export default AdminDashboard;
