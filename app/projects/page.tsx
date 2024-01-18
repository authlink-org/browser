export const dynamic = "force-dynamic";

import GetAllProjects from "@/actions/projects/getallprojects";

export default async function ViewAllProjects() {
  const Projects = await GetAllProjects();

  return (
    <>
      <ul>
        {Projects.map((Project) => {
          return (
            <>
              <li key={Project.id}>
                <a
                  key={Project.id + "Clickable"}
                  href={`https://authlink.org/p/${Project.id}`}
                >
                  {Project.title}
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
