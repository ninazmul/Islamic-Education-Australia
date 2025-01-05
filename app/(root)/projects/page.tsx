import { Minus } from "lucide-react";

export default function ProjectPage() {
  return (
    <>
      <section className="bg-green-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper ">
          <h3 className="h1-bold text-center sm:text-left">
            Our Ongoing Projects:{" "}
          </h3>
        </div>
      </section>
      <section className="py-5 md:py-10">
        <div className="wrapper gap-5 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h2-bold">Free Quran Learning program</h1>
            <p className="p-regular-20 md:p-regular-24">
              We arrange free Quran class for male, female and children in every
              6 month . Participant from all over Australia can attend this
              program . We have qualified male and female teacher .
              <br />
              The program consist of 24 online class to cover Noorani Kaeda,
              basic tajweed and last 10 surah of the Quran.
              <br />
              Please check our event section for fill up EOI.
            </p>
          </div>
        </div>
      </section>

      <section className="py-5 md:py-10">
        <div className="wrapper gap-5 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h2-bold">Kids Quran Competition in Ramadan</h1>
            <p className="p-regular-20 md:p-regular-24">
              We arrange online Quran competition for kids ( age 4-15)in
              Ramadan.
              <br />
              Please check our event section for fill up EOI.
            </p>
          </div>
        </div>
      </section>

      <section className="py-5 md:py-10">
        <div className="wrapper gap-5 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h2-bold">Islamic Counselling</h1>
            <p className="p-regular-20 md:p-regular-24">
              We have qualified counsellor to discuss and get Islamic guidance
              on following tops:
            </p>

            <ol className="pl-5 space-y-2 list-decimal">
              <li className="font-semibold text-lg flex items-center">
                <Minus /> General Questions ( Salah, Hajj, Zakat etc)
              </li>
              <li className="font-semibold text-lg flex items-center">
                <Minus /> Family Relationships
              </li>
              <li className="font-semibold text-lg flex items-center">
                <Minus /> Parenting
              </li>
              <li className="font-semibold text-lg flex items-center">
                <Minus /> Marriage
              </li>
              <li className="font-semibold text-lg flex items-center">
                <Minus /> Islamic Education
              </li>
              <li className="font-semibold text-lg flex items-center">
                <Minus /> Business and Islamic Finance
              </li>
              <li className="font-semibold text-lg flex items-center">
                <Minus /> Quran Learning and Hifz
              </li>
              <li className="font-semibold text-lg flex items-center">
                <Minus /> Inheritance
              </li>
              <li className="font-semibold text-lg flex items-center">
                <Minus /> Others
              </li>
            </ol>

            <p className="p-regular-20 md:p-regular-24">
              Please check our event section for fill up EIO.
            </p>
          </div>
        </div>
      </section>

      <section className="py-5 md:py-10">
        <div className="wrapper gap-5 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h2-bold">Islamic Lecture</h1>
            <p className="p-regular-20 md:p-regular-24">
              We arrange online and in place Islamic lecture on various topic.
              <br />
              Please check our event section for fill up EOI.
            </p>
          </div>
        </div>
      </section>

      <section className="py-5 md:py-10">
        <div className="wrapper gap-5 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h2-bold">Weekly Sports Event</h1>
            <p className="p-regular-20 md:p-regular-24">
              We play soccer every Sunday morning in Parry park Lakemba.
              <br />
              If you like to participate please contact us.
            </p>
          </div>
        </div>
      </section>

      <section className="py-5 md:py-10">
        <div className="wrapper gap-5 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h2-bold">Graveyard Visit</h1>
            <p className="p-regular-20 md:p-regular-24">
              We visit different graveyard in every 3 month . This keep us
              connected to our final destination of line and work toward it.
              <br />
              Please check our event section for fill up EOI.
            </p>
          </div>
        </div>
      </section>

      <section className="py-5 md:py-10">
        <div className="wrapper gap-5 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h2-bold">Eid Celebration</h1>
            <p className="p-regular-20 md:p-regular-24">
              We come together as a community to celebrate EID festival. We have
              Eid special food, kids event and gift in Eid celebration program .
              <br />
              Please check our event section for fill up EOI.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
