import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CardContainer from "./components/CardContainer";

export default async function Home() {
  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl border-b-2 border-light-border dark:border-dark-border pb-2">
            Hello There.
          </h2>
          <Link className="flex text-[16px]" href={"/about"}>
            <span>Read More</span>
            <ArrowUpRight></ArrowUpRight>
          </Link>
        </div>
        <p className="py-8 text-2xl dark:text-off-white font-extralight">
          I'm Elijah. I am a passionate software developer always looking to
          learn and grow. I like to read books, save bookmarks and to
          occasionally write articles.
        </p>
      </section>

      <section>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl border-b-2 border-light-border dark:border-dark-border pb-2">
            Latest Posts
          </h2>
          <Link className="flex text-[16px]" href={"/about"}>
            <span>Read More</span>
            <ArrowUpRight></ArrowUpRight>
          </Link>
        </div>
        <CardContainer />
      </section>
    </>
  );
}
