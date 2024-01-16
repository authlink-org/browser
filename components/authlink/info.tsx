import Script from "next/script";

export default function Info() {
  return (
    <div className="container mx-auto flex justify-center gap-4 mb-4">
      {/* <a
        href="/privacy"
        className="hover:underline underline-offset-8 decoration-wavy decoration-green-500"
      >
        Privacy
      </a> */}
      <a
        href="https://www.iubenda.com/privacy-policy/57438358"
        className="hover:underline underline-offset-8 decoration-wavy decoration-green-500"
        title="Privacy Policy "
      >
        Privacy Policy
      </a>
      <Script src="/privacy.js" />
      <a
        href="https://www.iubenda.com/privacy-policy/57438358/cookie-policy"
        className="hover:underline underline-offset-8 decoration-wavy decoration-green-500"
        title="Cookie Policy "
      >
        Cookie Policy
      </a>
      <Script src="/cookie.js" />
      <a
        href="/projects"
        className="hover:underline underline-offset-8 decoration-wavy decoration-green-500"
      >
        Projects
      </a>
      <a
        href="/imprint"
        className="hover:underline underline-offset-8 decoration-wavy decoration-green-500"
      >
        Imprint
      </a>
    </div>
  );
}
