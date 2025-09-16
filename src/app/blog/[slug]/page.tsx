import { getAllBlogPosts, getPageContent } from "@/app/lib/notion";
import NotionRenderer from "@/app/components/NotionRenderer";

import { notFound } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import CopyLink from "@/app/components/CopyLink";

export async function generateStaticParams() {
  // this function fetches all blog posts at build time, to ensure each page is statically rendered
  const posts = await getAllBlogPosts();
  const postIds = posts.map((post) => ({ slug: post.id }));
  return postIds;
}

// ensures that posts created after build time can still be reached
export const dynamicParams = true;

// revalidate page once a day
export const revalidate = 86400;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let recordMap;
  let pageTitle = "Untitled Post";
  let postTimeString = "";

  try {
    recordMap = await getPageContent(slug);
    const pageBlock = recordMap.block[slug]?.value;
    pageTitle = pageBlock?.properties?.title?.[0]?.[0] || "Untitled Post";
    const postedAt = pageBlock.last_edited_time;
    const postDate = new Date(postedAt);

    postTimeString = `${formatDistanceToNow(postDate)} ago`;
  } catch (err) {
    console.error(err);
    notFound();
  }

  return (
    <>
      <div>
        <div className="pl-[min(16px,8vw)] pr-[min(16px,8vw)]">
          <h1 className="text-4xl font-bold  pb-3 border-b-2 border-b-light-border dark:border-b-dark-border">
            {pageTitle}
          </h1>
          <div className="py-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gray-700"></div>
              <div>
                <p className="text-black text-[16px] dark:text-offwhite">
                  Elijah Davis
                </p>
                <p className="text-gray-text dark:text-offwhite text-sm">
                  {postTimeString}
                </p>
              </div>
              <CopyLink></CopyLink>
            </div>
          </div>
        </div>

        <div>
          <article>
            <NotionRenderer recordMap={recordMap} />
          </article>
        </div>
      </div>
    </>
  );
}
