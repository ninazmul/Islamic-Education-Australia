"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Pagination from "@/components/shared/Pagination";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SortAsc, SortDesc } from "lucide-react";
import { IBlog } from "@/lib/database/models/blog.model";
import { BlogDeleteConfirmation } from "./BlogDeleteConfirmation";

type BlogsProps = {
  data: IBlog[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
};

const BlogTable = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  urlParamName,
}: BlogsProps) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
    const aValue = a[sortColumn as keyof IBlog];
    const bValue = b[sortColumn as keyof IBlog];
    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    }
    return 0;
  });

  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <Table className="min-w-full border border-gray-200 rounded-md">
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Image</TableHead>

                <TableHead
                  className="cursor-pointer"
                  onClick={() => handleSort("title")}
                >
                  <span className="flex items-center gap-1">
                    Blog Title{" "}
                    {sortColumn === "title" && (
                      <>
                        {sortDirection === "asc" ? (
                          <SortAsc size={"s"} />
                        ) : (
                          <SortDesc />
                        )}
                      </>
                    )}
                  </span>
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => handleSort("location")}
                >
                  Location
                  {sortColumn === "location" && (
                    <>{sortDirection === "asc" ? <SortAsc /> : <SortDesc />}</>
                  )}
                </TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((blog, index) => {

                return (
                  <TableRow key={blog._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        width={50}
                        height={50}
                        className="object-cover rounded-md"
                      />
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`/blogs/${blog._id}`}
                        className="line-clamp-1 w-40 md:w-auto hover:underline"
                      >
                        {blog.title}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <span className="line-clamp-1">{blog.location}</span>
                    </TableCell>
                    <TableCell>
                      <span className="line-clamp-1">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                    </TableCell>
                    
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Link href={`/dashboard/blogs/${blog._id}/update`}>
                          <Image
                            src="/assets/icons/edit.svg"
                            alt="edit"
                            width={20}
                            height={20}
                          />
                        </Link>
                        <BlogDeleteConfirmation blogId={blog._id} />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          {totalPages > 1 && (
            <Pagination
              urlParamName={urlParamName}
              page={page}
              totalPages={totalPages}
            />
          )}
        </div>
      ) : (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
};

export default BlogTable;
