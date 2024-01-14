"use client";
import GetTopProjects from "@/actions/projects/top-projects";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import ProjectCard from "./project-card";

export default function Header({ projects }: { projects: TopProjectsReturn }) {
  return (
    <div className="mt-60">
      <div className="container mx-auto px-4 m-3">
        <div className="flex justify-center">
          <Image
            src="/authlink-logo-full.svg"
            width={"300"}
            height={"0"}
            alt="AuthLink Logo"
          />
        </div>
        <div className="flex justify-center mt-10">
          <Input placeholder="Search for projects" className="max-w-lg mr-2" />
          <Button variant={"outline"} size="icon">
            <MagnifyingGlassIcon className="w-4 h-4" />
          </Button>
        </div>
        <div className="mt-32 font-light">
          <h1 className="underline underline-offset-8 decoration-wavy decoration-green-500">
            Top projects hosted on AuthLink
          </h1>
          <div className="container mx-auto flex w-full flex-col items-center justify-center gap-2 p-6 md:grid md:grid-cols-2 md:gap-0 lg:grid-cols-3">
            {projects?.map((Project) => {
              return <ProjectCard key={Project.id} Project={Project} />;
            })}
          </div>
          {/* <ul className="flex justify-between mt-12">
            {Projects?.map((Project) => {
              return (
                <li key={Project.id}>
                  <ProjectCard Project={Project} />
                </li>
              );
            })} */}
        </div>
      </div>
    </div>
  );
}
