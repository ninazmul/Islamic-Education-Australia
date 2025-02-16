import Image from "next/image";
import { MdNumbers } from "react-icons/md";

const EducationalPartners = () => {
  return (
    <div className="relative h-[1100px] md:h-[1000px] lg:h-[670px] overflow-hidden">
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
          <h1 className="h2-bold">
            Educational <span className="text-primary-500">Partners</span>
          </h1>
          <ul className="mb-10 md:mb-14">
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Islamic Schools Network (ISN)
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                A national network of Islamic schools across Australia, working
                together to improve educational standards and share best
                practices. Our partnership with ISN enables us to collaborate on
                curriculum development, teacher training, and resource sharing.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  International Islamic University of Australia (IIUA)
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                We work closely with IIUA to provide professional development
                opportunities for educators and offer pathways for students who
                wish to pursue higher education in Islamic studies.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <MdNumbers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  National Centre for Islamic Studies (NCIS)
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                A partner in delivering specialized training programs for
                educators and administrators in Islamic education, as well as
                offering certifications and diplomas in various Islamic studies
                disciplines.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationalPartners;
