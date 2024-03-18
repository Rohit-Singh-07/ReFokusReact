import React from "react";
import Button from "./Button";
import "./Product.css";


function Product({title, description, mover, index}) {
  
  return (
    <div onMouseOver={() => {mover(index)}} className="product text-white flex justify-between lg:h-[14vw] w-full pl-[5vw] pr-[12vw] items-center">
      <h1 className="lg:text-5xl md:text-[3vw]">{title}</h1>
      <div className="w-[21vw]">
        <p className="lg:text-lg md:text-[1.5vw] font-normal mb-4">
          {description}
        </p>
        <Button title="Live Website"></Button>
      </div>
    </div>
  );
}

export default Product;
