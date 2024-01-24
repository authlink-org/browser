"use server";

import { cookies } from "next/headers";

export async function SetCookie() {
  cookies().set("__offer", "finished", {
    httpOnly: true,
    maxAge: 3 * 86400,
  });
}

export async function GetCookie() {
  return cookies().get("__offer")?.value;
}
