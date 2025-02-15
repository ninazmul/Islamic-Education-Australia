import { Dot } from "lucide-react";
import Image from "next/image";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

const ContactInformation = () => {
  return (
    <div className="relative h-[1100px] md:h-[1000px] lg:h-[670px] overflow-hidden">
      <div className="absolute flex flex-col-reverse lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
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
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="h2-bold">
            Our <span className="text-primary-500">Contact Information</span>
          </h1>
          <ul className="mb-10 md:mb-14">
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <FaPhoneVolume className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Phone: +612 9677 0961
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Our team is available during business hours to answer any
                questions or provide assistance.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <FaMailBulk className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">Email:</h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                For inquiries, general questions, or support, feel free to reach
                us by email. We aim to respond to all emails within 1-2 business
                days.
              </p>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                For specific inquiries, please use the following:
              </p>
              <ol className="flex-1 pl-5 space-y-2 list-decimal">
                <li className="text-sm md:text-md text-muted-foreground flex items-center gap-1 font-semibold">
                  <Dot /> General Inquiries:{" "}
                  <a
                    href="mailto:islamic.edu.aus@gmail.com"
                    className="text-blue-800 font-semibold underline"
                    target="_blank"
                  >
                    info@islamicedu.com.au
                  </a>{" "}
                </li>
                <li className="text-sm md:text-md text-muted-foreground flex items-center gap-1 font-semibold">
                  <Dot /> Events and Programs:{" "}
                  <a
                    href="mailto:islamic.edu.aus@gmail.com"
                    className="text-blue-800 font-semibold underline"
                    target="_blank"
                  >
                    events@islamicedu.com.au
                  </a>{" "}
                </li>
                <li className="text-sm md:text-md text-muted-foreground flex items-center gap-1 font-semibold">
                  <Dot /> Support and Donations:{" "}
                  <a
                    href="mailto:islamic.edu.aus@gmail.com"
                    className="text-blue-800 font-semibold underline"
                    target="_blank"
                  >
                    support@islamicedu.com.au
                  </a>{" "}
                </li>
                <li className="text-sm md:text-md text-muted-foreground flex items-center gap-1 font-semibold">
                  <Dot /> Partnerships and Collaborations:{" "}
                  <a
                    href="mailto:islamic.edu.aus@gmail.com"
                    className="text-blue-800 font-semibold underline"
                    target="_blank"
                  >
                    partnerships@islamicedu.com.au
                  </a>{" "}
                </li>
              </ol>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <FaLocationDot className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Address: 144 Hyatts Road, Plumpton, NSW 2761
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                We welcome you to visit our office or learning Centres. Please
                check for office hours or schedule an appointment ahead of time.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
