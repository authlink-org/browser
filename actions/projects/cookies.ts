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

export async function setIsGoogle() {
  cookies().set("_isGoogle", "true", {
    httpOnly: true,
    maxAge: 86400,
  });
}

export async function getIsGoogle() {
  return cookies().get("_isGoogle")?.value;
}
