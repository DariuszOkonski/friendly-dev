import type { Project } from "~/types";
import type { Route } from "./+types/details";

export async function clientLoader({
  request,
  params,
}: Route.ClientLoaderArgs): Promise<Project> {
  const res = await fetch(`http://localhost:8000/projects/${params.id}`);

  console.log("!!! res: ", res.ok);

  if (!res.ok) {
    throw new Response("Project not found", { status: 404 });
  }

  const project: Project = await res.json();

  return project;
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData;

  console.log(project);

  return <div>ProjectDetailsPage</div>;
};

export default ProjectDetailsPage;
