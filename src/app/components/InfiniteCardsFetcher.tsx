"use client";

import { BlogEntry } from "../lib/types";
import CardContainer from "./CardContainer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getBlogPosts } from "../lib/notion";

type InfiniteCardsFetcherProps = {
  initialPosts: BlogEntry[];
  cursor: string | null;
};
function InfiniteCardsFetcher({
  initialPosts,
  cursor,
}: InfiniteCardsFetcherProps) {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["blogs"],
    queryFn: ({ pageParam }) => getBlogPosts(pageParam),
    initialPageParam: cursor,
    getNextPageParam: (lastPage) => lastPage.cursor,
  });

  console.log(data);

  return (
    <>
      <CardContainer posts={initialPosts}></CardContainer>
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetching}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
}

export default InfiniteCardsFetcher;
