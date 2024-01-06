export async function CreateWorkinkLink(
  APIKey: string,
  Title: string,
  Description: string,
  Custom: string,
  Destination: string
): Promise<string> {
  return new Promise((res, rej) => {
    fetch("https://dash-api.work.ink/v1/link", {
      method: "POST",
      headers: {
        "X-Api-Key": APIKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: Title,
        link_description: Description,
        destination: Destination,
        f_domain: "workink.co",
        custom: Custom,
      }),
    }).then((Resp) => {
      Resp.json().then((a) => {
        if (a.error) {
          return res("https://authlink.org");
        } else {
          return res(a.response.url);
        }
      });
    });
  });
}
