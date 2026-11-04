import React from "react";
import ReactMarkdown from "react-markdown";
import type { Route } from "./+types";
import type { PostMeta } from "~/types";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params as { slug: string };

  const url = new URL("/posts-meta.json", request.url);
  const res = await fetch(url.href);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const index: PostMeta[] = await res.json();
  const postMeta = index.find((post) => post.slug === slug);

  if (!postMeta) {
    throw new Response("Not Found", { status: 404 });
  }

  // dynamically import raw markdown
  const markdown = await import(`../../posts/${slug}.md?raw`);

  return {
    postMeta,
    markdown: markdown.default,
  };
}

type BlogPostDetailsPageProps = {
  loaderData: {
    postMeta: PostMeta;
    markdown: string;
  };
};

const BlogPostDetailsPage = ({ loaderData }: BlogPostDetailsPageProps) => {
  const { postMeta, markdown } = loaderData;

  return (
    <>
      <h1>Blog111</h1>
    </>
  );
};

export default BlogPostDetailsPage;
