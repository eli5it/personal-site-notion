"use client";

import { BlogEntry } from "../lib/types";
import CardContainer from "./CardContainer";

type InfiniteCardsFetcherProps = {
  initialPosts: BlogEntry[];
};
function InfiniteCardsFetcher({ initialPosts }: InfiniteCardsFetcherProps) {
  return <CardContainer posts={initialPosts}></CardContainer>;
}

export default InfiniteCardsFetcher;
