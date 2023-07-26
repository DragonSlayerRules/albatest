import React from "react";

function PortofolioCard({ data }) {
  return (
    <div className="rounded-2xl overflow-clip border-2 border-stroke/20 border-secondary">
      <img src={data.image} alt="" />
      <div className="p-4">
        <div className="font-normal text-sm text-stroke/50">{data.product}</div>
        <div className="font-bold text-lg text-secondary">{data.title}</div>
        <div className="text-sm">{data.description}</div>
      </div>
    </div>
  );
}

export default PortofolioCard;
