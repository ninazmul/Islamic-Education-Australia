import OurStory from "@/components/shared/OurStory";
import OurTeam from "@/components/shared/OurTeam";

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper ">
          <h1 className="h1-bold text-center sm:text-left">About Us</h1>
        </div>
      </section>
      <section className="bg-gray-50">
        <OurStory />
      </section>
      <section className="bg-gray-50">
        <OurTeam />
      </section>
    </>
  );
}
