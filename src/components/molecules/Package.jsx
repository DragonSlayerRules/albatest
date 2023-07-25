import React from "react";
import SectionWrap from "../organisms/SectionWrap";
import tempData from "../../assets/json/tempData.json";
import ProductCard from "../atoms/ProductCard";

function Package() {
  
  return (
    <SectionWrap param="package">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tempData.products.map((unit, index) => (
          <div key={index}>
            <ProductCard data={unit} />
          </div>
        ))}
      </div>
    </SectionWrap>
  );
}

export default Package;
