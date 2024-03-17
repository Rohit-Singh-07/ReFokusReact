import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Cards() {
  return (
    <div className="flex justify-center text-white gap-1 font-['satoshi'] mt-3">
      <div className="justify-start w-[30vw] h-[25vw] bg-zinc-800 rounded-xl p-5">
        <div className="flex justify-between h-[14%]">
          <h3>Up Next: News</h3>
          <HiOutlineArrowNarrowRight />
        </div>
        <h2 className="h-[80%] text-[2vw]">
          Insight and behind <br /> the scenes
        </h2>
        <p className="font-light">Explore what drives our team</p>
      </div>
      <div className="justify-start w-[58vw] h-[25vw] bg-zinc-700 rounded-xl p-5">
        <div className="flex justify-between h-[14%]">
          <h3>Get in touch</h3>
          <HiOutlineArrowNarrowRight />
        </div>
        <h2 className="text-[2vw]">
          Lets get to it,
          <br /> togather.
        </h2>
        <h1 className="text-[7vw] font-medium">Start a Project</h1>
        <button className="border-2 px-4 py-2 rounded-full">Contact us</button>
      </div>
    </div>
  );
}

export default Cards;
