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
        <h3 className="p-medium-12 md:p-medium-16 text-primary-500 uppercase tracking-wider">
          Our Team Members
        </h3>
        <h1 className="h2-bold">
          Meet Our <span className="text-primary-500">Leadership</span>
        </h1>
      </div>
      <div className="flex flex-col gap-8 mt-12 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-full md:w-1/3 bg-gray-50/50 flex items-center justify-center p-8 shrink-0">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <Image
                  src={member.image}
                  fill
                  alt={member.name}
                  className="object-cover rounded-full shadow-sm border-4 border-white"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
              <h3 className="text-primary-500 font-medium mt-1 mb-4 text-lg">{member.role}</h3>
              <p className="text-gray-600 leading-relaxed">
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
