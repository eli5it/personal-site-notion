import Link from "next/link";
import { X } from "lucide-react";
import React from "react";

type MobileMenuProps = {
  hide: () => void;
};
function MobileMenu({ hide }: MobileMenuProps) {
  const listHandler = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    if (target?.tagName === "LI" || target?.tagName === "A") {
      hide();
    }
  };

  return (
    <div onClick={hide} className="fixed inset-0 bg-black/60 z-50">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-dark-primary absolute bottom-0 w-full rounded-t-xl px-6 pb-8"
      >
        <button onClick={hide} className="absolute right-6 top-4">
          <X></X>
        </button>
        <header className="py-4 text-xl font-bold">Menu</header>
        <ul
          onClick={listHandler}
          className="text-lg text-center flex flex-col gap-2"
        >
          <li className="bg-light-primary dark:bg-dark-secondary rounded-lg hover:bg-dark-text dark:hover:bg-dark-border">
            <Link className="w-full h-full block py-2" href={"/"}>
              Home
            </Link>
          </li>
          <li className="bg-light-primary dark:bg-dark-secondary rounded-lg hover:bg-dark-text dark:hover:bg-dark-border">
            <Link className="w-full h-full block py-2" href={"/about"}>
              About
            </Link>
          </li>
          <li className="bg-light-primary dark:bg-dark-secondary rounded-lg hover:bg-dark-text dark:hover:bg-dark-border">
            <Link className="w-full h-full block py-2" href={"/blog"}>
              Blog
            </Link>
          </li>
          <li className="bg-light-primary dark:bg-dark-secondary rounded-lg hover:bg-dark-text dark:hover:bg-dark-border">
            <Link className="w-full h-full block py-2" href={"/projects"}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
