import React from "react";
import SectionWrap from "../organisms/SectionWrap";
import { get } from "../../services/service";
import TestimonialCard from "../atoms/TestimonialCard";
import topPoint from "../../assets/images/testimonials/topPoint.png"
import bottomPoint from "../../assets/images/testimonials/bottomPoint.png"
import yellowDots from "../../assets/images/testimonials/yellowDots.png"
import greyDots from "../../assets/images/testimonials/greyDots.png"

function Testimonial() {
  return (
    <SectionWrap param="testimonial">
      <div className="absolute border border-red-500">
        <img src={topPoint} alt="" />
        <img src={bottomPoint} alt="" />
        <img src={yellowDots} alt="" />
        <img src={greyDots} alt="" />
      </div>
      <div className="grid grid-cols-2 gap-8">
        {get.getTestimonials.map((unit) => (
          <TestimonialCard data={unit}/>
        ))}
      </div>
    </SectionWrap>
  );
}

export default Testimonial;
