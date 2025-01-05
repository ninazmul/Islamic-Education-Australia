import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllBlogs } from "@/lib/actions/blog.actions";
import BlogTable from "../components/BlogTable";
import { SearchParamProps } from "@/types";
import Search from "@/components/shared/Search";

const page = async ({ searchParams }: SearchParamProps) => {
  const { query, page } = await searchParams;

  const currentPage = Number(page) || 1;
  const searchText = (query as string) || "";

  const blogs = await getAllBlogs({
    query: searchText,
    page: currentPage,
    limit: 6,
  });

  return (
    <>
      <section className="bg-green-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex flex-wrap justify-between items-center">
          <h3 className="h3-bold text-center sm:text-left">All Blogs</h3>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/dashboard/blogs/create">Create Blog</Link>
          </Button>
        </div>
      </section>

      <div className="wrapper my-8">
        <div className="w-full md:w-1/2 lg:w-1/3 my-6">
          <Search />
        </div>
        <BlogTable
          data={blogs?.data}
          emptyTitle="No Blogs Found"
          emptyStateSubtext="Come back later"
          limit={6}
          page={currentPage}
          totalPages={blogs?.totalPages}
        />
      </div>
    </>
  );
};

export default page;
