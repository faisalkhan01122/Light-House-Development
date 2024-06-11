import React from "react";
import logo from "../assets/logo.removebg.png";
const Footer = () => {
  return (
    <>
      <div className="container h-[80vh] bg-[#8b0000] grid grid-cols-5 justify-center items-center gap-10">
        <div className=" grid grid-cols-1 gap-4 col-span-2  ">
          <div>
            <img src={logo} alt="" className="h-12 bg-white rounded-lg" />
          </div>
          <div className="text-white text-xl">
            <p>
              Our latest news, articles, and resources, we <br /> will send to
              your inbox weekly.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Email"
              className="pt-3 pb-3  w-80 rounded-lg"
            />

            <button className="btn text-start">Subscribe</button>
          </div>
          <div>
            <h2 className="text-white text-xl">10/10 Overall rating</h2>
          </div>
        </div>
        <div>
          <div className="text-white flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Primary Pages</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Integration</a>
              </li>
              <li>
                <a href="#">Single Integration</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-white flex flex-col gap-5">
            <h1 className="text-2xl font-bold"> Pages</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">Pricing </a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">News Details</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Career Signal</a>
              </li>
              <li>
                <a href="#"> Services Signl </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className=" text-white flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Templates</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Support Signal</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">User Login</a>
              </li>
              <li>
                <a href="#">Career Single</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
