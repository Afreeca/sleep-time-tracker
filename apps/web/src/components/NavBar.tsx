"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav
      className="bg-blue-950 text-white p-4 w-full h-min px-10  "
      data-cy="header"
    >
      <div className="flex items-center justify-between">
        <a href="https://cynomi.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/icons/icon.png"
            alt="Cynomi logo"
            height={140}
            width={140}
          />
        </a>
        <div className="flex space-x-4">
          <Link
            href="/"
            className={`flex items-center  p-2   rounded transition-all duration-300 ${
              pathname === "/" && "bg-slate-600"
            }`}
          >
            <div className="flex justify-center items-center h-10">
              <span className="ml-2 transition-opacity duration-300">Home</span>
            </div>
          </Link>

          <Link
            href="/data-overview"
            className={`flex items-center  p-2 rounded transition-all duration-300  ${
              pathname === "/data-overview" && "bg-slate-600"
            }`}
          >
            <div className="flex justify-center items-center h-10">
              <span className="ml-2 transition-opacity duration-300">
                records
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
