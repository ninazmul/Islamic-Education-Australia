import Image from "next/image";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaBookReader, FaUsers } from "react-icons/fa";

const OurValues = () => {
  return (
    <div className="relative bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center h-[1100px] md:h-[1000px] lg:h-[670px] overflow-hidden">
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
            The Cornerstones of Our Community
          </h3>
          <h1 className="h2-bold">
            Our <span className="text-primary-500">Values</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            At Islamic Education Australia, we uphold three core values that
            guide our mission and shape our community:
          </p>
          <ul className="mb-10 md:mb-14">
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <BsMoonStarsFill className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Committed, Balanced Muslims
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                We encourage students to embrace their faith and identity,
                fostering a sense of belonging and commitment to Islamic
                principles.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <FaBookReader className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Knowledgeable Scholars
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                We strive for academic excellence, inspiring students to pursue
                knowledge and critical thinking while maintaining their faith.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <FaUsers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Contributing Citizens and Community Builders
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                We believe in nurturing responsible citizens who actively
                contribute to society, embodying the values of compassion,
                integrity, and service.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
