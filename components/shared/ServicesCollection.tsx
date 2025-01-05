import { ExternalLink } from "lucide-react";
import Link from "next/link";

const ServicesCollection = () => {
  const servicesData = [
    {
      imageUrl: "/assets/images/Service/Build.png",
      title: "Build A Community",
      description: "We are working with individuals and communities to connect",
      tag: "Build A Community",
    },
    {
      imageUrl: "/assets/images/Service/knowledge.png",
      title: "Increase Islamic Knowledge",
      description:
            "We encourage and facilitate various avenue for the community",
      tag: "Increase Islamic Knowledge",
    },
    {
      imageUrl: "/assets/images/Service/serve.png",
      title: "Serve The Community",
        description: "We work closely with community member to provide following",
      tag: "Serve Community",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="group relative flex flex-col w-full max-w-[400px] overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg"
        >
          <Link
            href={`/services/#services`}
            className="flex-center relative w-full bg-gray-50"
          >
            <div className="relative w-full pb-[56.25%]">
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${service.imageUrl})` }}
              />
            </div>
          </Link>

          <div className="flex flex-col gap-3 p-5">
            <p className="p-medium-16 md:p-medium-20 line-clamp-2 text-black">
              {service.title}
            </p>
            <p className="text-gray-500">
              <span className="line-clamp-2">{service.description}...</span>
              <Link
                href={`/services/#${service.tag}`}
                className="text-blue-900 hover:underline flex items-center gap-1 justify-end"
              >
                {" "}
                learn more..
                <ExternalLink className="size-4" />
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCollection;
