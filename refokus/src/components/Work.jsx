import React from "react";

function Work() {
  const images = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ];
  return (
    <div className=" relative flex justify-center items-center text-white mx-auto text-[39vw] font-medium h-[73vh] font-['satoshi'] select-none">
      <div>
        <h1>work</h1>
        <div className="w-full h-full absolute top-0 left-0">
        {images.map((image, i) => {
  return (
    <div
      key={i}
      className={`w-[18vw] -translate-x-1/2 -translate-y-1/2 h-[25vw] absolute`}
      style={{ top: image.top, left: image.left, opacity: image.isActive ? 1 : 0 }}
    >
      <img
        src={image.url}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
})}



        </div>
      </div>
    </div>
  );
}

export default Work;
