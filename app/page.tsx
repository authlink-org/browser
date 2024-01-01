import Navbar from "@/components/authlink/navbar";
import Header from "@/components/authlink/header";

export const metadata = {
  title: "Browser top project - AuthLink.org",
  description:
    "View newly created projects, search for them, and dicover new software.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
    </>
  );
}
