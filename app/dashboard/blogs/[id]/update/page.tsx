import BlogForm from "@/app/dashboard/components/BlogForm";
import { getBlogById } from "@/lib/actions/blog.actions";
import { auth } from "@clerk/nextjs/server";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const UpdateBlog = async ({ params }: PageProps) => {
  const { sessionClaims } = await auth();

  const userId = sessionClaims?.userId as string;
  const resolvedParams = await params;
  const blog = await getBlogById(resolvedParams.id);

  return (
    <>
      <section className="bg-green-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Blog
        </h3>
      </section>

      <div className="wrapper my-8">
        <BlogForm type="Update" blog={blog} blogId={blog._id} userId={userId} />
      </div>
    </>
  );
};

export default UpdateBlog;
