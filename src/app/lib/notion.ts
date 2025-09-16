"use server";
import { NotionCompatAPI } from "notion-compat";
import { Client } from "@notionhq/client";
import { BlogEntry } from "./types";

const notionClient = new Client({ auth: process.env.NOTION_API_KEY });

const compatNotionAPI = new NotionCompatAPI(notionClient);

export async function getPageContent(pageId: string) {
  const recordMap = await compatNotionAPI.getPage(pageId);
  return recordMap;
}

export async function getAllBlogPosts(): Promise<BlogEntry[]> {
  // returns all blog post
  const databaseId = process.env.DATABASE_ID!;
  let cursor: string | null = null;
  const pages = [];
  do {
    const res = await notionClient.databases.query({
      database_id: databaseId,
      start_cursor: cursor ?? undefined,
    });
    pages.push(...res.results);
    cursor = res.next_cursor;
  } while (cursor);
  const publishedPosts = pages.filter(
    //@ts-expect-error - TODO: Type the Notion API response properly
    (page) => page?.properties?.Published?.checkbox
  );
  const postObjects = publishedPosts.map((post) => {
    //@ts-expect-error - TODO: Type the Notion API response properly
    const tags = post?.properties?.Tag?.multi_select.map(
      //@ts-expect-error - TODO: Type the Notion API response properly
      (item) => item?.name
    );
    return {
      id: post.id,
      //@ts-expect-error - TODO: Type the Notion API response properly
      createdTime: post?.created_time,
      //@ts-expect-error - TODO: Type the Notion API response properly
      category: post?.properties?.Category?.select?.name,
      //@ts-expect-error - TODO: Type the Notion API response properly
      title: post?.properties?.Name?.title[0]?.plain_text,
      tags,
    };
  });

  return postObjects;
}

type GetBlogPostsReturn = {
  posts: BlogEntry[];
  cursor: null | string;
};

export async function getBlogPosts(
  cursor: string | undefined | null = undefined
): Promise<GetBlogPostsReturn> {
  const databaseId = process.env.DATABASE_ID!;
  const pages = [];
  const res = await notionClient.databases.query({
    database_id: databaseId,
    start_cursor: cursor ?? undefined,
    page_size: 5,
  });
  pages.push(...res.results);

  const publishedPosts = pages.filter(
    //@ts-expect-error - TODO: Type the Notion API response properly
    (page) => page?.properties?.Published?.checkbox
  );
  const postObjects = publishedPosts.map((post) => {
    //@ts-expect-error - TODO: Type the Notion API response properly
    const tags = post?.properties?.Tag?.multi_select.map(
      //@ts-expect-error - TODO: Type the Notion API response properly
      (item) => item?.name
    );
    return {
      id: post.id,
      //@ts-expect-error - TODO: Type the Notion API response properly
      createdTime: post?.created_time,
      //@ts-expect-error - TODO: Type the Notion API response properly
      category: post?.properties?.Category?.select?.name,
      //@ts-expect-error - TODO: Type the Notion API response properly
      title: post?.properties?.Name?.title[0]?.plain_text,
      tags,
    };
  });
  cursor = res.next_cursor;

  return {
    posts: postObjects,
    cursor,
  };
}
