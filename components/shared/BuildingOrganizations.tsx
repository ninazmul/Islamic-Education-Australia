import Image from "next/image";

const BuildingOrganizations = () => {
  return (
    <div>
      <div className="px-10 lg:px-20 pt-10 lg:pt-20 pb-4 lg:pb-10 z-20 gap-12 lg:gap-0 mx-auto w-full space-y-4">
        <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
          Building Other (Community Centres, Libraries, Online Platforms)
        </h3>
        <h1 className="h2-bold">
          Learning <span className="text-primary-500">Organizations</span>
        </h1>
        <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
          Beyond traditional schools and masjids, we envision a network of other
          educational organizations that complement and extend the learning
          experience.
        </p>
      </div>
      <div className="relative h-[950px] md:h-[700px] lg:h-[350px] overflow-hidden">
        <div className="absolute flex flex-col-reverse lg:flex-row items-center justify-around px-10 lg:px-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
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
          <div className="w-full lg:w-1/2 space-y-4">
            <p className="p-regular-16 md:p-regular-20 font-semibold text-muted-foreground">
              These include:
            </p>
            <ol className="flex-1 pl-5 space-y-2 list-decimal">
              <li className="text-sm md:text-md text-muted-foreground">
                - Community Learning Centres: Establishing Centres that provide
                a wide range of educational services such as vocational
                training, leadership development, counselling, and workshops on
                entrepreneurship, all infused with Islamic ethics.
              </li>
              <li className="text-sm md:text-md text-muted-foreground">
                - Libraries and Resource Hubs: Creating spaces filled with
                books, multimedia, and online resources where students and
                community members can deepen their knowledge of Islam,
                contemporary issues, and personal development. These libraries
                would serve as repositories of both traditional and modern
                Islamic knowledge, offering access to a wide range of subjects
                from Islamic philosophy to current global affairs.
              </li>
              <li className="text-sm md:text-md text-muted-foreground">
                - Online Educational Platforms: Developing innovative online
                courses and e-learning tools that enable students to access
                Islamic education from anywhere in Australia. These platforms
                will cater to various needs, including adult education,
                specialized Islamic subjects, and support for parents looking to
                integrate Islamic teachings into their homes and communities.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="px-10 lg:px-20 pt-4 lg:pt-10 pb-10 lg:pb-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
          Through these learning organizations, we aim to build a comprehensive
          and interconnected educational ecosystem that ensures continuous
          access to Islamic knowledge at every stage of life. These spaces will
          empower individuals to pursue their educational journeys while
          remaining aligned with the teachings of Islam.
        </p>
      </div>
    </div>
  );
};

export default BuildingOrganizations;
