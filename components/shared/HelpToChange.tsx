import Image from "next/image";

const HelpToChange = () => {
  return (
    <div className="relative h-[750px] md:h-[800px] lg:h-[530px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Be Part of a Lasting Impact
          </h3>
          <h1 className="h2-bold">
            Help To Change a{" "}
            <span className="text-primary-500">Life Forever</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            By supporting Islamic Education Australia, you’re investing in the
            future of our children and the broader Australian-Muslim community.
            Your contribution will help us provide quality education, build a
            mosque, and create a community center that fosters growth,
            leadership, and faith. Together, we can shape the leaders of
            tomorrow and strengthen our community.
          </p>
        </div>
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/photos/Designer (13).jpeg"
            width={500}
            height={500}
            alt="Islamic Education Australia logo"
            className="w-full md:w-2/3 z-10"
          />
          <div className="absolute -right-[7%] md:right-[11.5%] lg:right-[8%] -top-[12%] md:-top-[13%] lg:-top-[20%] rounded-none p-20 bg-yellow-400 " />
          <div className="absolute -left-[7%] md:left-[11.5%] lg:left-[8%] -bottom-[12%] md:-bottom-[12%] lg:-bottom-[20%] rounded-none p-20 bg-yellow-400 " />
        </div>
      </div>
    </div>
  );
};

export default HelpToChange;
