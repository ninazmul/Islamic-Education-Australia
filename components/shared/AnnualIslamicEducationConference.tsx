import Image from "next/image";

const AnnualIslamicEducationConference = () => {
  return (
    <div className="relative h-[950px] md:h-[850px] lg:h-[550px] overflow-hidden">
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
            Annual Islamic
          </h3>
          <h1 className="h2-bold">
            Education <span className="text-primary-500">Conference</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            A premier event bringing together educators, scholars, and thought
            leaders from across the country to discuss key issues in Islamic
            education, curriculum development, and the integration of faith in
            academic learning. The conference features keynote speakers, panel
            discussions, and workshops on topics such as:
          </p>
          <ol className="flex-1 pl-5 space-y-2 list-decimal">
            <li className="text-sm md:text-md text-muted-foreground">
              - The future of Islamic education in Australia.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Addressing challenges faced by Muslim students in mainstream
              schools.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Incorporating Islamic values into contemporary education.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - The role of technology in enhancing Islamic learning.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AnnualIslamicEducationConference;
