import Navbar from "@/components/authlink/navbar";
import Header from "@/components/authlink/header";

export const metadata = {
  title: "Browse top project - AuthLink.org",
  description:
    "View newly created projects, search for them, and dicover new software.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="absolute bottom-4 container mx-auto flex justify-center gap-4">
        <a
          href="/privacy"
          className="hover:underline underline-offset-8 decoration-wavy decoration-green-500"
        >
          Privacy
        </a>
        <a
          href="/imprint"
          className="hover:underline underline-offset-8 decoration-wavy decoration-green-500"
        >
          Imprint
        </a>
      </div>
    </>
  );
}
