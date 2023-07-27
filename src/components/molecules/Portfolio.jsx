import React from "react";
import SectionWrap from "../organisms/SectionWrap";
import PortofolioCard from "../atoms/PortofolioCard";
import { get } from "../../services/service";
import buttons from "../protons/buttons";

function Portfolio() {
  return (
    <SectionWrap param="portfolio">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xl:w-4/5 mx-auto">
        {get.getPortfolios.map((unit, index) => (
          <div key={index}>
            <PortofolioCard data={unit} />
          </div>
        ))}
      </div>
      <div className="mx-auto flex justify-center mt-4">
        <buttons.secondary data="load more" />
      </div>
    </SectionWrap>
  );
}

export default Portfolio;
