"use server";

export default async function CreateSupportLink(project: string) {
  const APIKey =
    "b7b85e6654ae86350e8d1f90c75bf7fff30a82188b3070ed23a16934921b0a72";
  const URL = "https://be.lootlabs.gg/api/lootlabs/content_locker";

  const TaskAmount = 1;
  const Theme = 1;
  const AdTier = 1;

  const TPromise = await new Promise((Res, Rej) => {
    fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${APIKey}`,
      },
      body: JSON.stringify({
        title: "Support Authlink.Org",
        url: `https://authlink.org/p/${project}?thank-you=1`,
        tier_id: AdTier,
        number_of_tasks: TaskAmount,
        theme: Theme,
      }),
    }).then((R) =>
      R.json().then((Response: LootLabsResponse) => {
        if (Response.type === "created") {
          const LootLabsURL = Response.message[0].loot_url;
          Res(LootLabsURL);
        }
      })
    );
  });

  return TPromise;
}

type LootLabsResponse = {
  type: string;
  request_time: number;
  message: Array<{
    title: string;
    url: string;
    tier_id: number;
    number_of_tasks: number;
    theme: number;
    short: string;
    loot_url: string;
  }>;
};
