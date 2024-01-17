"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { IoPersonCircleOutline } from "react-icons/io5";

const navData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Farmers",
    link: "/farmers",
  },
  {
    name: "Seeds",
    link: "/seeds",
  },
  {
    name: "About",
    link: "/about",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const scrolled = useScrollTop();
  return (
    <div
      className={`fixed top-0 z-50 inset-x-0 py-3 px-[7%] ${
        scrolled && "bg-white shadow-md"
      } transition`}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image src="/logo.svg" width={35} height={35} alt="logo" />
          <p
            className={`text-2xl font-semibold font-dm ${
              scrolled ? "text-black" : "text-white"
            } transition`}
          >
            Agrowise
          </p>
        </div>
        <ul
          className={`flex gap-8 font-dm font-semibold text-lg ${
            scrolled ? "text-black" : "text-white"
          } transition`}
        >
          {navData.map((nav) => (
            <div className="relative" key={nav.link}>
              <Link href={nav.link}>{nav.name}</Link>
              <div
                className={`absolute w-full bottom-0 left-0 h-[0.2rem] rounded-full transition-all origin-left duration-300 ${
                  pathName === nav.link ? "scale-x-100" : " scale-x-0"
                } ${scrolled ? "bg-black" : "bg-white"}`}
              ></div>
            </div>
          ))}
          <div className="flex gap-2 text-white bg-green-800 px-2 items-center rounded-xl ml-4">
            <IoPersonCircleOutline className="text-2xl" />
            <p className="text-base">Account</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
