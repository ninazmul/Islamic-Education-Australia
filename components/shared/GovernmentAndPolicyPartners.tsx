import Image from "next/image";
import { MdNumbers } from "react-icons/md";

const GovernmentAndPolicyPartners = () => {
  return (
    <div className="relative h-[1350px] md:h-[1100px] lg:h-[800px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Government and
          </h3>
          <h1 className="h2-bold">
            Policy <span className="text-primary-500">Partners</span>
          </h1>
          <ul className="mb-10 md:mb-14">
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Department of Education and Training (State and Federal)
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                We maintain a close working relationship with government bodies
                to ensure our programs meet national educational standards.
                Through this partnership, we receive guidance on curriculum
                design, educational policy, and funding opportunities to support
                Islamic education in Australia.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Multicultural Affairs Department
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Our partnership with the Multicultural Affairs Department
                enables us to advocate for policies that promote diversity and
                inclusion in education. We collaborate on programs that help
                integrate Muslim students into the broader Australian
                educational landscape while preserving their cultural identity.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Australian Human Rights Commission (AHRC)
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                The AHRC is an important partner in supporting initiatives that
                foster equality and social justice in education. Together, we
                work to raise awareness about the rights of Muslim students and
                advocate for policies that ensure equal access to quality
                education.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/Service/knowledge.png"
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

export default GovernmentAndPolicyPartners;
