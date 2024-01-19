"use server";

import { cookies } from "next/headers";

export async function SetCookie() {
  cookies().set("__lootlabs", "supporter", {
    httpOnly: true,
    maxAge: 86400,
  });
}

export async function GetCookie() {
  return cookies().get("__lootlabs")?.value;
}
