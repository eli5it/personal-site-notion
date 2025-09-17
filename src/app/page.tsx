import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CardContainer from "./components/CardContainer";
import { getBlogPosts } from "./lib/notion";

export default async function Home() {
  const { posts } = await getBlogPosts();

  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl border-b-2 border-light-border dark:border-dark-border pb-2">
            Welcome.
          </h2>
          <Link className="flex text-[16px]" href={"/about"}>
            <span>Read More</span>
            <ArrowUpRight></ArrowUpRight>
          </Link>
        </div>
        <p className="py-8 text-2xl dark:text-off-white font-extralight">
          This is Elijah. Thanks for visiting my personal site. Feel free to
          peruse my latest writings, learn more about me, or check out past
          projects.
        </p>
      </section>

      <section>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl border-b-2 border-light-border dark:border-dark-border pb-2">
            Latest Posts
          </h2>
          <Link className="flex text-[16px]" href={"/blog"}>
            <span>Read More</span>
            <ArrowUpRight></ArrowUpRight>
          </Link>
        </div>
        <CardContainer posts={posts} />
      </section>
    </>
  );
}
