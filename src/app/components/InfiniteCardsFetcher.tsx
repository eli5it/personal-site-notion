"use client";

import { BlogEntry } from "../lib/types";
import CardContainer from "./CardContainer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getBlogPosts } from "../lib/notion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type InfiniteCardsFetcherProps = {
  initialPosts: BlogEntry[];
  cursor: string | null;
};
function InfiniteCardsFetcher({
  initialPosts,
  cursor,
}: InfiniteCardsFetcherProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["blogs"],
      queryFn: async ({ pageParam }) => {
        return await getBlogPosts(pageParam);
      },
      initialPageParam: cursor,
      getNextPageParam: (lastPage) => {
        return lastPage.cursor;
      },
    });
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const fetchedPosts = data?.pages.flatMap((page) => page.posts) ?? [];

  const allPosts = initialPosts.concat(fetchedPosts);

  return (
    <>
      <CardContainer posts={allPosts}></CardContainer>

      <div ref={ref}></div>
    </>
  );
}

export default InfiniteCardsFetcher;
