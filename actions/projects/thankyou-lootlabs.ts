"use server";

function CreateLinkvertiseLink(id: string, url: string): string {
  return `https://link-to.net/${id}/${
    Math.random() * 1000
  }/dynamic?r=${Buffer.from(encodeURI(url), "binary").toString("base64")}`;
}

export default async function CreateSupportLink(project: string) {
  const URL = `https://authlink.org/p/${project}?thank-you=1`;

  const LinkvertiseURL = CreateLinkvertiseLink("390447", URL);

  return LinkvertiseURL;
}
