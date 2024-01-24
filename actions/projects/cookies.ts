"use server";

import { cookies } from "next/headers";

export async function SetCookie() {
  cookies().set("_partner", "finished", {
    httpOnly: true,
    maxAge: 86400,
  });
}

export async function GetCookie() {
  return cookies().get("_partner")?.value;
}
