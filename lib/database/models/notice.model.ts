import { Document, Schema, Types, model, models } from "mongoose";

export interface INoticeBoard extends Document {
  _id: Types.ObjectId;
  notice: string;
}

const NoticeBoardSchema = new Schema({
  notice: { type: String, required: true, unique: true },
});

const NoticeBoard = models.NoticeBoard || model("NoticeBoard", NoticeBoardSchema);

export default NoticeBoard;
