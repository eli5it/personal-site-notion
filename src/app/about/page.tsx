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
        <p className="my-7 text-lg text-dark-border">
          I'm an all-around curious person who can't get enough of exploring new
          ideas and asking lots of questions.
        </p>
        <p className="my-7 text-lg text-dark-border">
          In my free time, you can usually find me reading books, cooking,
          playing board games, outside with the bicycle or simply spending time
          with those closest to me.
        </p>
        <p className="my-7 text-lg text-dark-border">
          I'm an advocate for working and learning in public, which I'm doing on
          and off on on LinkedIn, X, Bluesky and my YouTube channel.
        </p>
      </section>

      <section>
        <h2 className="text-4xl font-bold border-b-2 border-b-gray-border dark:border-b-dark-border pb-2 mb-2 inline-block">
          Education
        </h2>
        <ul className="py-7">
          <li className="flex gap-5 mb-7">
            <div className="min-w-[48px] w-[48px] min-h-[48px] h-[48px] rounded-xl bg-gray-500 mt-1.5"></div>
            <div>
              <p className="font-bold text-xl mb-2"> Oregon State University</p>
              <p className="text-[16px] text-dark-border">
                Build Facilitator School, an educational platform designed to
                help people run more effective meetings and workshops. My main
                focus was on the website, marketing, and content. I grew the
                site from zero to 200,000 visitors a year, led the creation of
                resources, videos, and training materials, and delivered over
                nine training cohorts for participants from global organizations
                like NASA, Apple, Disney, and UNICEF.
              </p>
              <p>
                Co-Founder (Design, Marketing, Content) :: June 2020 - Jan 2025
              </p>
            </div>
          </li>
          <li className="flex gap-5">
            <div className="min-w-[48px] w-[48px] min-h-[48px] h-[48px] rounded-xl bg-gray-500 mt-1.5"></div>
            <div>
              <p className="font-bold text-xl mb-2"> Oregon State University</p>
              <p className="text-[16px] text-dark-border">
                Build Facilitator School, an educational platform designed to
                help people run more effective meetings and workshops. My main
                focus was on the website, marketing, and content. I grew the
                site from zero to 200,000 visitors a year, led the creation of
                resources, videos, and training materials, and delivered over
                nine training cohorts for participants from global organizations
                like NASA, Apple, Disney, and UNICEF.
              </p>
              <p>
                Co-Founder (Design, Marketing, Content) :: June 2020 - Jan 2025
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
              className="bg-lighter-green text-text-green inline-block px-2 py-1 rounded-sm"
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
              className="bg-pinkish-red text-red-text inline-block px-2 py-1 rounded-sm"
            >
              {dislike}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-4xl font-bold border-b-2 border-b-gray-border dark:border-b-dark-border pb-2 mb-2 inline-block">
          About This Page
        </h2>
        <p className="text-lg text-dark-border mb-7">
          Everything you see here I have designed and built myself. The website
          is using React and Chakra UI as a design system. The pages are
          generated by NextJS and are hosted on Vercel.
        </p>
        <p className="text-lg text-dark-border my-7">
          The content for the website, such as articles, books and bookmarks are
          stored on Airtable and then pulled in through their API endpoint. If
          you are curious, you can explore the code for this website on my
          Github.
        </p>
      </section>
    </>
  );
}
