import React from "react";
import { get } from "../../services/service";

function Works() {
  return (
    <div className="bg-tertiary py-8">
      <div className="container mx-auto px-4 border">
        <div className="text-secondary text-2xl font-bold text-center">
          Our Progress comes with a Collaboration Between <br /> Creativity,
          ideas, and Technology
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {get.getWorks.map((unit) => (
          <div className="border text-center">
            <div className="capitalize text-2xl text-primary/90">{unit.ammount}+</div>
            <div className="capitalize text-base text-primary/90 ">{unit.title}</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
