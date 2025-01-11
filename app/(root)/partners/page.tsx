import CommunityAndReligiousPartners from "@/components/shared/CommunityAndReligiousPartners";
import CorporateAndOrganizationalSponsors from "@/components/shared/CorporateAndOrganizationalSponsors";
import EducationalPartners from "@/components/shared/EducationalPartners";
import GovernmentAndPolicyPartners from "@/components/shared/GovernmentAndPolicyPartners";
import InternationalPartners from "@/components/shared/InternationalPartners";
import MediaAndOutreachPartners from "@/components/shared/MediaAndOutreachPartners";
import PartnersConclusion from "@/components/shared/PartnersConclusion";

export default function PartnersPage() {
  return (
    <>
      <section className="bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper ">
          <h3 className="h1-bold text-center sm:text-left">Our Partners</h3>
        </div>
      </section>
      <section className="bg-gray-50 pt-10 lg:pt-20 px-10 lg:px-20 pb-0 space-y-8">
        <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
          At Islamic Education Australia, we believe in the power of
          collaboration to create a positive and lasting impact in the
          community. Our partners are essential to helping us achieve our
          mission of providing high-quality Islamic education and fostering a
          holistic, inclusive learning environment. By working with
          organizations that share our values and vision, we are able to expand
          our reach, enhance our programs, and serve the diverse needs of our
          community.
          <br />
          We are proud to collaborate with a wide range of partners, including
          educational institutions, community organizations, government bodies,
          and corporate sponsors, all of whom contribute in different ways to
          advancing our shared goals. Below is a list of some of our esteemed
          partners:
        </p>
      </section>
      <section className="bg-gray-50">
        <EducationalPartners />
      </section>
      <section className="bg-gray-50">
        <CommunityAndReligiousPartners />
      </section>
      <section className="bg-gray-50">
        <CorporateAndOrganizationalSponsors />
      </section>
      <section className="bg-gray-50">
        <GovernmentAndPolicyPartners />
      </section>
      <section className="bg-gray-50">
        <MediaAndOutreachPartners />
      </section>
      <section className="bg-gray-50">
        <InternationalPartners />
      </section>
      <section className="bg-gray-50">
        <PartnersConclusion />
      </section>
    </>
  );
}
