import Image from "next/image";
import { MdNumbers } from "react-icons/md";

const MediaAndOutreachPartners = () => {
  return (
    <div className="relative h-[1300px] md:h-[1030px] lg:h-[750px] overflow-hidden">
      <div className="absolute flex flex-col-reverse lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/photos/knowledge.png"
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
            Media and
          </h3>
          <h1 className="h2-bold">
            Outreach <span className="text-primary-500">Partners</span>
          </h1>
          <ul className="mb-10 md:mb-14">
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">Muslim Village</h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                A leading online platform for the Australian Muslim community,
                Muslim Village supports our events and programs by providing
                coverage, promoting educational resources, and engaging with a
                wide audience through social media and newsletters.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Radio Islam Australia
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Our partnership with Radio Islam Australia enables us to reach a
                broader audience through radio programs that discuss Islamic
                education, community initiatives, and important issues affecting
                the Muslim community in Australia.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Islamic Information and Services Network of Australia (IISNA)
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                IISNA collaborates with us in delivering educational resources
                and broadcasting initiatives that aim to promote Islamic
                knowledge and raise awareness about key educational issues
                within the Muslim community.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MediaAndOutreachPartners;
