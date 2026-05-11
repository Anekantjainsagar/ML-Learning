"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const history = useRouter();
  const pathname = usePathname();

  return (
    <div className="border-b md:py-3 py-2 px-4 flex md:flex-row flex-col items-center backdrop-blur-md fixed w-full top-0 left-0 justify-between">
      <h1
        className="font-extrabold text-2xl cursor-pointer"
        onClick={(e) => {
          history.push("/");
        }}
      >
        IPL Analysis
      </h1>
      <div className="flex items-center md:justify-start justify-between md:w-fit w-full md:mt-0 mt-3">
        {[
          { name: "Overall Analysis", route: "/" },
          { name: "Team Analysis", route: "/teams" },
          { name: "Player Analysis", route: "/player" },
        ].map((e, i) => {
          return (
            <p
              key={i}
              className={`cursor-pointer md:ml-8 hover:border-b md:text-base text-sm transition-all text-gray-300 hover:text-white ${
                pathname == e?.route ? "text-white border-b" : ""
              }`}
              onClick={() => {
                history.push(e?.route);
              }}
            >
              {e?.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
