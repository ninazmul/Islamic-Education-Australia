import { CheckIcon } from "lucide-react";
import Image from "next/image";

export default function CallToAction() {
  const collabContent = [
    {
      id: "1",
      title: "Connect",
      text: "Build strong networks and meaningful bonds.",
    },
    {
      id: "2",
      title: "Love and Care",
      text: "Nurture growth with empathy and support.",
    },
    {
      id: "3",
      title: "Knowledge",
      text: "Empower through learning and sharing.",
    },
    {
      id: "4",
      title: "Respect",
      text: "Value diversity and foster trust.",
    },
    {
      id: "5",
      title: "Integrity",
      text: "Commit to honesty and transparency.",
    },
  ];

  return (
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">Our Core Values</h2>
      <p className="p-regular-20 md:p-regular-24">
        At the heart of everything we do lies a commitment to unity, faith, and
        compassion.
        <br />
        We strive to create a space that fosters connection, celebrates
        diversity, and strengthens the bonds of the Muslim community through
        shared experiences and understanding.
      </p>
      <div className="flex flex-col lg:flex-row lg:items-center md:justify-between lg:justify-around">
        <div className="">
          <ul className="mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <CheckIcon />
                  <h6 className="body-2 ml-5 font-semibold">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <div className="relative left-1/2 flex w-64 md:w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100 ">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <Image
                    src="/assets/images/logo.png"
                    width={50}
                    height={50}
                    alt="One Soul Muslim logo"
                  />{" "}
                </div>
              </div>
            </div>

            <ul>
              {[
                "Connect",
                "Love & Care",
                "Knowledge",
                "Respect",
                "Integrity",
              ].map((value, index) => (
                <li
                  key={index}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.9rem] md:-ml-[2.5rem] origin-bottom rotate-${
                    index * 72
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex flex-col items-center w-20 md:w-auto bg-n-7 -rotate-${
                      index * 72
                    }`}
                  >
                    <span className="font-serif text-primary-500 font-semibold bg-white px-4 py-2 rounded-md shadow-black shadow-md hover:shadow-lg transition-transform transform hover:scale-110 hover:bg-primary-100 hover:text-primary-700">
                      {value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
