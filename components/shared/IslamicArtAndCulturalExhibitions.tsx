import Image from "next/image";

const IslamicArtAndCulturalExhibitions = () => {
  return (
    <div className="relative h-[950px] md:h-[900px] lg:h-[600px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Islamic Art and
          </h3>
          <h1 className="h2-bold">
            Cultural <span className="text-primary-500">Exhibitions</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            These exhibitions celebrate the rich cultural heritage of Islam and
            showcase the contributions of Muslim artists, scholars, and
            innovators. The events may feature:
          </p>
          <ol className="flex-1 pl-5 space-y-2 list-decimal">
            <li className="text-sm md:text-md text-muted-foreground">
              - Displays of Islamic calligraphy, architecture, and traditional
              crafts.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Performances of Islamic music, poetry, and storytelling.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Workshops on creating Islamic art and exploring Islamic cultural
              history.
            </li>
          </ol>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            These exhibitions serve to educate both the Muslim community and the
            wider public on the beauty and depth of Islamic culture, fostering
            pride in Islamic heritage and encouraging cross-cultural
            understanding.
          </p>
        </div>
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/photos/freepik__the-style-is-candid-image-photography-with-natural__47011.png"
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

export default IslamicArtAndCulturalExhibitions;
