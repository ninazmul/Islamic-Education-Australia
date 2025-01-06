import Image from "next/image";

const OurMission = () => {
  return (
    <div className="relative h-[740px] md:h-[750px] lg:h-[480px] overflow-hidden">
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
            Guiding Excellence with Islamic Values
          </h3>
          <h1 className="h2-bold">
            Our <span className="text-primary-500">Mission</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            At Muslim College Sydney, our mission is to create an environment
            where children thrive academically, spiritually, and morally. We are
            dedicated to helping students achieve their highest potential
            through a balanced education, rooted in Islamic morals, scholastic
            excellence, and responsible citizenship. Our aim is to prepare
            students to succeed in life while upholding strong Islamic
            principles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
