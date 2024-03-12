// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Drawer from "@/components/common/Drawer";

// export default function Home() {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [isPcScreen, setIsPcScreen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   const closeDrawer = () => {
//     setIsDrawerOpen(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsPcScreen(window.innerWidth > 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div
//       className={`relative w-screen h-screen bg-[#363636] ${
//         isPcScreen ? "max-w-md mx-auto " : ""
//       }`}
//     >
//       <div onClick={toggleDrawer} className="cursor-pointer">
//         <Image
//           src="/img/main.svg"
//           layout="responsive"
//           width={1920}
//           height={1080}
//           objectFit="cover"
//           alt=""
//         />
//       </div>
//       <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";

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

  const addComment = async () => {
    try {
      const timestamp = new Date().toLocaleString();
      const response = await axios.post("/api/comments", {
        studentId: studentId,
        phoneNumber: phoneNumber,
        comment: newComment,
        timestamp: timestamp,
      });
      console.log(response.data);
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
    } catch (error) {
      console.error("댓글을 등록하는 데 문제가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("/api/comments");
        setComments(response.data);
      } catch (error) {
        console.error("댓글을 불러오는 데 문제가 발생했습니다:", error);
      }
    };
    fetchComments();
  }, []);

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
