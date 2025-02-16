import Image from "next/image";

const EducationalFundraisingGalas = () => {
  return (
    <div className="relative h-[1050px] md:h-[900px] lg:h-[670px] overflow-hidden">
      <div className="absolute flex flex-col-reverse lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/photos/freepik__the-style-is-candid-image-photography-with-natural__37747.png"
            width={500}
            height={500}
            alt="Islamic Education Australia logo"
            className="w-full md:w-2/3 z-10"
          />
          <div className="absolute -right-[7%] md:right-[11.5%] lg:right-[8%] -top-[12%] md:-top-[13%] lg:-top-[20%] rounded-none p-20 bg-yellow-400 " />
          <div className="absolute -left-[7%] md:left-[11.5%] lg:left-[8%] -bottom-[12%] md:-bottom-[12%] lg:-bottom-[20%] rounded-none p-20 bg-yellow-400 " />
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Educational
          </h3>
          <h1 className="h2-bold">
            Fundraising <span className="text-primary-500">Galas</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            These formal events raise funds to support the expansion and
            improvement of Islamic education facilities, such as schools,
            libraries, and learning Centres. The galas may include:
          </p>
          <ol className="flex-1 pl-5 space-y-2 list-decimal">
            <li className="text-sm md:text-md text-muted-foreground">
              - Dinner and networking opportunities for educators,
              philanthropists, and community leaders.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Live entertainment, speeches from community leaders, and success
              stories of how Islamic education has transformed lives.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Silent auctions and raffles with proceeds supporting educational
              scholarships and development projects.
            </li>
          </ol>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            These events help ensure the continued growth of Islamic education
            in Australia and provide financial support for students who may
            require scholarships or financial assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationalFundraisingGalas;
