import Image from "next/image";
import { FaKaaba, FaMosque } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";

const OurPriorities = () => {
  return (
    <div className="relative bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center h-[1170px] md:h-[1050px] lg:h-[760px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Guiding Principles for Success
          </h3>
          <h1 className="h2-bold">
            Our <span className="text-primary-500">Priorities</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            At Islamic Education Australia, our priorities reflect the
            foundational pillars of Islamic life and moral excellence. These
            principles guide our approach to education and character-building:
          </p>
          <ul className="mb-10 md:mb-14">
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <FaKaaba className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">Faith (Imaan)</h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Instilling a deep connection with Islamic faith to help students
                remain grounded in their beliefs while navigating the challenges
                of modern life.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <FaMosque className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">Prayer (Salah)</h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Encouraging the practice of regular prayer to foster discipline,
                mindfulness, and a strong relationship with Allah in daily life.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <FaHandshakeAngle className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Strong Moral Character (Akhlaaq)
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Encouraging the practice of regular prayer to foster discipline,
                mindfulness, and a strong relationship with Allah in daily life.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/photos/freepik__the-style-is-candid-image-photography-with-natural__47012.png"
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

export default OurPriorities;
