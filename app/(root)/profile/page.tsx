import {
  getRegistrationsByUserId,
  isRegistered,
  isSubmitted,
} from "@/lib/actions/registration.actions";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { Clock, ExternalLink, Eye } from "lucide-react";
import RegistrationForm from "@/app/dashboard/components/RegistrationForm";
import Link from "next/link";
import NoticeBoard from "@/components/shared/NoticeBoard";
import { getAllNotice } from "@/lib/actions/notice.actions";

export default async function ProfilePage() {
  const { sessionClaims } = await auth();
  const userId = sessionClaims?.userId as string;
  const user = await getUserById(userId);
  const registrationByUserID = await getRegistrationsByUserId(userId);
  const registration = registrationByUserID?.[0];

  const isSubmittedUser = await isSubmitted(userId);
  const isRegisteredUser = await isRegistered(userId);

  const notices = await getAllNotice();

  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <section className="max-w-6xl mx-auto px-4">
        {/* Welcome Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome, {user.firstName} {user.lastName}
          </h1>
          <p className="mt-2 text-gray-600">
            {isRegisteredUser
              ? "Thank you for being a part of our volunteer community. We appreciate your dedication!"
              : isSubmittedUser
              ? "Your registration is pending approval. We will notify you once it is approved."
              : "Please connect with us and let’s bring your vision to life!"}
          </p>
          <br />
          <div className="text-gray-700">
            Interested in joining us as a member? {""}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-blue-900 hover:underline"
            >
              Get in touch <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {isRegisteredUser && (
          <section className="bg-gray-50">
            <NoticeBoard notices={notices} />
          </section>
        )}

        {/* Action Section */}
        <div className="grid grid-cols-1 gap-6">
          {/* Registration or Pending Status */}
          {!isRegisteredUser && (
            <div className="bg-white shadow rounded-lg p-6">
              {isSubmittedUser ? (
                <div className="flex items-center space-x-3">
                  <Clock className="text-yellow-500 w-6 h-6" />
                  <p className="text-yellow-600 font-medium">
                    Registration Submitted
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Become a Volunteer
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Complete the form below to join our volunteer team.
                  </p>
                  <div className="mt-4">
                    <RegistrationForm userId={userId} type="Create" />
                  </div>
                </>
              )}
            </div>
          )}

          {/* Registered Actions */}
          {isRegisteredUser && (
            <>
              {/* View Details */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  View Your Details
                </h2>
                <p className="mt-2 text-gray-600">
                  Check your current volunteer registration details.
                </p>
                <div className="mt-4">
                  <Link href={`/profile/${registration._id}`} className="block">
                    <Button variant="outline" size="lg" className="w-full">
                      <Eye className="mr-2" /> View Details
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Update Details */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  Update Your Information
                </h2>
                <p className="mt-2 text-gray-600">
                  Keep your details up-to-date to ensure accuracy in our
                  records.
                </p>
                <div className="mt-4">
                  <RegistrationForm
                    userId={userId}
                    registration={registration}
                    registrationId={registration?._id}
                    type="Update"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
