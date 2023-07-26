import React from "react";
import Buttons from "../protons/Buttons";

function CallAction() {
  return (
    <div>
      <div className="container mx-auto px-4 flex justify-center my-10">
        <div className="flex flex-col px-4 justify-center items-center bg-secondary border borrder-stroke shadow-md rounded-2xl w-full py-10">
          <div className="text-2xl">
            is software important for your business?
          </div>
          <div className="text-4xl">Build it with Albatech</div>
          <div className="mt-6">
            <Buttons.primary data="Consultation Now" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallAction;
