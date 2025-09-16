import { getBlogPosts } from "../lib/notion";
import { BlogEntry } from "../lib/types";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

type BlogCardProps = {
  post: BlogEntry;
};
function BlogCard({ post }: BlogCardProps) {
  return (
    <li className="bg-white w-full px-6 py-6 border border-light-border rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 dark:bg-dark-secondary dark:border-dark-border">
      <h2 className="text-xl mb-2">{post.title}</h2>
      <p className="text-sm text-gray-text">{`${formatDistanceToNow(
        new Date(post.createdTime)
      )} ago`}</p>
    </li>
  );
}

type CardContainerProps = {
  posts: BlogEntry[];
};
function CardContainer({ posts }: CardContainerProps) {
  return (
    <ul className="w-full py-8 flex flex-col gap-4 relative overflow-hidden">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
          <BlogCard post={post} />
        </Link>
      ))}
    </ul>
  );
}

export default CardContainer;
