import { Dot } from "lucide-react";
import React from "react";

const ContactConclusion = () => {
  return (
    <div>
      <div className="w-full space-y-4 px-10 lg:px-20 pt-10 lg:pt-20 pb-4 lg:pb-10">
        <h1 className="h2-bold">Get Involved</h1>
        <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
          At Islamic Education Australia, we are always looking for passionate
          individuals and organizations to collaborate with us in our mission to
          provide high-quality Islamic education. Whether you&#39;re an
          educator, community leader, or volunteer, we&#39;d love to hear from
          you!
        </p>
        <ul className="mb-10 md:mb-14">
          <li className="mb-3 py-3">
            <div className="flex items-center">
              <Dot className="text-primary-500 size-8" />
              <h3 className="body-2 ml-2 font-semibold">Volunteer:</h3>
            </div>
            <p className="body-2 mt-3 text-n-4 text-muted-foreground">
              If you’re interested in offering your time and skills to our
              programs and events, please contact us through the Volunteer
              section on our website or send us an email to{" "}
              <a
                href="mailto:volunteer@islamicedu.com.au"
                className="text-blue-800 font-semibold underline ml-1"
                target="_blank"
              >
                volunteer@islamicedu.com.au
              </a>
              .
            </p>
          </li>
          <li className="mb-3 py-3">
            <div className="flex items-center">
              <Dot className="text-primary-500 size-8" />
              <h3 className="body-2 ml-2 font-semibold">
                Partnerships and Sponsorships:
              </h3>
            </div>
            <p className="body-2 mt-3 text-n-4 text-muted-foreground">
              Are you an organization looking to partner with us or sponsor one
              of our events or programs? Please reach out to{" "}
              <a
                href="mailto:partnerships@islamicedu.com.au"
                className="text-blue-800 font-semibold underline ml-1"
                target="_blank"
              >
                partnerships@islamicedu.com.au
              </a>
              to explore opportunities.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactConclusion;
