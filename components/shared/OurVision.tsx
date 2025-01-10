import Image from "next/image";

const OurVision = () => {
  return (
    <div className="relative h-[740px] md:h-[750px] lg:h-[480px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Shaping Tomorrow’s Leaders
          </h3>
          <h1 className="h2-bold">
            Our <span className="text-primary-500">Vision</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            At Islamic Education Australia, our vision is to inspire and nurture
            future leaders by providing an educational experience that blends
            academic excellence with Islamic values. We aim to empower students
            to embrace their Australian-Muslim identity with confidence,
            developing a strong moral character, grounded in faith and
            integrity.
          </p>
        </div>
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
      </div>
    </div>
  );
};

export default OurVision;
