// import Hero from "~/components/Hero";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "Custom website development" },
  ];
}

export default function Home() {
  return (
    <>
      <FeaturedProjects />
    </>
  );
}
