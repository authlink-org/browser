"use client";
import GetTopProjects from "@/actions/projects/top-projects";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import GetProject from "@/actions/projects/getproject";

import IncrementViews from "@/actions/projects/increment-skips";

import GetViews from "@/actions/views/getviews";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import moment from "moment";
import numeral from "numeral";
import Script from "next/script";
import { Loader2Icon } from "lucide-react";

import CreateLink from "@/actions/projects/create-link";
import { useSearchParams } from "next/navigation";

import { useTheme } from "next-themes";

export default function ViewProject({ project }: { project: ViewableProject }) {
  const [CanCreate, setCanCreate] = useState(false);
  const [Blocking, setBlocking] = useState(false);
  const [Key, setKey] = useState("");
  const { theme, systemTheme, setTheme } = useTheme();
  const [ctheme, setCTheme] = useState("/authlink-logo-full.svg");

  useEffect(() => {
    setTheme(systemTheme || "light");
    setCTheme(
      (theme == "light" && "/authlink-logo-full.svg") ||
        "/authlink-logo-full-light.png"
    );
  });

  // const [Views, setViews] = useState(0);

  // useEffect(() => {
  //   GetViews(project?.id || "").then((ViewCount) => [setViews(ViewCount)]);
  // }, []);

  const Router = useSearchParams();

  useEffect(() => {
    if (Router.get("key")) {
      console.log(Key);
      setKey(String(Router.get("key")));
    }
    setTimeout(() => {
      setCanCreate(true);
    }, 5000);
  }, []);

  return (
    <>
      <div className="mt-60">
        <div className="container mx-auto px-4 m-3">
          <div className="flex justify-center">
            <Image
              src={ctheme}
              width={"300"}
              height={"0"}
              alt="AuthLink Logo"
            />
          </div>
          <div className="flex justify-center mt-10">
            <Card className="w-96">
              <CardHeader>
                <CardTitle>{project?.title}</CardTitle>
                <CardDescription>
                  By <b>{project?.Profile?.username}</b>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Input
                  defaultValue={Key}
                  placeholder="Your license will appear here."
                  disabled={Key === ""}
                  readOnly
                />
                <Button
                  disabled={!CanCreate}
                  onClick={() => {
                    if (!document.getElementById("rZdWvcXbOuhD")) {
                      if (Blocking) return;
                      setBlocking(true);
                      IncrementViews(project?.id || "");
                    }
                    setCanCreate(false);
                    CreateLink(String(project?.id)).then((Res) => {
                      window.location.href = String(Res);
                    });
                  }}
                  className="w-full mt-6"
                >
                  {(CanCreate && "Get a free license key") || (
                    <span className="flex">
                      {" "}
                      <Loader2Icon className="mr-2 mt-0.5 h-4 w-4 animate-spin" />
                      Your link is being prepared..
                    </span>
                  )}
                </Button>
                <CardDescription className="flex mt-4">
                  <span className="mr-4">
                    {numeral(project?.views || 0).format("0,0")} Views
                  </span>
                  <span>{moment(project?.createdAt).fromNow()}</span>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="mt-32 font-light">
            <div className="container mx-auto flex w-full flex-col items-center justify-center gap-2 p-6 md:grid md:grid-cols-2 md:gap-0 lg:grid-cols-3"></div>
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
    </>
  );
}
