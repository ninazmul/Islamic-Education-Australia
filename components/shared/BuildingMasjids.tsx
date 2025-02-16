import Image from "next/image";

const BuildingMasjids = () => {
  return (
    <div>
      <div className="px-10 lg:px-20 pt-10 lg:pt-20 pb-4 lg:pb-10 z-20 gap-12 lg:gap-0 mx-auto w-full space-y-4">
        <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
          Building Masjids (Mosques) as
        </h3>
        <h1 className="h2-bold">
          Centres of <span className="text-primary-500">Learning</span>
        </h1>
        <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
          Masjids are the heart of the Muslim community, and they serve as more
          than just places of worship. They are centres for learning, social
          interaction, and spiritual growth. As part of our mission, we aim to
          build and expand masjids that function as vibrant community hubs,
          providing educational programs for all ages, from young children to
          adults.
        </p>
      </div>
      <div className="relative h-[800px] md:h-[700px] lg:h-[350px] overflow-hidden">
        <div className="absolute flex flex-col lg:flex-row items-center justify-around px-10 lg:px-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
          <div className="w-full lg:w-1/2 space-y-4">
            <p className="p-regular-16 md:p-regular-20 font-semibold text-muted-foreground">
              These masjids will provide:
            </p>
            <ol className="flex-1 pl-5 space-y-2 list-decimal">
              <li className="text-sm md:text-md text-muted-foreground">
                - Islamic education for all age groups: Offering Quranic
                classes, Hadith studies, Arabic language courses, and Islamic
                history lessons. The masjid will become an integral space for
                lifelong learning and spiritual development.
              </li>
              <li className="text-sm md:text-md text-muted-foreground">
                - Community engagement: Hosting seminars, workshops, and events
                that foster dialogue on social, ethical, and religious issues.
                This will ensure that the Muslim community remains engaged with
                contemporary issues while remaining firmly grounded in Islamic
                teachings.
              </li>
              <li className="text-sm md:text-md text-muted-foreground">
                - Support for new Muslims and converts: Offering tailored
                programs and support to help new Muslims strengthen their faith
                and understanding of Islam.
              </li>
              <li className="text-sm md:text-md text-muted-foreground">
                - Children’s programs: Offering after-school programs, Islamic
                day camps, and family- friendly events that cater to the needs
                of younger members, helping them grow spiritually and socially.
              </li>
            </ol>
          </div>
          <div className="flex justify-center w-full lg:w-1/2 relative">
            <Image
              src="/assets/images/photos/freepik__the-style-is-candid-image-photography-with-natural__47010.png"
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
      <div className="px-10 lg:px-20 pt-4 lg:pt-10 pb-10 lg:pb-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
          The construction of masjids with integrated learning spaces ensures
          that our mission of holistic, faith-based education is not confined to
          school campuses alone but extends to every aspect of community life.
        </p>
      </div>
    </div>
  );
};

export default BuildingMasjids;
