import React from "react";
import SectionWrap from "../organisms/SectionWrap";
import ProductCard from "../atoms/ProductCard";
import { get } from "../../services/service";

function Package() {
  return (
    <SectionWrap param="package">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {get.getProducts.map((unit, index) => (
          <div key={index}>
            <ProductCard data={unit} />
          </div>
        ))}
      </div>
    </SectionWrap>
  );
}

export default Package;
