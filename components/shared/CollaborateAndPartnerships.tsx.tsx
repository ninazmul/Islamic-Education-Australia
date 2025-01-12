import Image from "next/image";

const CollaborateAndPartnerships = () => {
  return (
    <div className="relative h-[750px] md:h-[800px] lg:h-[530px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Be Part of us
          </h3>
          <h1 className="h2-bold">
            Collaboration and{" "}
            <span className="text-primary-500">Partnerships</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            Building schools, masjids, and learning organizations is not a task
            we aim to accomplish alone. We will collaborate with other
            educational institutions, community organizations, local
            governments, and Muslim leaders to create a holistic infrastructure
            that supports education in all forms. Partnerships with Islamic
            scholars, educators, architects, and community members will help
            ensure that our facilities meet the highest standards of educational
            excellence and are truly reflective of Islamic values.
          </p>
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

export default CollaborateAndPartnerships;
