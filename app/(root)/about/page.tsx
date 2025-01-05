import { Committee } from "@/constants";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AboutPage() {
  return (
    <>
      <section className="bg-green-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper ">
          <h3 className="h1-bold text-center sm:text-left">
            Our Story and Leadership:
          </h3>
        </div>
      </section>
      <section className="py-5 md:py-10">
        <div className="wrapper gap-5 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h2-bold">One Soul Muslim Community Inc.</h1>
            <p className="p-regular-20 md:p-regular-24">
              One Soul Muslim Community Inc. is a registered charity
              organization established by Australian Muslims. Our goal is to
              seek the pleasure of Allah by fostering connection, love, and care
              among Muslims living in Australia. Officially registered with Fair
              Trade NSW under the name “One Soul Muslim Community Incorporated”
              <i className="text-blue-900 font-semibold font-serif">
                (INC-2200367)
              </i>
              .
            </p>

            <i className="p-regular-20 md:p-regular-24 font-serif font-semibold text-blue-900">
              Our mission is to unite the community, enhance Islamic knowledge,
              and serve society.
              <br />
              Core values: Connection, Love & Care, Knowledge, Respect, and
              Integrity.
            </i>
          </div>
        </div>
      </section>
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Current Executive Committee:</h2>
        <p className="p-regular-20 md:p-regular-24">
          Meet the dedicated members of our executive committee who work
          tirelessly to uphold our mission and values.
        </p>
        <div className="overflow-x-auto">
          <Table className="w-full border border-gray-200 rounded-lg shadow-lg">
            <TableHeader>
              <TableRow className="bg-primary-100">
                <TableHead className="text-left text-primary-900 font-semibold px-4 py-2 uppercase">
                  Position
                </TableHead>
                <TableHead className="text-left text-primary-900 font-semibold px-4 py-2 uppercase">
                  Name
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Committee.map((member, index) => (
                <TableRow
                  key={index}
                  className={`border-b last:border-b-0 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <TableCell className="text-md md:text-lg text-gray-700 font-medium px-4 py-2">
                    {member.position}
                  </TableCell>
                  <TableCell className="text-md md:text-lg text-gray-700 px-4 py-2">
                    {member.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
}
