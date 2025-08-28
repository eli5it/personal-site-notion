"use client";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import { getPageTitle } from "notion-utils";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import "prismjs";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => {
    // additional prism syntaxes
    await Promise.all([
      // @ts-expect-error ignore no prisma types
      import("prismjs/components/prism-markup-templating.js"),
      // @ts-expect-error ignore no prisma types
      import("prismjs/components/prism-markup.js"),
      // @ts-expect-error ignore no prisma types
      import("prismjs/components/prism-bash.js"),
      // @ts-expect-error ignore no prisma types
      import("prismjs/components/prism-csharp.js"),
      // @ts-expect-error ignore no prisma types
      import("prismjs/components/prism-docker.js"),
      // @ts-expect-error ignore no prisma types
      import("prismjs/components/prism-js-templates.js"),
      // @ts-expect-error ignore no prisma types
      import("prismjs/components/prism-diff.js"),
      // @ts-expect-error ignore no prisma types
      import("prismjs/components/prism-git.js"),
      // @ts-expect-error ignore no prisma types
      import("prismjs/components/prism-go.js"),
      // @ts-expect-error ignore no prisma types
      import("prismjs/components/prism-handlebars.js"),
      // @ts-expect-error ignore no prisma types
      import("prismjs/components/prism-markdown.js"),
      // @ts-expect-error ignore no prisma types
      import("prismjs/components/prism-python.js"),
      // @ts-expect-error ignore no prisma types
      import("prismjs/components/prism-sql.js"),
      // @ts-expect-error ignore no prisma types
      import("prismjs/components/prism-yaml.js"),
      // Add any other languages you need here
    ]);

    return m.Code;
  })
);

type NotionClientProps = {
  recordMap: ExtendedRecordMap;
};
const NotionRendererComponent = ({ recordMap }: NotionClientProps) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <NotionRenderer
        components={{ Code }}
        recordMap={recordMap}
        fullPage={false}
        darkMode={resolvedTheme === "dark"}
      />
    </>
  );
};

export default NotionRendererComponent;
