import Image from "next/image";

const CommunityCharityAndVolunteerDays = () => {
  return (
    <div className="relative h-[870px] md:h-[860px] lg:h-[550px] overflow-hidden">
      <div className="absolute flex flex-col-reverse lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/photos/freepik__the-style-is-candid-image-photography-with-natural__93475.png"
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
            Community Charity and
          </h3>
          <h1 className="h2-bold">
            Volunteer <span className="text-primary-500">Days</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            As part of our commitment to social responsibility and community
            service, Islamic Education Australia organizes charity events and
            volunteer days that encourage students, parents, and community
            members to engage in acts of charity and service. These events may
            include:
          </p>
          <ol className="flex-1 pl-5 space-y-2 list-decimal">
            <li className="text-sm md:text-md text-muted-foreground">
              - Organizing food drives, clothing donations, or fundraising
              efforts to support local or international causes.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Volunteering opportunities at local charities, hospitals, or
              shelters.
            </li>
            <li className="text-sm md:text-md text-muted-foreground">
              - Educational campaigns on the importance of charity (Zakat) in
              Islam and how to contribute to society in meaningful ways.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CommunityCharityAndVolunteerDays;
