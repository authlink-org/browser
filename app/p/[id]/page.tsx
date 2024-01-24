import { useParams } from "next/navigation";

import Navbar from "@/components/authlink/navbar";
import ViewProject from "@/components/authlink/view-project";
import Info from "@/components/authlink/info";

import { useRouter } from "next/navigation";

import GetProject from "@/actions/projects/getproject";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const Project = await GetProject(params.id);

  return {
    title: Project?.title + " - View at AuthLink.org",
    description: Project?.description,
  };
}

import AddPageView from "@/actions/views/addpageview";
import { useState } from "react";
import { cookies } from "next/headers";
import GoogleRedirect from "@/components/lootlabs/google-redirect";

export default async function Project({ params }: { params: { id: string } }) {
  const Project = await GetProject(params.id);
  if (Project) {
    AddPageView(params.id);
  }

  return (
    <>
      <Navbar />
      <ViewProject project={Project} />
      <Info />
    </>
  );
}
