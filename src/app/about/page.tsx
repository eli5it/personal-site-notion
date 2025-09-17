import Image from "next/image";

export default function Page() {
  const likes = [
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "Postgres",
    "Docker",
    "CI/CD",
    "Test-driven development",
    "Functional programming",
    "Code reviews",
    "Open source",
    "Arrow Functions",
  ];

  const dislikes = [
    "Global variables",
    "Merge conflicts",
    "Magic numbers",
    "Callback hell",
    "Blocking the event loop",
    "Race conditions",
    "Flaky tests",
    "node_modules",
  ];

  return (
    <>
      <section>
        <h1 className="text-4xl font-bold border-b-2 border-b-gray-border dark:border-b-dark-border pb-2 mb-2 inline-block">
          About
        </h1>
        <p className="text-2xl text-gray-text font-extralight tracking-wider">
          Learn more about me
        </p>
        <p className="my-7 text-lg text-dark-border dark:text-offwhite">
          I am a passionate programmer always looking to learning something new.
          Despite this, I'm trying to not to get wrapped in the bleeding-edge
          technology-of-the week in frontend land.
        </p>
        <p className="my-7 text-lg text-dark-border dark:text-offwhite">
          In my free time I enjoy following baseball, browsing reddit, and
          playing{" "}
          <a
            className="text-darker-blue hover:text-blue-800"
            href="https://youtu.be/eZTSebZwY3A?si=YoSPlQSiQ4ipC6XX"
          >
            Super Smash Brothers Melee
          </a>
          .
        </p>
        <p className="my-7 text-lg text-dark-border dark:text-offwhite">
          I'm currently aiming to sharpen my skills in all things web
          development, using resources linked on{" "}
          <a
            className="text-darker-blue hover:text-blue-800"
            href="https://roadmap.sh/"
          >
            roadmap.sh
          </a>{" "}
          and documenting the process here.
        </p>
      </section>

      <section>
        <h2 className="text-4xl font-bold border-b-2 border-b-gray-border dark:border-b-dark-border pb-2 mb-2 inline-block">
          Education
        </h2>
        <ul className="py-7">
          <li className="flex gap-5 mb-7 items-start">
            <Image
              className="flex-l"
              alt="Cornell University logo"
              src={"/cornell-logo.png"}
              width={48}
              height={48}
            ></Image>
            <div>
              <p className="font-bold text-xl mb-2"> Cornell University</p>
              <p className="text-[16px] text-light-text dark:text-offwhite">
                Graduated with an appreciation for law, economics, and
                organizational behavior, while also branching into computer
                science. In my later semesters, I explored courses in functional
                programming, object-oriented programming, data structures, and
                discrete structures. It was here that I got to experience the
                joy of programming in OCaml.
              </p>
              <p className="text-light-gray-text">
                B.S., Industrial and Labor Relations :: August 2020 - June 2023
              </p>
            </div>
          </li>
          <li className="flex gap-5 items-start">
            <Image
              className="flex-l rounded-3xl"
              alt="Cornell University logo"
              src={"/osu-logo.png"}
              width={48}
              height={48}
            ></Image>
            <div>
              <p className="font-bold text-xl mb-2"> Oregon State University</p>
              <p className="text-[16px] text-light-text dark:text-offwhite">
                Completed an accelerated computer science degree designed for
                students with prior undergraduate study. Built on my earlier
                coursework, and self study with a full range of CS coursework,
                including algorithms, operating systems, databases, software
                engineering, and web development.
              </p>
              <p className="text-light-gray-text">
                B.S., Computer Science :: August 2023 - September 2025
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="pb-7">
        <h2 className="text-4xl font-bold border-b-2 border-b-gray-border dark:border-b-dark-border pb-2 mb-2 inline-block">
          Like 😁
        </h2>
        <ul className="flex gap-2 flex-wrap">
          {likes.map((like) => (
            <li
              key={like}
              className="bg-lighter-green dark:bg-dark-green-bg dark:text-translucent-green text-text-green inline-block px-2 py-1 rounded-sm"
            >
              {like}
            </li>
          ))}
        </ul>
      </section>
      <section className="pb-7">
        <h2 className="text-4xl font-bold border-b-2 border-b-gray-border dark:border-b-dark-border pb-2 mb-2 inline-block">
          Dislike 😒
        </h2>
        <ul className="flex gap-2 flex-wrap">
          {dislikes.map((dislike) => (
            <li
              key={dislike}
              className="bg-pinkish-red dark:bg-dark-red-bg text-red-text dark:text-dark-red-text inline-block px-2 py-1 rounded-sm"
            >
              {dislike}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-4xl font-bold border-b-2 border-b-gray-border dark:border-b-dark-border pb-2 mb-2 inline-block">
          About This Site
        </h2>
        <p className="text-lg text-dark-border dark:text-offwhite mb-7">
          This site was built using Next.js, utilzing Tailwind for styling. If
          you'd like to poke around the source code, feel free to check out the
          repository{" "}
          <a className="text-darker-blue hover:text-blue-800" href="/">
            here
          </a>
          .
        </p>
        <p className="text-lg text-dark-border dark:text-offwhite my-7">
          I write the blog posts for this website using Notion, and utilize{" "}
          <a
            className="text-darker-blue hover:text-blue-800"
            href="https://github.com/NotionX/react-notion-x"
          >
            react-notion-x
          </a>{" "}
          to render them to your screen.
        </p>
      </section>
    </>
  );
}
