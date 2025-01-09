import Image from "next/image";

const FamilyAndCommunityDayFestivals = () => {
  return (
    <div className="relative h-[900px] md:h-[900px] lg:h-[600px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Family and Community
          </h3>
          <h1 className="h2-bold">
            Day <span className="text-primary-500">Festivals</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            These events are aimed at bringing the broader Muslim community
            together for a day of learning, fun, and connection. They may
            feature:
          </p>
          <ol className="flex-1 pl-5 space-y-2 list-decimal">
            <li className="text-sm md:text-md text-muted-foreground">
              - Interactive booths and workshops on topics such as Islamic
              parenting, family life, and educational resources.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Quran recitation and memorization contests for children.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Islamic art and craft activities for younger attendees.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Family-friendly lectures or storytelling sessions on Islamic
              history and values.
            </li>
          </ol>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            These festivals serve to strengthen community bonds, provide
            valuable resources, and offer an enjoyable atmosphere for families
            to connect with one another.
          </p>
        </div>
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/Service/knowledge.png"
            width={500}
            height={500}
            alt="Islamic Education Australia Ltd logo"
            className="w-full md:w-2/3 z-10"
          />
          <div className="absolute -right-[7%] md:right-[11.5%] lg:right-[8%] -top-[12%] md:-top-[13%] lg:-top-[20%] rounded-none p-20 bg-yellow-400 " />
          <div className="absolute -left-[7%] md:left-[11.5%] lg:left-[8%] -bottom-[12%] md:-bottom-[12%] lg:-bottom-[20%] rounded-none p-20 bg-yellow-400 " />
        </div>
      </div>
    </div>
  );
};

export default FamilyAndCommunityDayFestivals;
