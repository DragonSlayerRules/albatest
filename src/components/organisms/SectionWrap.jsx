import React from "react";

function SectionWrap({ children, param }) {
  return (
    <div className="my-10 container mx-auto px-4">
      <div className="text-center mb-4">
        <div className="text-stroke/50 font-normal text-lg">
          {param === "package"
            ? "Complete Package"
            : param === "portfolio"
            ? "Portfolio"
            : "Testimonial"}
        </div>
        <div className="font-bold text-3xl">
          {" "}
          {param === "package"
            ? "From product design to software continuous delivery"
            : param ===
              "The software that we build takes our client to next level"
            ? "Portfolio"
            : "What clients love in working with albatech team"}
        </div>
      </div>
      {children}
    </div>
  );
}

export default SectionWrap;
