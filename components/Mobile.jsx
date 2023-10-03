"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function MobileNav({ open, setOpen }) {
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
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-[#cdff49] text-[#1e1e1e] transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter`}
    >
      <div className="flex flex-col items-center justify-center gap-8 mt-[14rem]">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className={`${bebas.className} text-5xl`}
        >
          Home
        </Link>
        <Link
          href="/features"
          onClick={() => setOpen(false)}
          className={`${bebas.className} text-5xl`}
        >
          Features
        </Link>
        <Link
          href="/contacts"
          onClick={() => setOpen(false)}
          className={`${bebas.className} text-5xl`}
        >
          Contacts
        </Link>
        <label
          className="swap swap-rotate"
          htmlFor="theme-switch"
          onClick={() => setOpen(false)}
        >
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
            fill="#1e1e1e"
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
            fill="#1e1e1e"
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
  );
}
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex items-center justify-center">
        <div
          className="relative z-50 flex flex-col items-center justify-between w-6 h-6 cursor-pointer group"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-white dark:bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-white dark:bg-white rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "hidden" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-white dark:bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
