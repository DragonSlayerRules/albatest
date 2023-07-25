import React from "react";
import banner from "../../assets/Banner.png";
import buttons from "../protons/buttons";
import dotsOne from "../../assets/dotsOne.png";
import dotsTwo from "../../assets/dotsTwo.png";

function Hero() {
  return (
    <div>
      <div className="my-0 xl:my-12">
        <div className="xl:container mx-auto xl:px-4 flex flex-col justify-center mt-5 xxs:mt-10 md:mt-20 xl:mt-0 h-full xl:flex-row">
          <div className="container mx-auto w-full xl:w-1/2 px-4 xl:px-0 z-10">
            <div className="text-2xl xxs:text-3xl sm:text-5xl lg:text-7xl">
              <div className="w-4 h-8 xl:w-10 xl:h-14 -translate-x-2 xl:-translate-x-6 border xl:border-2 border-black absolute"></div>
              <h1 className="font-bold drop-shadow-2xl">Build or scale up</h1>
              <div className="font-light drop-shadow-2xl sm:whitespace-nowrap -mt-1">
                your development team
              </div>
            </div>
            <div className="flex gap-2 items-center xxs:mt-2">
              <div className="h-2 w-8 xl:w-20 bg-secondary"></div>
              <div className="text-base xxs:text-lg sm:text-xl lg:text-2xl">
                in weeks, not Months
              </div>
            </div>
            <div className="xl:mt-8">
              <buttons.secondary data="BOOK NOW" />
            </div>
          </div>
          <div className="w-full xl:w-1/2 absolute xl:relative">
            <img
              src={dotsOne}
              alt=""
              className="absolute hidden xl:block -translate-x-14 mt-8 -z-10"
            />
            <img
              src={banner}
              alt=""
              className="aspect-[5/3] w-full object-cover xl:rounded-2xl opacity-10 xl:opacity-100 z-10"
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
