"use server";

import prisma from "../prisma";

export default async function GetAllProjects() {
  const Top = await prisma.project.groupBy({
    by: ["views", "title", "description", "createdAt", "id"],
    orderBy: {
      views: "desc",
    },
  });

  return Top;
}
