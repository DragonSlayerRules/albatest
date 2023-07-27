import React from "react";
import banner from "../../assets/images/hero/Banner.png";
import Buttons from "../protons/Buttons";
import dotsOne from "../../assets/images/hero/dotsOne.png";
import dotsTwo from "../../assets/images/hero/dotsTwo.png";

function Hero() {
  return (
    <div>
      <div className="my-0 md:my-12 border-4 border-red-500">
        <div className="md:container mx-auto xl:px-4 flex flex-col justify-center items-center h-full md:flex-row relative">
          {/*  */}
          <div className="mx-auto w-full md:w-1/2 px-4 md:px-0 z-10 absolute md:relative border-4 border-blue-500">
            <div className="text-3xl xxs:text-3xl sm:text-5xl lg:text-7xl flex flex-col items-center md:items-start border-2 border-green-500">
              {/* <div className="w-4 h-8 xl:w-10 xl:h-14 -translate-x-2 xl:-translate-x-6 border xl:border-2 border-black absolute"></div> */}
              <h1 className="font-bold">Build or scale up</h1>
              <div className="font-light text-center -mt-1">
                your development team
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-center md:justify-start xxs:mt-2">
              <div className="h-2 w-8 xl:w-20 bg-secondary"></div>
              <div className="text-base xxs:text-lg sm:text-xl lg:text-2xl">
                in weeks, not Months
              </div>
            </div>
            <div className="xl:mt-8 border-emerald-400 border-2 flex justify-center md:justify-start">
              <Buttons.secondary data="BOOK NOW" />
            </div>
          </div>
          {/*  */}
          <div className="w-full md:w-1/2">
            <img
              src={dotsOne}
              alt=""
              className="absolute hidden xl:block -translate-x-14 mt-8 -z-10"
            />
            <img
              src={banner}
              alt=""
              className="aspect-[3/4] md:aspect-[5/3] w-full object-cover md:rounded-2xl opacity-20 md:opacity-100 z-10"
            />
            <div className="w-full hidden xl:flex justify-center absolute -translate-y-6 -z-40">
              <img src={dotsTwo} alt="" className="-z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
