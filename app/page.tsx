import Navbar from "@/components/authlink/navbar";
import Header from "@/components/authlink/header";
import Info from "@/components/authlink/info";

export const metadata = {
  title: "Browse top project - AuthLink.org",
  description:
    "View newly created projects, search for them, and dicover new software.",
};

import GetTopProjects from "@/actions/projects/top-projects";

export default async function Home() {
  const Projects = await GetTopProjects();

  return (
    <>
      <Navbar />
      <Header projects={Projects} />
      <Info />
    </>
  );
}
