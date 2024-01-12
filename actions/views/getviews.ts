"use server";

import prisma from "../prisma";

export default async function GetViews(project: string) {
  const Visits = await prisma.userVisit.count({
    where: {
      projectId: project,
    },
  });
  return Visits;
}
