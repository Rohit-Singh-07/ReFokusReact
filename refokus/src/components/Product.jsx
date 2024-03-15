import React from "react";
import Button from "./Button";

function Product({title, description}) {
  
  return (
    <div className="text-white flex justify-between h-60 w-full pl-[5vw] pr-[12vw] border-t-2 items-center">
      <h1 className="text-5xl">{title}</h1>
      <div className="w-[21vw]">
        <p className="text-lg font-normal mb-4">
          {description}
        </p>
        <Button></Button>
      </div>
    </div>
  );
}

export default Product;
