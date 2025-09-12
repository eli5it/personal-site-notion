import CardContainer from "../components/CardContainer";

export async function Page() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold border-b-2 border-b-gray-border dark:border-b-dark-border pb-2 mb-2">
          Blog
        </h1>
        <p className="text-center text-xl max-w-[512px] text-gray-text">
          Helpful tools, thoughtful articles and other findings from the web.
        </p>
        <CardContainer />
      </div>
    </main>
  );
}

export default Page;
