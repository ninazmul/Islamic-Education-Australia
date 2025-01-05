import { auth } from "@clerk/nextjs/server";
import BlogForm from "../../components/BlogForm";

const CreateBlog = async () => {
  const { sessionClaims } = await auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-green-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Blog
        </h3>
      </section>

      <div className="wrapper my-8">
        <BlogForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateBlog;
