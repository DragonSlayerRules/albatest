import React, { useState } from "react";
import logo from "../../assets/icons/alba-logo.svg";
import { Link } from "react-router-dom";

function Layout({ children }) {
  const [openMenu, setOpenMenu] = useState();
  return (
    <div className="">
      <div className="shadow-md py-4 bg-primary sticky top-0 z-50">
        <div className="mx-auto container px-4 h-full flex justify-between items-center font-revxBold z-50">
          <Link to="/">
            <img src={logo} className="w-16 sm:w-fit object-contain" alt="" />
          </Link>
          <div className="sm:w-2/3 items-end flex flex-col">
            <div
              className="space-y-1.5 md:hidden"
              onClick={() => {
                openMenu ? setOpenMenu(false) : setOpenMenu(true);
              }}
            >
              <div
                className={`${
                  openMenu ? "-translate-y-20" : ""
                } h-1 w-8 bg-stroke duration-1000`}
              ></div>
              <div
                className={`${
                  openMenu ? "-rotate-45 absolute" : "rotate-0"
                } h-1 w-8 bg-stroke duration-500`}
              ></div>
              <div
                className={`${
                  openMenu ? "rotate-45 " : "rotate-0"
                } h-1 w-8 bg-stroke duration-500`}
              ></div>
            </div>
            <div
              className={`${
                openMenu ? "h-72" : "h-0"
              } overflow-hidden absolute transition-all duration-500 px-2 md:p-0 md:relative flex flex-col-reverse md:flex-row items-center justify-center translate-y-10  bg-primary md:bg-transparent gap-2 md:gap-0  md:translate-y-0 md:w-full md:h-fit md:justify-between text-xl z-50`}
            >
              <div>Service</div>
              <div>About</div>
              <div>Portfolio</div>
              <div>Blog</div>
              <div>Career</div>
              <Link
                to="/auth/login"
                href="#contact"
                className="px-4 py-2 rounded-full bg-secondary border border-stroke"
              >
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      </div>
      {children}
      <div className="">
        <div className="container mx-auto px-4">
          <div className="border-b-2 border-t-2 border-stroke/20 w-full flex flex-col sm:flex-row gap-4 py-4 z-50">
            <div className="w-full sm:w-1/2">
              <img src={logo} className="h-10 sm:w-fit object-contain" alt="" />
              <div className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                deserunt. Quaerat laudantium dignissimos eaque? Ipsa iusto
              </div>
            </div>
            <div className="w-full sm:w-1/2 flex">
              <div className="w-1/2 space-y-4">
                <div className="font-bold">Website</div>
                <div className="space-y-2">
                  <div>About</div>
                  <div>Service</div>
                  <div>Portfolio</div>
                  <div>Blog</div>
                  <div>Carrer</div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="font-bold">Contact</div>
                <div>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Libero ducimus, inventore aperiam sit exercitationem
                    quaerat! Fugiat iusto nisi id veritatis ratione
                  </div>
                  <div>
                    <span className="font-bold">P: </span> +628 1248 1992 227
                  </div>
                  <div>
                    <span className="font-bold">E: </span> info@albatech.id
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between text-stroke/50">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>adipisicing elit.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
