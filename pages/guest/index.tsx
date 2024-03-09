import React, { useState } from "react";

export default function GuestPage() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const addComment = () => {
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="bg-[#2B9F70] text-white text-sm py-1.5 px-6 rounded-full shadow-lg mb-4">
          <span>2024 동아리박람회 방명록</span>
        </div>
        <span className="text-xs">
          후기를 남겨주신 분들 중 10명을 추첨하여 스타벅스 쿠폰을 드립니다!
        </span>
      </div>
      <div className="mt-4">
        <textarea
          className="w-full h-24 border rounded-md p-2"
          placeholder="댓글을 입력하세요"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          className="mt-2 bg-[#2B9F70] text-white py-2 px-4 rounded-md hover:bg-green-600"
          onClick={addComment}
        >
          등록
        </button>
      </div>
      {/* 댓글 목록 */}
      <div className="w-full max-w-xl mt-4">
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="border-b py-2">
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
