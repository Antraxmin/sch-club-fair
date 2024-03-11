import mongoose, { Schema, Document } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/utils/db/dbConnect";

interface CommentModel extends Document {
  studentId: string;
  phoneNumber: string;
  comment: string;
  timestamp: string;
}

connectDB();

const commentSchema = new Schema<CommentModel>({
  studentId: String,
  phoneNumber: String,
  comment: String,
  timestamp: String,
});

let Comment: mongoose.Model<CommentModel>;
try {
  Comment = mongoose.model<CommentModel>("Comment");
} catch {
  Comment = mongoose.model<CommentModel>("Comment", commentSchema);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { studentId, phoneNumber, comment } = req.body;
      const timestamp = new Date().toLocaleString();

      const newComment = new Comment({
        studentId,
        phoneNumber,
        comment,
        timestamp,
      });
      await newComment.save();

      res.status(201).json({ message: "댓글이 등록되었습니다." });
    } catch (error) {
      res
        .status(500)
        .json({ error: "댓글을 등록하는 데 문제가 발생했습니다." });
    }
  } else if (req.method === "GET") {
    try {
      const comments = await Comment.find();

      res.status(200).json(comments);
    } catch (error) {
      res
        .status(500)
        .json({ error: "댓글을 불러오는 데 문제가 발생했습니다." });
    }
  } else {
    res.status(405).json({ error: "지원되지 않는 메서드입니다." });
  }
}
