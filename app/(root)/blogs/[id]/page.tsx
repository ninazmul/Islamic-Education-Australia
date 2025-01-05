import BlogCollection from "@/components/shared/BlogCollection";
import { getAllBlogs, getBlogById } from "@/lib/actions/blog.actions";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const BlogDetails = async ({ params }: PageProps) => {
  const resolvedParams = await params;

  const blog = await getBlogById(resolvedParams.id);

  const relatedBlogs = await getAllBlogs({
    query: "",
    page: 1,
    limit: 3,
  });

  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 2xl:max-w-7xl">
          <Image
            src={blog.imageUrl}
            alt="hero image"
            width={1920}
            height={1000}
            className="lg:w-3/4 object-cover object-center mx-auto p-4"
          />

          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="h2-bold">{blog.title}</h2>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3">
                <Image
                  src="/assets/icons/calendar.svg"
                  alt="calendar"
                  width={32}
                  height={32}
                />
                <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center gap-x-4">
                  <p>
                    {formatDateTime(blog.createdAt).dateOnly} -{" "}
                    {formatDateTime(blog.createdAt).timeOnly}
                  </p>
                </div>
              </div>

              <div className="p-regular-20 flex items-center gap-3">
                <Image
                  src="/assets/icons/location.svg"
                  alt="location"
                  width={32}
                  height={32}
                />
                <p className="p-medium-16 lg:p-regular-20">{blog.location}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">Blog Overview:</p>
              <p className="p-medium-16 lg:p-regular-18">{blog.description}</p>
              <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">
                {blog.url}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      <section className="wrapper my-12 flex flex-col gap-8 md:gap-12">
        <h2 className="text-2xl font-bold text-gray-800">Related Blogs</h2>
        <BlogCollection
          data={relatedBlogs?.data?.slice(0, 3) || []}
          emptyTitle="No Blogs Found"
          emptyStateSubtext="Check back later for more updates."
          limit={3}
          page={1}
          totalPages={relatedBlogs?.totalPages || 1}
        />
        {relatedBlogs?.data?.length > 3 && (
          <div className="flex justify-center">
            <Link href="/blogs">
              <a className="px-6 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-all">
                Show More
              </a>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default BlogDetails;
