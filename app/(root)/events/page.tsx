import EventCollection from "@/components/shared/EventCollection";
import Search from "@/components/shared/Search";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";

const page = async ({ searchParams }: SearchParamProps) => {
  const { query, page } = await searchParams;

  const currentPage = Number(page) || 1;
  const searchText = (query as string) || "";

  const events = await getAllEvents({
    query: searchText,
    page: currentPage,
    limit: 6,
  });

  return (
    <>
      <section className="bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper ">
          <h2 className="h2-bold">Discover Our Events</h2>
          <p className="p-regular-20 md:p-regular-24">
            Dive into stories, insights, and events that unite the Muslim
            community—
            <br />
            from prayers and celebrations to gatherings and beyond.
          </p>
        </div>
      </section>
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <div className="flex w-full md:w-1/2 lg:w-1/3 flex-col gap-5">
          <Search />
        </div>

        <EventCollection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          limit={6}
          page={currentPage}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
};

export default page;
