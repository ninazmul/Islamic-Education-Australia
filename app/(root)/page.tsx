
import HelpToChange from "@/components/shared/HelpToChange";
import Hero from "@/components/shared/Hero";
import OurMission from "@/components/shared/OurMission";
import OurPriorities from "@/components/shared/OurPriorities";
import OurValues from "@/components/shared/OurValues";
import OurVision from "@/components/shared/OurVision";
import ShortAbout from "@/components/shared/ShortAbout";

export default async function Home() {


  return (
    <>
      <section className="">
        <Hero />
      </section>
      <section className="bg-gray-50">
        <ShortAbout />
      </section>
      <section className="bg-gray-50">
        <HelpToChange />
      </section>
      <section className="bg-gray-50">
        <OurMission />
      </section>
      <section className="bg-gray-50">
        <OurVision />
      </section>
      <section className="bg-gray-50">
        <OurValues />
      </section>
      <section className="bg-gray-50">
        <OurPriorities />
      </section>
    </>
  );
}
