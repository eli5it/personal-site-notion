"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, Pencil, Code } from "lucide-react";
import MobileMenu from "./MobileMenu";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  // Only render theme-specific content after mounting to prevent hydration mismatch
  const themeIcon = mounted ? (
    resolvedTheme === "dark" ? (
      <Moon />
    ) : (
      <Sun />
    )
  ) : null;
  const themeText = mounted
    ? resolvedTheme === "dark"
      ? "Light Mode"
      : "Dark Mode"
    : "Theme";
  const desktopThemeIcon = mounted ? (
    resolvedTheme === "dark" ? (
      <Sun className="h-4 w-4" />
    ) : (
      <Moon className="h-4 w-4" />
    )
  ) : null;

  return (
    <>
      {mobileMenuOpen && <MobileMenu hide={() => setMobileMenuOpen(false)} />}
      <div className="fixed bottom-0  w-[100%] py-2 bg-white dark:bg-dark-secondary border-t border-gray-300 dark:border-dark-border dark:text-dark-text md:hidden z-10">
        <ul className="text-xs w-full flex justify-around py-2">
          <li className="flex flex-col items-center gap-1">
            <Link href={"/blog"}>
              <Pencil className="mx-0.5 mb-1" />
              <span>Blog</span>
            </Link>
          </li>
          <li className="flex flex-col items-center gap-1">
            <button onClick={() => setMobileMenuOpen(true)}>
              <Menu className="ml-0.5" />
              <span>Menu</span>
            </button>
          </li>
          <li>
            <button
              className="flex flex-col items-center gap-1"
              onClick={toggleTheme}
            >
              {themeIcon}
              {themeText}
            </button>
          </li>
        </ul>
      </div>
      <div className="justify-center w-full bg-white dark:bg-dark-secondary border-b border-light-border dark:border-dark-border hidden md:flex">
        <header className="sticky top-0 h-16 flex items-center justify-around w-full max-w-[650px]">
          <Link
            href={"/"}
            className="rounded-full h-8 w-8 bg-black dark:bg-inherit dark:hover:bg-dark-border flex justify-center items-center px-1 py-1"
          >
            <Code className="stroke-white"></Code>
          </Link>
          <nav>
            <Link
              className="hover:bg-light-primary dark:hover:bg-dark-border  px-4 py-2 rounded-xl"
              href={"/blog"}
            >
              Blog
            </Link>
            <Link
              className="hover:bg-light-primary dark:hover:bg-dark-border  px-4 py-2 rounded-xl"
              href={"/about"}
            >
              About
            </Link>
            <Link
              className="hover:bg-light-primary dark:hover:bg-dark-border px-4 py-2 rounded-xl"
              href={"/projects"}
            >
              Projects
            </Link>
          </nav>
          <button
            onClick={toggleTheme}
            className="rounded-full h-8 w-8 bg-light-primary hover:bg-light-border dark:hover:bg-light-text dark:bg-dark-border flex justify-center items-center"
          >
            {desktopThemeIcon}
          </button>
        </header>
      </div>
    </>
  );
}

export default NavBar;
