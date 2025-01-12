import Image from "next/image";

const QuranicAndIslamicStudiesSeminars = () => {
  return (
    <div className="relative h-[950px] md:h-[900px] lg:h-[600px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Quranic and Islamic
          </h3>
          <h1 className="h2-bold">
            Studies <span className="text-primary-500">Seminars</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            These seminars are designed for individuals of all ages who wish to
            deepen their understanding of the Quran, Hadith, and Islamic
            jurisprudence. Topics may include:
          </p>
          <ol className="flex-1 pl-5 space-y-2 list-decimal">
            <li className="text-sm md:text-md text-muted-foreground">
              - Tafsir (exegesis) of the Quran, exploring themes and verses.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Understanding the life and teachings of the Prophet Muhammad
              (PBUH).
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Islamic ethics and their relevance in the modern world.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - The history and contributions of Islamic scholars.
            </li>
          </ol>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            These seminars may feature renowned scholars and educators who
            provide in-depth explanations and discussions, often followed by
            Q&amp;A sessions to encourage engagement and personal reflection.
          </p>
        </div>
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/Service/knowledge.png"
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

export default QuranicAndIslamicStudiesSeminars;
