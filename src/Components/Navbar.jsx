import React from "react";
import logo from "../assets/logo.removebg.png";
import { navItems } from "../Data/Data";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 bg-white">
        <div className="container flex justify-between items-center ">
          <div>
            <img src={logo} alt="" className="h-16 w-16" />
          </div>
          <div>
            <ul className="hidden lg:flex gap-10  text-xl font-semibold">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-5 items-center">
            <a href="#" className="text-2xl font-semibold">
              Sign In{" "}
            </a>
            <button className="btn hover:bg-blue-600">Get Start</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
