"use server";
import { NotionCompatAPI } from "notion-compat";
import { NotionAPI } from "notion-client";
import { Client } from "@notionhq/client";
import { BlogEntry } from "./types";

const unofficialNotionAPI = new NotionAPI();

const notionClient = new Client({ auth: process.env.NOTION_API_KEY });

export async function getPageContent(pageId: string) {
  const recordMap = await unofficialNotionAPI.getPage(pageId);
  return recordMap;
}

export async function getBlogPosts(): Promise<BlogEntry[]> {
  // returns all blog post
  const databaseId = process.env.DATABASE_ID!;
  let cursor: string | undefined = undefined;
  const pages = [];
  do {
    const res = await notionClient.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
    });
    pages.push(...res.results);
  } while (cursor);
  const publishedPosts = pages.filter(
    //@ts-ignore
    (page) => page?.properties?.Published?.checkbox
  );
  const postObjects = publishedPosts.map((post) => {
    //@ts-ignore
    const tags = post?.properties?.Tag?.multi_select.map(
      //@ts-ignore
      (item) => item?.name
    );
    return {
      id: post.id,
      //@ts-ignore
      createdTime: post?.created_time,
      //@ts-ignore
      category: post?.properties?.Category?.select?.name,
      //@ts-ignore
      title: post?.properties?.Name?.title[0]?.plain_text,
      tags,
    };
  });

  return postObjects;
}
