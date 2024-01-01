"use server";

import prisma from "../prisma";

export default async function GetTopProjects() {
  const Top = await prisma.project.groupBy({
    by: ["views", "title", "description", "createdAt", "id"],
    orderBy: {
      views: "desc",
    },
    take: 6,
  });

  return Top;
}
