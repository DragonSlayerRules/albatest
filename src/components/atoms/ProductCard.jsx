import React from "react";
import cms from "../../assets/images/products/cms.png";
import digital from "../../assets/images/products/digital.png";
import maintenance from "../../assets/images/products/maintenance.png";
import mobile from "../../assets/images/products/mobile.png";
import payment from "../../assets/images/products/payment.png";
import website from "../../assets/images/products/website.png";
import arrowLeft from "../../assets/icons/arrowLeft.svg";

function ProductCard({ data }) {
  let image;
  switch (data.image_path) {
    case "cms":
      image = cms;
      break;
    case "digital":
      image = digital;
      break;
    case "maintenance":
      image = maintenance;
      break;
    case "mobile":
      image = mobile;
      break;
    case "payment":
      image = payment;
      break;
    case "website":
      image = website;
      break;
    default:
      image = null; // Provide a default image or handle the case when image_path doesn't match any of the cases
  }

  return (
    <div className="aspect-[3/1] w-full px-4 py-2 rounded-2xl border-2 border-stroke/20 hover:border-secondary duration-500 cursor-pointer flex gap-4 items-center">
      <img
        src={image}
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
