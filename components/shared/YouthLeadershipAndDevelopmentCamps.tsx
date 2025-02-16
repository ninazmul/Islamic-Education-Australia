import Image from "next/image";

const YouthLeadershipAndDevelopmentCamps = () => {
  return (
    <div className="relative h-[1000px] md:h-[930px] lg:h-[600px] overflow-hidden">
      <div className="absolute flex flex-col-reverse lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/photos/freepik__the-style-is-candid-image-photography-with-natural__93473.png"
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
            Youth Leadership and
          </h3>
          <h1 className="h2-bold">
            Development <span className="text-primary-500">Camps</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            Specially designed for teenagers and young adults, these camps focus
            on leadership, personal development, and Islamic character building.
            Activities include:
          </p>
          <ol className="flex-1 pl-5 space-y-2 list-decimal">
            <li className="text-sm md:text-md text-muted-foreground">
              - Leadership workshops that focus on building confidence,
              teamwork, and decision-making skills.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Islamic discussions on topics like social responsibility,
              ethics, and activism from an Islamic perspective.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Outdoor activities such as team-building exercises, sports, and
              group discussions that encourage collaboration and interpersonal
              growth.
            </li>
          </ol>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            These camps also aim to empower young people to become community
            leaders and role models, with a strong sense of faith and
            responsibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YouthLeadershipAndDevelopmentCamps;
