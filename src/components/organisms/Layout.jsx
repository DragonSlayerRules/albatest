import React, { useState } from "react";
import logo from "../../assets/alba-logo.svg";

function Layout({ children }) {
  const [openMenu, setOpenMenu] = useState();
  return (
    <>
      {/* <div className="py-3 shadow-md">
        <div className="container mx-auto px-4 flex justify-between">
          <img src={logo} className="h-12" alt="" />
         <div className="flex items-center gap-6">
            <div className="flex gap-4"   >
                <div>Service</div>
                <div>About</div>
                <div>Portfolio</div>
                <div>Blog</div>
                <div>Career</div>
            </div>
         <div className="px-8 py-4 rounded-full bg-secondary border border-stroke">Contact US</div>
         </div>
        </div>
      </div> */}
      <div className="shadow-md py-2">
        <div className="mx-auto container px-4 h-full flex justify-between items-center font-revxBold my-5 z-50">
          <img src={logo} className="h-10 sm:w-fit object-contain" alt="" />
          <div className="sm:w-2/3 items-end flex flex-col">
            <div
              className="flex gap-2 md:hidden"
              onClick={() => {
                openMenu ? setOpenMenu(false) : setOpenMenu(true);
              }}
            >
              <div className="h-3 w-3 border-2 rounded-full border-black"></div>
              <div className="h-3 w-3 border-2 rounded-full border-black"></div>
              <div className="h-3 w-3 border-2 rounded-full border-black"></div>
            </div>
            <div
              className={`${
                openMenu ? "h-72" : "h-0"
              } overflow-hidden absolute transition-all duration-500 px-2 md:p-0 md:relative flex flex-col-reverse md:flex-row items-center justify-center translate-y-16  bg-primary md:bg-transparent gap-2 md:gap-0  md:translate-y-0 md:w-full md:h-fit md:justify-between text-xl z-50`}
            >
              <div>Service</div>
              <div>About</div>
              <div>Portfolio</div>
              <div>Blog</div>
              <div>Career</div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-full bg-secondary border border-stroke"
              >
                Contact US
              </a>
            </div>
          </div>
        </div>
      </div>
      {children}
      <div className="">
        <div className="container mx-auto px-4 border-b border-t border-stroke/20 flex">
          <div className="w-1/2">Company</div>
          <div className="w-1/2 flex">
            <div className="w-1/2">Website</div>
            <div className="w-1/2">Contact</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
