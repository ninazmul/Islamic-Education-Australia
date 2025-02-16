import Image from "next/image";
import { MdNumbers } from "react-icons/md";

const CommunityAndReligiousPartners = () => {
  return (
    <div className="relative h-[1280px] md:h-[1030px] lg:h-[780px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Community and
          </h3>
          <h1 className="h2-bold">
            Religious <span className="text-primary-500">Partners</span>
          </h1>
          <ul className="mb-10 md:mb-14">
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Australian National Imams Council (ANIC)
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                ANIC is a key partner in ensuring that our educational programs
                align with the teachings of the Quran and Hadith. Through this
                collaboration, we ensure that our initiatives are guided by
                Islamic scholars and leaders in the community.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Australian Federation of Islamic Councils (AFIC)
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                AFIC supports our initiatives by providing a platform for
                advocacy and policy work related to Islamic education. Their
                guidance helps us navigate educational frameworks and ensure
                that our programs align with national standards.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Local Mosques and Community Centres
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                We collaborate with various local mosques and Islamic Centres
                across Australia to provide supplementary educational programs,
                youth leadership workshops, and events aimed at enriching the
                Muslim community.
              </p>
            </li>
          </ul>
        </div>
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
      </div>
    </div>
  );
};

export default CommunityAndReligiousPartners;
