import Image from "next/image";

const IslamicParentingWorkshops = () => {
  return (
    <div className="relative h-[1000px] md:h-[900px] lg:h-[630px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Islamic
          </h3>
          <h1 className="h2-bold">
            Parenting <span className="text-primary-500">Workshops</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            These workshops provide parents with the tools and knowledge to
            effectively nurture their children’s faith, morals, and education.
            Topics include:
          </p>
          <ol className="flex-1 pl-5 space-y-2 list-decimal">
            <li className="text-sm md:text-md text-muted-foreground">
              - Raising children with Islamic values in a multicultural society.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Balancing academic success with spiritual development.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Addressing contemporary challenges faced by Muslim youth, such
              as peer pressure and identity issues.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Creating a supportive and nurturing home environment for
              children’s educational growth.
            </li>
          </ol>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            Experienced educators, psychologists, and Islamic scholars lead
            these workshops, providing practical advice, strategies, and
            resources for parents.
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

export default IslamicParentingWorkshops;
