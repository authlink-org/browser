"use client";

import Navbar from "@/components/authlink/navbar";
import Image from "next/image";
import { useEffect } from "react";

import { SetCookie } from "@/actions/projects/cookies";

export default function Page() {
  useEffect(() => {
    SetCookie();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-60">
        <div className="container mx-auto px-4 m-3">
          <div className="flex justify-center">
            <Image
              src={"/authlink-logo-full.svg"}
              width={"300"}
              height={"0"}
              alt="AuthLink Logo"
            />
          </div>
          <div className="flex justify-center mt-10">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              You can now close this page and go back to the license page.
            </h3>
          </div>
          <div className="mt-32 font-light"></div>
        </div>
      </div>
    </>
  );
}
