"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const Header = () => {
  const { setTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="w-full flex justify-center items-center bg-zinc-900 p-4">
      <div className="container flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image
            src={"/black-logo.png"}
            alt="logo"
            width={50}
            height={50}
            className="size-14 border-2 border-white dark:border-primary"
          />
          {/* <h1 className="text-2xl font-bold uppercase text-white">
            JACK PHAT
          </h1> */}
        </div>
        <div className="">
          <button
            className="size-12 border-2 border-white dark:border-black bg-black text-white dark:text-black dark:bg-white flex items-center justify-center p-2"
            onClick={handleToggleTheme}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
            <span className="sr-only">Toggle Theme</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
