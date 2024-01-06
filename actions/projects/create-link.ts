"use server";

import prisma from "../prisma";

// Date.prototype.addHours = function (h) {
//   this.setTime(this.getTime() + h * 60 * 60 * 1000);
//   return this;
// };

import { CreateWorkinkLink } from "@/functions/work.ink";

import { randomBytes } from "crypto";

function CreateLinkvertiseLink(id: string, url: string): string {
  return `https://link-to.net/${id}/${
    Math.random() * 1000
  }/dynamic?r=${Buffer.from(encodeURI(url), "binary").toString("base64")}`;
}

export default async function CreateLink(project: string) {
  const ProjectInfo = await prisma.project.findFirst({
    where: {
      id: project,
    },
    select: {
      title: true,
      description: true,
      freeLicenseHours: true,
      monetization_method: true,
      Profile: {
        select: {
          linkvertise_api: true,
          workink_api: true,
        },
      },
    },
  });

  if (!ProjectInfo) {
    return "https://authlink.org/";
  }

  const ExpireTime = new Date();
  ExpireTime.setTime(
    ExpireTime.getTime() + ProjectInfo.freeLicenseHours * 60 * 60 * 1000
  );

  const NewLicense = await prisma.license.create({
    data: {
      free: true,
      expire: ExpireTime,
      projectId: project,
    },
  });

  if (ProjectInfo.monetization_method === "linkvertise") {
    const APIKey = ProjectInfo.Profile?.linkvertise_api;

    const Url = CreateLinkvertiseLink(
      String(APIKey),
      `https://authlink.org/p/${project}?key=${NewLicense.id}`
    );

    return Url;
  } else if (ProjectInfo.monetization_method === "workink") {
    const APIKey = ProjectInfo.Profile?.workink_api;

    const Url = await CreateWorkinkLink(
      String(APIKey),
      ProjectInfo.title + " - At AuthLink.org",
      ProjectInfo.description,
      `auth-link-${randomBytes(6).toString("hex")}`,
      `https://authlink.org/p/${project}?key=${NewLicense.id}`
    );

    return Url;
  }
}
