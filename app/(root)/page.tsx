import BlogCollection from "@/components/shared/BlogCollection";
import { ContactUs } from "@/components/shared/ContactUs";
import HelpToChange from "@/components/shared/HelpToChange";
import Hero from "@/components/shared/Hero";
import OurMission from "@/components/shared/OurMission";
import OurVision from "@/components/shared/OurVision";
import Search from "@/components/shared/Search";
import ServicesCollection from "@/components/shared/ServicesCollection";
import ShortAbout from "@/components/shared/ShortAbout";
import { getAllBlogs } from "@/lib/actions/blog.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
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
      <section className="">
        <Hero />
      </section>
      <section className="bg-gray-50">
        <ShortAbout />
      </section>
      <section className="bg-gray-50">
        <HelpToChange />
      </section>
      <section className="bg-gray-50">
        <OurMission />
      </section>
      <section className="bg-gray-50">
        <OurVision />
      </section>

      <section
        id="blogs"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Insights and Stories <br /> for the Muslim Community
        </h2>

        <div className="flex w-full md:w-1/2 lg:w-1/3 flex-col gap-5">
          <Search />
        </div>

        <BlogCollection
          data={blogs?.data}
          emptyTitle="No Blogs Found"
          emptyStateSubtext="Come back later"
          limit={6}
          page={currentPage}
          totalPages={blogs?.totalPages}
        />
      </section>

      <section
        id="services"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Comprehensive Services <br /> for the Muslim Community
        </h2>

        <ServicesCollection />
      </section>
      <section id="shareIdeas" className="my-8 flex flex-col gap-8 md:gap-12">
        <div>
          <div className="bg-gradient-to-r from-primary-900 to-primary-500 text-white dark:text-green-200 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 md:justify-items-center">
              <div className="flex items-center gap-2 text-xl md:text-2xl font-serif">
                <Image
                  src="/assets/images/Service/volunteer.png"
                  alt="Service Image"
                  width={50}
                  height={50}
                  className=""
                />
                <Link href={"/join"}>Volunteer Sign Up Here</Link>
              </div>
              <div className="flex items-center gap-2 text-xl md:text-2xl font-serif">
                <Image
                  src="/assets/images/Service/ask.png"
                  alt="Service Image"
                  width={50}
                  height={50}
                  className=""
                />
                <Link href={"#shareIdeas"}>Ask a Question</Link>
              </div>
              <div className="flex items-center gap-2 text-xl md:text-2xl font-serif">
                <Image
                  src="/assets/images/Service/donation.png"
                  alt="Service Image"
                  width={50}
                  height={50}
                  className=""
                />
                <Link href={"/"}>Donate</Link>
              </div>
            </div>
          </div>
          <div className="-mt-14 wrapper">
            <ContactUs />
          </div>
        </div>
      </section>
    </>
  );
}
