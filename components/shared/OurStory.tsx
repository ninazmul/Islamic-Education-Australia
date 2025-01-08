import Image from "next/image";

const OurStory = () => {
  return (
    <div className="relative h-[1450px] md:h-[1250px] lg:h-[1000px] overflow-hidden">
      <div className="absolute flex flex-col-reverse lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
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
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            A Journey of Faith, Education, and Community Building
          </h3>
          <h1 className="h2-bold">
            Our <span className="text-primary-500">Story</span>
          </h1>
          <div className="space-y-4">
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              Islamic Education Australia was born from a shared vision and a
              spiritual journey. The founding members connected during their
              Hajj pilgrimage, where they discovered a mutual passion for
              education and community building. Inspired by their faith and love
              for the Muslim community, they committed to creating a space where
              young Australian Muslims could thrive academically, spiritually,
              and socially.
            </p>
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              Islamic Education Australia was born from a shared vision and a
              spiritual journey. The founding members connected during their
              Hajj pilgrimage, where they discovered a mutual passion for
              education and community building. Inspired by their faith and love
              for the Muslim community, they committed to creating a space where
              young Australian Muslims could thrive academically, spiritually,
              and socially.
            </p>
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              Islamic Education Australia was born from a shared vision and a
              spiritual journey. The founding members connected during their
              Hajj pilgrimage, where they discovered a mutual passion for
              education and community building. Inspired by their faith and love
              for the Muslim community, they committed to creating a space where
              young Australian Muslims could thrive academically, spiritually,
              and socially.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
