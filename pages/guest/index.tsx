import React, { useState } from "react";

export default function GuestPage() {
  const [comments, setComments] = useState<
    {
      studentId: string;
      phoneNumber: string;
      comment: string;
      timestamp: string;
    }[]
  >([]);
  const [newComment, setNewComment] = useState<string>("");
  const [studentId, setStudentId] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const addComment = () => {
    const timestamp = new Date().toLocaleString();
    setComments([
      ...comments,
      {
        studentId: studentId,
        phoneNumber: phoneNumber,
        comment: newComment,
        timestamp: timestamp,
      },
    ]);
    setNewComment("");
    setStudentId("");
    setPhoneNumber("");
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="bg-[#2B9F70] text-white text-sm py-1.5 px-6 rounded-full shadow-lg mb-6">
          <span>2024 동아리박람회 방명록</span>
        </div>
        <span className="text-xs">
          후기를 남겨주신 분들 중 10명을 추첨하여 스타벅스 쿠폰을 드립니다!
        </span>
      </div>
      {/* 학번 및 전화번호 입력 폼 */}
      <div className="flex mt-4">
        <div className="w-1/2 mr-2">
          <input
            type="text"
            className="w-full border rounded-md p-2"
            placeholder="학번을 입력하세요"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <div className="w-1/2 ml-2">
          <input
            type="text"
            className="w-full border rounded-md p-2"
            placeholder="전화번호를 입력하세요"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
      {/* 댓글 입력 폼 */}
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
      <div className="w-full max-w-xl mt-10">
        <ul>
          {comments
            .map((comment, index) => (
              <li
                key={index}
                className="border-b py-2  w-full bg-white rounded-md p-2"
              >
                <div className="flex flex-col">
                  <div className="text-gray-500 mb-1 text-xs">
                    {comment.studentId}
                  </div>
                  <div className="text-gray-700 my-2">{comment.comment}</div>
                  <div className="text-gray-500 text-xs text-right">
                    {comment.timestamp}
                  </div>
                </div>
              </li>
            ))
            .reverse()}
        </ul>
      </div>
    </>
  );
}
