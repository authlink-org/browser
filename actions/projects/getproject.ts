"use server";

import prisma from "../prisma";

export default async function GetProject(id: string) {
  return await prisma.project.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
      views: true,

      monetization_method: true,
      allowFreeLicenses: true,
      Profile: {
        select: {
          username: true,
        },
      },
    },
  });
}
