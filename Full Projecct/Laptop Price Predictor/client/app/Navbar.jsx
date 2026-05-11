"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const history = useRouter();
  const pathname = usePathname();

  return (
    <div className="px-[1.25vw] py-2.5 fixed w-full flex items-center border-b border-b-gray-600 justify-between">
      <h1 className="text-2xl font-bold cursor-pointer">ML Predictor</h1>
      <div className="flex items-center">
        {[
          { title: "Movie Recommendation", route: "/movies" },
          { title: "Laptop Price Predictor", route: "/" },
          { title: "Salary Predictor", route: "/salary" },
        ].map((e, i) => (
          <p
            key={i}
            className={`cursor-pointer ${
              pathname == e?.route ? "text-white" : "text-gray-400"
            } hover:text-white transition-all ml-7`}
            onClick={() => {
              history.push(e?.route);
            }}
          >
            {e?.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
