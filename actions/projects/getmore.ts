"use server";

import prisma from "../prisma";

export default async function GetMore(Author: string) {
  const Projects = await prisma.project.findMany({
    where: {
      Profile: {
        username: Author,
      },
    },
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
      views: true,
    },
    take: 4,
  });

  return Projects;
}
