import { Document, Schema, model, models } from "mongoose";

export interface IBlog extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  url?: string;
}

const BlogSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  url: { type: String },
});

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;
