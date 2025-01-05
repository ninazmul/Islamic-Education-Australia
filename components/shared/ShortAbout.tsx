import React from "react";

const ShortAbout = () => {
  return (
    <div className="flex flex-col items-center gap-3 md:gap-6 p-8 md:p-10 lg:p-20 max-w-5xl mx-auto">
      <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
        Welcome to Muslim College Sydney
      </h3>
      <h1 className="h2-bold">
        About <span className="text-primary-500">Muslim College Sydney</span>
      </h1>
      <p className="p-regular-16 md:p-regular-20 text-gray-600">
        Muslim College Sydney is more than just a school—it’s a community
        dedicated to empowering young Australian Muslims. Founded by three
        passionate individuals who met during Hajj, we are committed to
        fostering a learning environment where children thrive academically,
        spiritually, and morally.
      </p>
    </div>
  );
};

export default ShortAbout;
