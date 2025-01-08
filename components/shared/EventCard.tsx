import { IEvent } from "@/lib/database/models/event.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { getUserEmailById } from "@/lib/actions/user.actions";
import { isAdmin } from "@/lib/actions/admin.actions";
import { EventDeleteConfirmation } from "@/app/dashboard/components/EventDeleteConfirmation";

type EventCardProps = {
  event: IEvent;
};

const EventCard = async ({ event}: EventCardProps) => {
  const { sessionClaims } = await auth();

  const userId = sessionClaims?.userId as string;

  const email = await getUserEmailById(userId);
  const adminStatus = await isAdmin(email);

  return (
    <div className="group relative flex flex-col w-full max-w-[400px] overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
      {/* Full image display with 16:9 aspect ratio */}
      <Link
        href={`/events/${event._id}`}
        className="flex-center relative w-full bg-gray-50"
      >
        <div className="relative w-full pb-[56.25%]">
          {" "}
          {/* 16:9 Aspect Ratio */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${event.imageUrl})` }}
          />
        </div>
      </Link>

      {/* Admin Actions */}
      {adminStatus && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`dashboard/events/${event._id}/update`}>
            <Image
              src="/assets/icons/edit.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </Link>
          <EventDeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div className="flex flex-col gap-3 p-5">

        {/* Date and Time */}
        <p className="p-medium-16 text-grey-500">
          {formatDateTime(event.createdAt).dateTime}
        </p>

        {/* Event Title */}
        <Link href={`/events/${event._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 text-black">
            {event.title}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
