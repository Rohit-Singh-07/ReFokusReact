import React from "react";
import Button from "./Button";

function NavBar() {
  return (
    <div className="w-[89vw] mx-auto py-6 flex justify-between items-center text-white font-['satoshi'] font-light text-sm border-b-2 border-zinc-700">
      <div className="flex items-center justify-between">
        <img
          className="w-16 md:w-20 mr-[6vw]"
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="Refokus Logo"
        />
        <div className="hidden lg:flex gap-[5vw]">
          {["Home", "Work", "Career"].map((elem, index) => (
            <a
              key={index}
              href={`/${elem.toLowerCase()}`}
              className="flex items-center gap-2 hover:text-gray-200"
            >
              {index === 1 && (
                <span className="bg-green-400 h-1.5 w-1.5 inline-block rounded-full shadow-2xl"></span>
              )}
              <span className="capitalize">{elem}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between lg:w-[55vw] xl:border-l-2 pl-[3vw] border-zinc-700">
        <h1 className="hidden lg:block">News</h1>
        <Button />
      </div>
    </div>
  );
}

export default NavBar;
