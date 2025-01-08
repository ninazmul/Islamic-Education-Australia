import BuildingMasjids from "@/components/shared/BuildingMasjids";
import BuildingOrganizations from "@/components/shared/BuildingOrganizations";
import BuildingSchools from "@/components/shared/BuildingSchools";
import CollaborateAndPartnerships from "@/components/shared/CollaborateAndPartnerships.tsx";
import ProjectsConclusion from "@/components/shared/ProjectsConclusion";

export default function ProjectPage() {
  return (
    <>
      <section className="bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper ">
          <h3 className="h1-bold text-center sm:text-left">
            Our Ongoing Projects
          </h3>
        </div>
      </section>
      <section className="bg-gray-50">
        <BuildingSchools />
      </section>
      <section className="bg-gray-50">
        <BuildingMasjids />
      </section>
      <section className="bg-gray-50">
        <BuildingOrganizations />
      </section>
      <section className="bg-gray-50">
        <CollaborateAndPartnerships />
      </section>
      <section className="bg-gray-50">
        <ProjectsConclusion />
      </section>
    </>
  );
}
