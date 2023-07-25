import React from "react";
import { get } from "../../services/service";


function Tools() {
  return (
    <div className="container mx-auto px-4 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
      {get.getTools.map((unit) => (
       <div className="flex justify-center"> <img src={unit} alt="" className="aspect-square"/></div>
      ))}
    </div>
  );
}

export default Tools;
