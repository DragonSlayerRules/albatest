import React from "react";
import arrowLeft from "../../assets/icons/arrowLeft.svg";

function ProductCard({ data }) {
  return (
    <div className="aspect-[3/1] w-full px-4 py-2 rounded-2xl border-2 border-stroke/20 hover:border-secondary duration-500 cursor-pointer flex gap-4 items-center">
      <img
        src={data.image_path}
        alt=""
        className="w-10 h-fit aspect-square obeject-cover"
      />
      <div>
        <div className="text-secondary text-base font-bold flex gap-2 items-center">
          {data.title}
          <div className="relative">
            <div className="bg-primary w-5 aspect-square absolute hover:bg-transparent duration-500"></div>
            <img src={arrowLeft} alt="" className="w-5 aspect-square"></img>
          </div>
        </div>
        <div className="text-sm">{data.description}</div>
      </div>
    </div>
  );
}

export default ProductCard;
