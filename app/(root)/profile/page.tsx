import RegistrationFrom from "@/app/dashboard/components/RegistrationForm";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  getRegistrationsByUserId,
  isRegistered,
  isSubmitted,
} from "@/lib/actions/registration.actions";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { Clock, Edit, Eye, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProfilePage = async ( ) => {
  const { sessionClaims } = await auth();
  const userId = sessionClaims?.userId as string;
  const user = await getUserById(userId);
  const registrationByUserID = await getRegistrationsByUserId(userId);
  const registration = registrationByUserID?.[0];

  const isSubmittedUser = await isSubmitted(userId);
  const isRegisteredUser = await isRegistered(userId);


  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 wrapper my-8">
          <div>
            <div className="flex items-center gap-4">
              <h1 className="h2-bold">
                Welcome, {user.firstName} {user.lastName}
              </h1>
            </div>
            <p
              className={`p-regular-${
                isRegisteredUser || isSubmittedUser ? "24" : "20"
              } md:p-regular-24`}
            >
              {isRegisteredUser
                ? "Thank you for being a Volunteer!"
                : isSubmittedUser
                ? "Your Registration is Pending for Approval."
                : "Want to become our Volunteer?"}
            </p>
          </div>
          <div className="">
            <Sheet>
              <SheetTrigger className="w-full">
                {isSubmittedUser && !isRegisteredUser ? (
                  <>
                    <Button
                      size="lg"
                      className="button w-full lg:w-max bg-yellow-500"
                    >
                      <Clock /> Registration Submitted
                    </Button>
                  </>
                ) : (
                  <>
                    {!isSubmittedUser && !isRegisteredUser && (
                      <Button size="lg" className="button w-full lg:w-max">
                        <Plus /> Registration As Volunteer
                      </Button>
                    )}
                  </>
                )}
              </SheetTrigger>

              <SheetContent className="bg-white">
                <SheetHeader>
                  <SheetTitle>Join Our Volunteer Team</SheetTitle>
                  <SheetDescription>
                    Complete this form to register as a volunteer. Please ensure
                    that all details are accurate and complete, following the
                    system&apos;s requirements for proper record management and
                    organization.
                  </SheetDescription>
                </SheetHeader>
                {isSubmittedUser && !isRegisteredUser ? (
                  <div className="text-center py-6 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Registration Submitted!
                    </h2>
                    <p className="mt-2 text-gray-600">
                      Your registration has been successfully submitted and is
                      currently pending approval.
                    </p>
                  </div>
                ) : (
                  <div className="py-5">
                    <RegistrationFrom userId={userId} type="Create" />
                  </div>
                )}
              </SheetContent>
            </Sheet>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-2">
              {isRegisteredUser && (
                <Link href={`/profile/${registration._id}`} className="w-full">
                  <Button
                    variant={"outline"}
                    size="lg"
                    className="button w-full text-primary-900 lg:w-max"
                  >
                    <Eye /> View details
                  </Button>
                </Link>
              )}
              <Sheet>
                <SheetTrigger className="w-full">
                  {isRegisteredUser && (
                    <Button size="lg" className="button w-full lg:w-max">
                      <Edit /> Update Volunteer Details
                    </Button>
                  )}
                </SheetTrigger>

                <SheetContent className="bg-white">
                  <SheetHeader>
                    <SheetTitle>Update Your Volunteer Details</SheetTitle>
                    <SheetDescription>
                      Update your information to ensure our records are accurate
                      and up to date. Please review and modify your details as
                      needed, adhering to the system&apos;s requirements for
                      proper record management and organization.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-5">
                    <RegistrationFrom
                      userId={userId}
                      registration={registration}
                      registrationId={registration?._id}
                      type="Update"
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
