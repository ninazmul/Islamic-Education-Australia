"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Mizan Howlader",
    role: "Finance & Community Leader",
    image: "/assets/images/Teams/MH IEA Profile Photo 3.png",
    description:
      "Mizan Howlader is a dedicated finance professional with over 30 years of experience in the banking and financial services industry. He has a strong background in financial analysis, risk management, and strategic planning. Mizan is passionate about community development and has been actively involved in various initiatives aimed at improving financial literacy and economic empowerment within underserved communities. His expertise in finance, combined with his commitment to social impact, makes him a valuable asset to any organization focused on driving positive change.",
  },
  {
    name: "Sheikh Youssef Hassan",
    role: "Educator & Religious Leader",
    image: "/assets/images/Teams/Sheikh Youssef Hassan.jpg",
    description:
      "Sheikh Youssef Hassan is a respected Islamic scholar and educator with over 15 years of experience in teaching and community leadership. He has a deep understanding of Islamic theology and jurisprudence, and is known for his engaging teaching style and ability to connect with students of all ages. Sheikh Youssef has been instrumental in fostering interfaith dialogue and promoting a deeper understanding of Islam within the broader community.",
  },
  {
    name: "AKM Moniruzzaman",
    role: "IT Specialist & Islamic Finance Advocate",
    image: "/assets/images/Teams/AK Moniruzzaman.jpg",
    description:
      "AKM Moniruzzaman is a seasoned IT specialist with over 12 years of experience in the technology sector. He has a strong background in software development, cybersecurity, and IT infrastructure management. Moniruzzaman is also an advocate for Islamic finance, working to integrate Sharia-compliant financial solutions into the tech industry. His expertise in both IT and Islamic finance makes him a valuable asset to any organization looking to innovate while adhering to ethical financial principles.",
  },
];

const OurTeam = () => {
  return (
    <div className="relative h-auto overflow-hidden p-10 lg:p-20">
      <div className="w-full space-y-4 text-center">
        <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
          Our Team members
        </h3>
        <h1 className="h2-bold">
          Our <span className="text-primary-500">Team</span>
        </h1>
      </div>
      <div className="flex flex-col gap-24 lg:gap-32 mt-20 mx-auto w-full max-w-7xl">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-around gap-16 lg:gap-0 w-full`}
          >
            <div className="flex justify-center w-full lg:w-1/2 relative mt-8 lg:mt-0">
              <Image
                src={member.image}
                width={500}
                height={500}
                alt={member.name}
                className="w-full md:w-2/3 z-10"
              />
              <div className="absolute -right-[7%] md:right-[11.5%] lg:right-[8%] -top-[12%] md:-top-[13%] lg:-top-[20%] rounded-none p-16 md:p-20 bg-yellow-400 " />
              <div className="absolute -left-[7%] md:left-[11.5%] lg:left-[8%] -bottom-[12%] md:-bottom-[12%] lg:-bottom-[20%] rounded-none p-16 md:p-20 bg-yellow-400 " />
            </div>
            <div className={`w-full lg:w-1/2 space-y-4 ${index % 2 !== 0 ? 'lg:pl-0 lg:pr-12' : 'lg:pr-0 lg:pl-12'}`}>
              <h2 className="h2-bold">{member.name}</h2>
              <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
                {member.role}
              </h3>
              <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
