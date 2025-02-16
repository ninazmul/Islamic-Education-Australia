import Image from "next/image";
import { MdNumbers } from "react-icons/md";

const InternationalPartners = () => {
  return (
    <div className="relative h-[1100px] md:h-[900px] lg:h-[600px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="h2-bold">
            International <span className="text-primary-500">Partners</span>
          </h1>
          <ul className="mb-10 md:mb-14">
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  The World Assembly of Muslim Youth (WAMY)
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                WAMY works with us to support youth development programs,
                leadership training, and educational exchanges. Through our
                partnership, we facilitate global exposure for young Muslims,
                helping them to become informed and active participants in their
                local communities.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  The Islamic Educational, Scientific and Cultural Organization
                  (ISESCO)
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                A partner on international educational projects, ISESCO
                collaborates with us on initiatives that promote Islamic
                education worldwide. Through this partnership, we engage in
                cross-border educational programs and share resources and
                expertise on best practices in Islamic pedagogy.
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

export default InternationalPartners;
