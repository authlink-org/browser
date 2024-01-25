"use server";

import { cookies } from "next/headers";

export async function SetCookie() {
  cookies().set("?partner", "finished", {
    httpOnly: true,
    maxAge: 10800,
  });
}

export async function GetCookie() {
  return cookies().get("?partner")?.value;
}
