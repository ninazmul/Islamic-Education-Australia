/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidatePath } from "next/cache";

import { connectToDatabase } from "@/lib/database";
import { handleError } from "@/lib/utils";

import {
  CreateBlogParams,
  UpdateBlogParams,
  DeleteBlogParams,
  GetAllBlogsParams,
} from "@/types";
import Blog from "../database/models/blog.model";

// CREATE
export async function createBlog({ blog, path }: CreateBlogParams) {
  try {
    await connectToDatabase();

    const newBlog = await Blog.create({
      ...blog,
    });
    revalidatePath(path);

    return JSON.parse(JSON.stringify(newBlog));
  } catch (error) {
    handleError(error);
  }
}

// GET ONE BLOG BY ID
export async function getBlogById(blogId: string) {
  try {
    await connectToDatabase();

    const blog = await Blog.findById(blogId);

    if (!blog) throw new Error("Blog not found");

    return JSON.parse(JSON.stringify(blog));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateBlog({ blog, path }: UpdateBlogParams) {
  try {
    await connectToDatabase();

    const blogToUpdate = await Blog.findById(blog._id);
    if (!blogToUpdate) {
      throw new Error("Blog not found");
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      blog._id,
      { ...blog },
      { new: true }
    );
    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedBlog));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteBlog({ blogId, path }: DeleteBlogParams) {
  try {
    await connectToDatabase();

    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    if (deletedBlog) revalidatePath(path);
  } catch (error) {
    handleError(error);
  }
}

// GET ALL BLOGS
export async function getAllBlogs({
  query,
  limit = 6,
  page,
}: GetAllBlogsParams) {
  try {
    await connectToDatabase();

    const titleCondition = query
      ? { title: { $regex: query, $options: "i" } }
      : {};
    
    const conditions = {
      $and: [
        titleCondition,
      ],
    };

    const skipAmount = (Number(page) - 1) * limit;
    const blogsQuery = Blog.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const blogs = await (blogsQuery);
    const blogsCount = await Blog.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(blogs)),
      totalPages: Math.ceil(blogsCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}
