import Image from "next/image";

const BuildingSchools = () => {
  return (
    <div>
      <div className="px-10 lg:px-20 pt-10 lg:pt-20 pb-4 lg:pb-10 z-20 gap-12 lg:gap-0 mx-auto w-full space-y-4">
        <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
          Building Schools for
        </h3>
        <h1 className="h2-bold">
          Holistic <span className="text-primary-500">Education</span>
        </h1>
        <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
          Establishing primary and secondary schools that integrate both secular
          and Islamic education is at the core of our mission. These schools
          will provide students with an academically rigorous curriculum while
          embedding Islamic teachings in every aspect of learning. The goal is
          to nurture well-rounded individuals who are not only knowledgeable in
          mathematics, science, and humanities but also equipped with a strong
          moral compass rooted in Islamic principles.
        </p>
      </div>
      <div className="relative h-[800px] md:h-[700px] lg:h-[350px] overflow-hidden">
        <div className="absolute flex flex-col-reverse lg:flex-row items-center justify-around px-10 lg:px-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
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
            <p className="p-regular-16 md:p-regular-20 font-semibold text-muted-foreground">
              These schools will offer:
            </p>
            <ol className="flex-1 pl-5 space-y-2 list-decimal">
              <li className="text-sm md:text-md text-muted-foreground">
                - A balanced curriculum: Combining standard Australian education
                with Islamic studies, including the Quran, Hadith, Fiqh (Islamic
                jurisprudence), Arabic language, and Islamic history.
              </li>
              <li className="text-sm md:text-md text-muted-foreground">
                - Character development: Promoting strong ethical values such as
                honesty, kindness, humility, and integrity, which are essential
                in Islam and contribute to personal growth and social harmony.
              </li>
              <li className="text-sm md:text-md text-muted-foreground">
                - Safe and inclusive environments: Providing a space where
                Muslim students can embrace their identity and develop a strong
                connection to their faith while interacting with peers from
                diverse backgrounds.
              </li>
              <li className="text-sm md:text-md text-muted-foreground">
                - Extra-curricular opportunities: Activities that promote
                teamwork, leadership, and community engagement, helping students
                become well-rounded individuals who contribute positively to
                society.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="px-10 lg:px-20 pt-4 lg:pt-10 pb-10 lg:pb-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
          By building these schools, we provide a sustainable framework for
          educating the next generation of Muslim leaders, professionals, and
          community members who can excel academically and contribute
          meaningfully to Australian society while remaining rooted in Islamic
          values.
        </p>
      </div>
    </div>
  );
};

export default BuildingSchools;
