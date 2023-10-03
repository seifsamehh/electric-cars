"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const Mobile = dynamic(() => import("@/components/Mobile"));
import "../styles/header.scss";

const Header = () => {
  // theme
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  });
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleChangeCheckbox = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      {/* large screen */}
      <header className="lg:flex justify-between items-center p-4 fixed top-0 w-screen z-20 min-[290px]:hidden">
        <div className="left">
          <Image
            src="/icon-512x512.png"
            alt="logo"
            aria-label="logo"
            width={100}
            height={100}
            className="cursor-pointer"
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8+9+zHgAHTAKWg6C53gAAAABJRU5ErkJggg=="
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
        <div className="right flex justify-center items-center gap-[12rem]">
          <nav className="flex items-center justify-center gap-4 links">
            <Link href="/" className="text-[#faf4f4] text-2xl font-bold">
              Home
            </Link>
            <Link href="/" className="text-[#faf4f4] text-2xl font-bold">
              Features
            </Link>
            <Link href="/" className="text-[#faf4f4] text-2xl font-bold">
              Contacts
            </Link>
          </nav>
          <div className="flex items-center justify-center gap-4 login">
            <Link
              href="/sign-in"
              className="text-[#cdff49] text-2xl border-2 border-solid border-[#cdff49] rounded-full px-6 py-3"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="text-[#1e1e1e] bg-[#cdff49] rounded-full px-6 py-3 text-2xl font-bold"
            >
              Sign Up
            </Link>
            <label className="swap swap-rotate" htmlFor="theme-switch">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={handleChangeCheckbox}
                id="theme-switch"
              />

              {/* sun icon */}
              <svg
                className="swap-on"
                fill="#cdff49"
                width={30}
                height={30}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off"
                fill="#cdff49"
                width={30}
                height={30}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </header>
      {/* mobile */}
      <header className="min-[290px]:flex justify-between items-center p-4 fixed top-0 w-screen z-20 lg:hidden">
        <div className="left">
          <Image
            src="/icon-512x512.png"
            alt="logo"
            aria-label="logo"
            width={100}
            height={100}
            className="cursor-pointer"
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8+9+zHgAHTAKWg6C53gAAAABJRU5ErkJggg=="
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
        <div className="right">
          <Mobile />
        </div>
      </header>
    </>
  );
};

export default Header;
