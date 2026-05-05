"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Mizan Howlader",
    role: "Finance & Community Leader",
    image: "/assets/images/Teams/MH IEA Profile Photo 3.png",
    description:
      "Mizan is a finance professional with a deep commitment to the growth and well-being of the Muslim ummah. With a strong foundation in financial principles and a passion for serving the community, Mizan works diligently to make a positive impact, blending expertise with a dedication to Islamic and values-driven initiatives. Recognizing the importance of Islamic education, Mizan works actively to promote educational initiatives that nurture the next generation of leaders. His vision extends beyond financial success, as he strives to empower the Muslim community by investing in long-term solutions that support the development of future generations and ensure they are equipped to thrive in a rapidly changing world. Mizan holds a Bachelor and Master of Accounting from Dhaka University and achieved his CPA in Australia. He has extensive experience managing a large family business. Inspired by his mother, who served as a school principal in Bangladesh, Mizan has always been passionate about education. This drive to empower the next generation aligns with his broader vision to blend financial expertise with the promotion of Islamic education.",
  },
  {
    name: "Sheikh Youssef Hassan",
    role: "Educator & Religious Leader",
    image: "/assets/images/Teams/Sheikh Youssef Hassan.jpg",
    description:
      "Sheikh Youssef Hassan has an illustrious background marked by diligent service and profound commitment. Born in the vibrant city of Cairo, Egypt, Sheikh Youssef embarked on a new chapter of his life by relocating to Australia in 2004. His career has been dedicated to humanitarian aid, where for nearly a decade, he worked with a multitude of organizations, contributing both in an official capacity and as a volunteer. In addition to his commendable work in humanitarian efforts, Sheikh Youssef has also made significant contributions to education, serving as a dedicated teacher in an Australian school. Furthermore, he extends his expertise and empathy as a family counsellor, offering guidance and support to those navigating the complexities of family life. Sheikh Youssef&#39;s multifaceted career truly embodies his dedication to uplifting others, both through education and humanitarian endeavours.",
  },
  {
    name: "AKM Moniruzzaman",
    role: "IT Specialist & Islamic Finance Advocate",
    image: "/assets/images/Teams/AK Moniruzzaman.jpg",
    description:
      "Akm Moniruzzaman (Monir) is a IT Systems Specialist driving strategic initiatives, crafting innovative business strategies, and overseeing large-scale projects in large Australian organisation. Monir has been a key contributor to his organization’s growth and transformation. Monir holds a Computer Science degree from Bangalore University in India, a Graduate Diploma in Information Technology from UWS, and a Master’s in Information Systems &amp; Business Management from CQU. His expertise encompasses market analysis, financial planning, and cross-functional collaboration, which enables him to consistently deliver impactful results and contribute to his organization&#39;s success. Beyond his professional accomplishments, Monir is a passionate advocate for Halal and Islamic Financing within his community. He is deeply dedicated to encouraging his Muslim community to live in accordance with Islamic values and guidance in their daily lives.",
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
            className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-around gap-16 lg:gap-0 w-full`}
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
            <div
              className={`w-full lg:w-1/2 space-y-4 ${index % 2 !== 0 ? "lg:pl-0 lg:pr-12" : "lg:pr-0 lg:pl-12"}`}
            >
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
