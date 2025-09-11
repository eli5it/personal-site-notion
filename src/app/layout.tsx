import "./globals.css";
import { ThemeProvider } from "next-themes";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import NavBar from "./components/NavBar";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="min-h-screen bg-light-primary dark:bg-dark-primary">
        <ThemeProvider>
          <NavBar />
          <div className="max-w-[672px] m-auto py-16 px-6">
            {children}
            <footer className="hidden md:flex justify-center">
              <div className="w-full max-w-[672px] flex justify-between px-20 py-6 text-sm text-gray-text ">
                <Link className="hover:text-dark-border" href={"/"}>
                  Contact
                </Link>
                <Link className="hover:text-dark-border" href={"/"}>
                  Repository
                </Link>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
