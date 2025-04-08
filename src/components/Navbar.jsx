import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Navbar() {
   // Define the navigation options in an array
   const navOptions = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50  ">
      <div className="navbar py-4 shadow-sm max-w-7xl mx-auto px-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navOptions.map((option) => (
                <li key={option.href}>
                  <Link href={option.href}>
                    {option.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
         <div className="bg-white rounded-full"> <Link href={'#home'}><Image src="/images/logo.png" alt="Logo" width={50} height={50} /></Link></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-6">
          {navOptions.map((option) => (
                <li key={option.href}>
                  <Link href={option.href} className="hover:text-gray-300">
                    {option.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn hover:bg-gray-300">Resume</a>
        </div>
      </div>
    </nav>
  );
}
