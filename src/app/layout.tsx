import "./globals.css";
import { ThemeProvider } from "next-themes";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import NavBar from "./components/NavBar";
import Link from "next/link";
import QueryClientProvider from "@/app/providers/QueryClientProvider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="min-h-screen bg-light-primary dark:bg-dark-primary">
        <ThemeProvider>
          <QueryClientProvider>
            <NavBar />
            <div className="max-w-[672px] m-auto py-16 px-6">{children}</div>
            <footer className="hidden md:flex justify-center">
              <div className="w-full max-w-[672px] flex justify-between px-20 mb-8 text-sm text-gray-text ">
                <a
                  className="hover:text-dark-border"
                  href={"mailto:eli.davis1104@example.com"}
                >
                  Contact
                </a>
                <Link className="hover:text-dark-border" href={"/"}>
                  Repository
                </Link>
              </div>
            </footer>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
