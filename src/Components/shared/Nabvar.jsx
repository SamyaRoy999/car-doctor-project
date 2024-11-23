import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nabvar = () => {
  const navItem = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/about",
      title: "About",
    },
  ];

  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              {navItem.map((item, ind) => {
                return (
                  <Link href={item.path} key={ind}>
                    {item.title}
                  </Link>
                );
              })}
            </li>
          </ul>
        </div>
        <Image src="/assets/logo.svg" width={100} height={100} />
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal  px-2">
          {navItem.map((item, ind) => {
            return (
              <Link href={item.path} className="px-1" key={ind}>
                {item.title}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Nabvar;
