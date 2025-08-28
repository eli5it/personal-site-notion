import { getBlogPosts, getPageContent } from "@/app/lib/notion";
import NotionRenderer from "@/app/components/NotionRenderer";
import * as fs from "fs";
import path from "path";
import { Link as LinkIcon } from "lucide-react";

const fsp = fs.promises;

export async function generateStaticParams() {
  // this function fetches all blog posts at build time
  const posts = await getBlogPosts();
  const postIds = posts.map((post) => ({ slug: post.id }));
  return postIds;
}

// don't render this component when no corresponding blog post exists
export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let recordMap;
  let pageTitle = "Untitled Post"; // Default title
  // const recordMap = await getPageContent(slug);
  // const pageBlock = recordMap.block[slug]?.value;
  // const pageTitle = pageBlock?.properties?.title?.[0]?.[0] || "Untitled Post";
  try {
    const outputDir = path.join(process.cwd(), "notion-data");
    const filePath = path.join(outputDir, `${slug}.json`);

    // Check if the file exists before trying to read it
    await fsp.access(filePath, fs.constants.F_OK); // F_OK checks if file exists

    // Read the content of the JSON file
    const fileContent = await fsp.readFile(filePath, "utf8");
    recordMap = JSON.parse(fileContent); // Parse the JSON string back into an object

    // Extract title from the read recordMap
    const pageBlock = recordMap.block[slug]?.value;
    pageTitle = pageBlock?.properties?.title?.[0]?.[0] || "Untitled Post";

    console.log(
      `Successfully read recordMap for "${pageTitle}" from ${filePath}`
    );
    // You can now use the 'recordMap' variable which holds the content from the file
    // For demonstration, let's log a part of it (e.g., the page title from the read data)
    console.log(
      "Content from file (first few characters):",
      JSON.stringify(recordMap).substring(0, 200) + "..."
    );
  } catch (error) {
    // If file doesn't exist or there's an error reading/parsing, fetch from Notion
    if (error.code === "ENOENT") {
      console.warn(
        `JSON file for slug "${slug}" not found. Fetching from Notion.`
      );
    } else {
      console.error(
        `Error reading or parsing recordMap for slug "${slug}" from file:`,
        error
      );
    }
    recordMap = await getPageContent(slug); // Fallback to fetching from Notion
    const pageBlock = recordMap.block[slug]?.value;
    pageTitle = pageBlock?.properties?.title?.[0]?.[0] || "Untitled Post";
    console.log(`Fetched recordMap for "${pageTitle}" from Notion.`);
  }
  return (
    <>
      <div className="py-16">
        <div className="pl-[min(16px,8vw)] pr-[min(16px,8vw)]">
          <h1 className="text-4xl font-bold  pb-3 border-b-2 border-b-dark-border">
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
                  X months ago
                </p>
              </div>
              <button className="flex ml-auto bg-white dark:bg-dark-secondary dark:hover:bg-dark-border px-2 py-2 rounded-lg items-center gap-1 hover:bg-light-border">
                <LinkIcon className="w-[14px] h-[14px]" />
                Copy Link
              </button>
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
