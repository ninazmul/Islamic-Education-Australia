import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const HelpToChange = () => {
  return (
    <div className="relative bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center min-h-[1070px] lg:min-h-[600px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Be Part of a Lasting Impact
          </h3>
          <h1 className="h2-bold">
            Help To Change a
            <br />
            <span className="text-primary-500">Life Forever</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            By supporting Muslim College Sydney, you’re investing in the future
            of our children and the broader Australian-Muslim community. Your
            contribution will help us provide quality education, build a mosque,
            and create a community center that fosters growth, leadership, and
            faith. Together, we can shape the leaders of tomorrow and strengthen
            our community.
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Button className="rounded-md bg-primary-500 text-white font-bold px-6 py-2 hover:bg-yellow-400 flex items-center gap-2">
              Learn More
            </Button>
            <Button className="rounded-md bg-yellow-400 text-primary-900 font-bold px-6 py-2 hover:bg-primary-500 flex items-center gap-2">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="flex justify-center w-full lg:w-1/2">
          <Image
            src="/assets/images/Service/knowledge.png"
            width={500}
            height={500}
            alt="Islamic Education Australia Ltd logo"
            className="w-2/3"
          />
        </div>
      </div>
      <div className="absolute left-[80%] top-[15%] rounded-none p-20 bg-primary-500 lg:bg-yellow-400 " />
      <div className="absolute right-[35.5%] bottom-[20%] rounded-none p-20 bg-primary-500 lg:bg-yellow-400 " />
    </div>
  );
};

export default HelpToChange;
