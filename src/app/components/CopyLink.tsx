"use client";
import { useState, useEffect } from "react";
import { Link as LinkIcon, Check as CheckIcon } from "lucide-react";
import { cn } from "../lib/utils";

export default function CopyLink() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;

    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    // Cleanup
    return () => clearTimeout(timeout);
  }, [isCopied]);

  const clickHandler = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setIsCopied(!isCopied);
  };

  return (
    <button
      onClick={clickHandler}
      className={cn(
        "flex ml-auto bg-white dark:bg-dark-secondary dark:hover:bg-dark-border px-2 py-2 rounded-lg items-center gap-1 hover:bg-light-border border border-light-border dark:border-dark-border text-sm",
        {
          "text-dark-green dark:text-light-green": isCopied,
        }
      )}
    >
      {isCopied ? (
        <CheckIcon className="w-[14px] h-[14px] mx-1" />
      ) : (
        <LinkIcon className="w-[14px] h-[14px] mx-1" />
      )}
      {isCopied ? "Copied" : "Copy link"}
    </button>
  );
}
