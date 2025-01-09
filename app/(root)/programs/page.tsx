import AnnualIslamicEducationConference from "@/components/shared/AnnualIslamicEducationConference";
import CommunityCharityAndVolunteerDays from "@/components/shared/CommunityCharityAndVolunteerDays";
import EducationalFundraisingGalas from "@/components/shared/EducationalFundraisingGalas";
import FamilyAndCommunityDayFestivals from "@/components/shared/FamilyAndCommunityDayFestivals";
import InterfaithDialoguesAndCommunityOutreach from "@/components/shared/InterfaithDialoguesAndCommunityOutreach";
import IslamicArtAndCulturalExhibitions from "@/components/shared/IslamicArtAndCulturalExhibitions";
import IslamicParentingWorkshops from "@/components/shared/IslamicParentingWorkshops";
import OnlineWebinarsAndVirtualWorkshops from "@/components/shared/OnlineWebinarsAndVirtualWorkshops";
import ProgramsConclusion from "@/components/shared/ProgramsConclusion";
import QuranicAndIslamicStudiesSeminars from "@/components/shared/QuranicAndIslamicStudiesSeminars";
import YouthLeadershipAndDevelopmentCamps from "@/components/shared/YouthLeadershipAndDevelopmentCamps";

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper ">
          <h3 className="h1-bold text-center sm:text-left">Our Programs</h3>
        </div>
      </section>
      <section className="bg-gray-50">
        <AnnualIslamicEducationConference />
      </section>
      <section className="bg-gray-50">
        <QuranicAndIslamicStudiesSeminars />
      </section>
      <section className="bg-gray-50">
        <YouthLeadershipAndDevelopmentCamps />
      </section>
      <section className="bg-gray-50">
        <FamilyAndCommunityDayFestivals />
      </section>
      <section className="bg-gray-50">
        <InterfaithDialoguesAndCommunityOutreach />
      </section>
      <section className="bg-gray-50">
        <IslamicParentingWorkshops />
      </section>
      <section className="bg-gray-50">
        <CommunityCharityAndVolunteerDays />
      </section>
      <section className="bg-gray-50">
        <IslamicArtAndCulturalExhibitions />
      </section>
      <section className="bg-gray-50">
        <EducationalFundraisingGalas />
      </section>
      <section className="bg-gray-50">
        <OnlineWebinarsAndVirtualWorkshops />
      </section>
      <section className="bg-gray-50">
        <ProgramsConclusion />
      </section>
    </>
  );
}
