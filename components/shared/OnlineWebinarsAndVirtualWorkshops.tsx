import Image from "next/image";

const OnlineWebinarsAndVirtualWorkshops = () => {
  return (
    <div className="relative h-[1030px] md:h-[900px] lg:h-[600px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Online Webinars and
          </h3>
          <h1 className="h2-bold">
            Virtual <span className="text-primary-500">Workshops</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            In response to the increasing demand for digital learning, Islamic
            Education Australia offers a variety of online events, including:
          </p>
          <ol className="flex-1 pl-5 space-y-2 list-decimal">
            <li className="text-sm md:text-md text-muted-foreground">
              - Virtual Quran study circles, where participants can join from
              anywhere to study the Quran together.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Online workshops on personal development, including time
              management, stress management, and achieving academic success with
              Islamic values.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Virtual conferences with international speakers on topics like
              Islamic philosophy, social justice, and contemporary issues facing
              Muslims worldwide.
            </li>
          </ol>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            These online events ensure that individuals across Australia and
            beyond can access high- quality Islamic education and engage with
            experts without geographical limitations.
          </p>
        </div>
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/photos/freepik__the-style-is-candid-image-photography-with-natural__88170.png"
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

export default OnlineWebinarsAndVirtualWorkshops;
