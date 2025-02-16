import Image from "next/image";

const InterfaithDialoguesAndCommunityOutreach = () => {
  return (
    <div className="relative h-[1050px] md:h-[930px] lg:h-[650px] overflow-hidden">
      <div className="absolute flex flex-col-reverse lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/photos/freepik__the-style-is-candid-image-photography-with-natural__47007.png"
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
            Interfaith Dialogues and
          </h3>
          <h1 className="h2-bold">
            Community <span className="text-primary-500">Outreach</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            Islamic Education Australia actively fosters interfaith dialogue to
            promote understanding and cooperation between Muslims and other
            religious communities. Events may include:
          </p>
          <ol className="flex-1 pl-5 space-y-2 list-decimal">
            <li className="text-sm md:text-md text-muted-foreground">
              - Panel discussions with religious leaders from different faiths
              on shared values such as compassion, justice, and peace.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Community outreach initiatives aimed at dispelling
              misconceptions about Islam and showcasing the contributions of
              Muslims to Australian society.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Collaborative events with local Christian, Jewish, and other
              religious communities to promote mutual respect and common ground.
            </li>
          </ol>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            These events provide opportunities for both Muslims and non-Muslims
            to engage in meaningful conversations and learn about each
            other&#39;s beliefs and practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterfaithDialoguesAndCommunityOutreach;
