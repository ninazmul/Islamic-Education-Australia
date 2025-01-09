import { ContactUs } from "@/components/shared/ContactUs";

export default async function ContactPage() {
  return (
    <>
      <section className="bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper ">
          <h1 className="h1-bold text-center sm:text-left">Contact Us</h1>
        </div>
      </section>
      <section className="bg-gray-50 p-10 lg:p-20 space-y-8">
        <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
          At Islamic Education Australia, we value open communication and strive
          to make it as easy as possible for you to reach out to us for any
          inquiries, support, or feedback. Whether you&#39;re looking for
          information about our programs, events, or services, or you want to
          get involved with our initiatives, we&#39;re here to assist you every
          step of the way. We encourage you to connect with us through various
          channels:
        </p>
        <ContactUs />
      </section>
    </>
  );
}
