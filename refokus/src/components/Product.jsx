import React from "react";
import Button from "./Button";
import "./Product.css";


function Product({title, description, mover, index}) {
  
  return (
    <div onMouseOver={() => {mover(index)}} className="product text-white flex justify-between h-[28.5vh] w-full pl-[5vw] pr-[12vw] items-center">
      <h1 className="text-5xl">{title}</h1>
      <div className="w-[21vw]">
        <p className="text-lg font-normal mb-4">
          {description}
        </p>
        <Button title="Live Website"></Button>
      </div>
    </div>
  );
}

export default Product;
