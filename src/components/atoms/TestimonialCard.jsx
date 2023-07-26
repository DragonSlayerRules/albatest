import React from "react";

function TestimonialCard({ data }) {
  return (
    <div className={`${data.type === "primary" ? "scale-100" : "scale-75 origin-top-left"} border border-black`}>
      <div className="text-4xl font-bold">{data.title}</div>
      <div className="text-2xl font-light">"{data.comment}"</div>
      <div className="flex items-center gap-2 mt-2">
        {data.image ? (
          <img
            src={data.image}
            alt=""
            className="w-10 h-fit aspect-square rounded-full object-cover"
          ></img>
        ) : (
          ""
        )}
        <div className="text-md font-light">
          <div className="text-stroke">{data.name}</div>
          <div className="text-stroke/50">{data.status}</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
