"use client";

import Image from "next/image";
import Link from "next/link";
import { ImFacebook } from "react-icons/im";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Mizan Howlader",
    role: "Finance & Community Leader",
    image: "/assets/images/Teams/MH IEA Profile Photo 3.png",
    socials: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    name: "Sheikh Youssef Hassan",
    role: "Educator & Relgious Leader",
    image: "/assets/images/Teams/Sheikh Youssef Hassan.jpg",
    socials: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  {
    name: "AKM Moniruzzaman",
    role: "IT Specialist & Islamic Finance Advocate",
    image: "/assets/images/Teams/AK Moniruzzaman.jpg",
    socials: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4 p-6 shadow-lg rounded-md"
          >
            <div className="flex justify-center w-full relative">
              <Image
                src={member.image}
                width={500}
                height={500}
                alt={member.name}
                className="w-full md:w-2/3 rounded-lg shadow"
              />
            </div>
            <div className="pt-4">
              <h2 className="font-bold text-lg">{member.name}</h2>
              <h3 className="text-primary-500">{member.role}</h3>
              <div className="flex items-center justify-center gap-4 py-4">
                <Link href={member.socials.facebook} target="_blank">
                  <ImFacebook className="size-8 bg-primary-500 p-2 rounded-md text-white hover:text-black shadow hover:bg-yellow-400 transition-colors" />
                </Link>
                <Link href={member.socials.twitter} target="_blank">
                  <FaXTwitter className="size-8 bg-primary-500 p-2 rounded-md text-white hover:text-black shadow hover:bg-yellow-400 transition-colors" />
                </Link>
                <Link href={member.socials.linkedin} target="_blank">
                  <FaLinkedinIn className="size-8 bg-primary-500 p-2 rounded-md text-white hover:text-black shadow hover:bg-yellow-400 transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
