import Image from "next/image";
import { MdNumbers } from "react-icons/md";

const CorporateAndOrganizationalSponsors = () => {
  return (
    <div className="relative h-[1500px] md:h-[1190px] lg:h-[920px] overflow-hidden">
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
            Corporate and
          </h3>
          <h1 className="h2-bold">
            Organizational <span className="text-primary-500">Sponsors</span>
          </h1>
          <ul className="mb-10 md:mb-14">
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  AlHuda Educational Group
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                AlHuda provides financial support and educational resources that
                enable us to expand our online educational platforms and offer
                scholarships for students pursuing Islamic studies.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Barakah Investments
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                A corporate partner committed to supporting educational
                initiatives, Barakah Investments sponsors our leadership
                development programs, helping to empower young Muslims to excel
                in their academic and personal lives.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Qatar Charity Australia
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Through Qatar Charity, we receive funding for our community
                outreach programs, including our charity events, volunteer days,
                and humanitarian education initiatives. They are instrumental in
                supporting our mission to provide education for all.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Islamic Relief Australia
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Islamic Relief collaborates with us on educational campaigns and
                fundraising events. Together, we work to raise awareness about
                the importance of education and provide access to educational
                resources for underserved communities.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CorporateAndOrganizationalSponsors;
