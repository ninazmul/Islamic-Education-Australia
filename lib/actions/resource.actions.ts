"use server";

import { AddResourceParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import Resource from "../database/models/resource.model";

export const addResource = async ({
  Heading,
  Image,
  Link,
  Category,
}: AddResourceParams) => {
  try {
    await connectToDatabase();

    const newResource = await Resource.create({
      heading: Heading,
      image: Image,
      link: Link,
      category: Category,
    });

    return JSON.parse(JSON.stringify(newResource));
  } catch (error) {
    handleError(error);
  }
};

export const getAllResource = async () => {
  try {
    await connectToDatabase();

    const resource = await Resource.find();

    return JSON.parse(JSON.stringify(resource));
  } catch (error) {
    handleError(error);
  }
};

export const deleteResource = async (resourceId: string) => {
  try {
    await connectToDatabase();

    const deletedResource = await Resource.findByIdAndDelete(resourceId);

    if (!deletedResource) {
      throw new Error("Resource not found");
    }

    return { message: "Resource deleted successfully" };
  } catch (error) {
    handleError(error);
  }
};
