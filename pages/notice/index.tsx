import React from "react";

const notices = [
  {
    id: 1,
    title: "첫 번째 공지사항 제목",
    author: "총학생회",
    content: "첫 번째 공지사항 내용",
  },
  {
    id: 2,
    title: "두 번째 공지사항 제목",
    author: "총학생회",
    content: "두 번째 공지사항 내용",
  },
];

export default function NoticePage() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="bg-[#2B9F70] text-white text-sm py-2 px-8 rounded-full shadow-lg mb-4">
          <span>공지사항</span>
        </div>
        <div className="w-full max-w-md mt-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-lg shadow-md overflow-hidden mb-4"
            >
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-[#2B9F70] rounded-full flex items-center justify-center mr-3">
                    <img src="/img/icon.png" alt="Avatar" className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {notice.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      작성자: {notice.author}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">{notice.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
