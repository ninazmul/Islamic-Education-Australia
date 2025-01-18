/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { ExternalLinkIcon } from "lucide-react";
import { getAllResource } from "@/lib/actions/resource.actions";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Page = () => {
  const [resources, setResources] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [resourceSearch, setResourceSearch] = useState("");

  const [filteredResources, setFilteredResources] = useState<any[]>([]);

  // Fetch resources on mount
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const islamicData: { category: string }[] = await getAllResource();
        setResources(islamicData);

        // Extract unique categories and add "All"
        const uniqueCategories: string[] = [
          "All",
          ...new Set(islamicData.map((resource) => resource.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Failed to fetch resources:", error);
      }
    };
    fetchResources();
  }, []);

  // Filter resources based on search and category
  useEffect(() => {
    setFilteredResources(
      resources.filter(
        (resource) =>
          (selectedCategory === "All" ||
            resource.category === selectedCategory) &&
          `${resource.heading} ${resource.category}`
            .toLowerCase()
            .includes(resourceSearch.toLowerCase())
      )
    );
  }, [resourceSearch, resources, selectedCategory]);

  return (
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">Explore Our Resources</h2>
      <p className="p-regular-20 md:p-regular-24">
        Access a wealth of knowledge, guidance, and inspiration tailored for the
        Muslim community—from spiritual practices and educational insights to
        community-building events and more.
      </p>

      {/* Custom Tab Implementation */}
      <div className="tabs">
        <div className="tabs-header flex flex-col md:flex-row justify-center gap-4 mb-6 bg-transparent">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-center px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded-md ${
                selectedCategory === category
                  ? "bg-primary-500 text-white"
                  : "bg-gray-100 rounded-lg hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tabs-content mt-4">
          <input
            type="text"
            placeholder="Search by Heading or Category"
            className="input-field mb-4 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            value={resourceSearch}
            onChange={(e) => setResourceSearch(e.target.value)}
          />
          {filteredResources.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Heading</TableHead>
                  <TableHead>Link</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredResources.map((resource) => (
                  <TableRow key={resource.id}>
                    <TableCell>
                      <Image
                        src={resource.image}
                        alt={resource.heading}
                        width={50}
                        height={50}
                        className="object-cover rounded-md"
                      />
                    </TableCell>
                    <TableCell>{resource.category}</TableCell>
                    <TableCell>{resource.heading}</TableCell>
                    <TableCell>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        Open Resource <ExternalLinkIcon className="size-4" />
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-gray-500">No resources found!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;
