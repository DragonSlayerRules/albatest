import React from "react";
import SectionWrap from "../organisms/SectionWrap";
import tempData from "../../assets/json/tempData.json";
import ProductCard from "../atoms/ProductCard";

function Package() {
  return (
    <SectionWrap param="package">
      <div className="grid grid-cols-2 gap-4">
        {tempData.products.map((unit) => (
          <>
            <ProductCard data={unit} />
          </>
        ))}
      </div>
    </SectionWrap>
  );
}

export default Package;
