import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/Logo/Brainelo_logo1.png";

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-richblack-800 to-richblack-900">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-200 leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
          {/* Section 1 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
              <img src={Logo} alt="" className="object-contain hover:scale-105 transition-transform duration-300" />
              <h1 className="text-richblack-50 font-bold text-[18px] mb-4">
                Company
              </h1>
              <div className="flex flex-col gap-3">
                {["About", "Careers", "Affiliates"].map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 hover:translate-x-1 transition-all duration-300"
                    >
                      <Link to={ele.toLowerCase()}>{ele}</Link>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 text-xl mt-4">
                <a href="#" className="hover:text-richblack-50 hover:scale-110 transition-all duration-300">
                  <FaFacebook />
                </a>
                <a href="#" className="hover:text-richblack-50 hover:scale-110 transition-all duration-300">
                  <FaGoogle />
                </a>
                <a href="#" className="hover:text-richblack-50 hover:scale-110 transition-all duration-300">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-richblack-50 hover:scale-110 transition-all duration-300">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-bold text-[18px] mb-4">
                Resources
              </h1>

              <div className="flex flex-col gap-3">
                {Resources.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 hover:translate-x-1 transition-all duration-300"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>

              <h1 className="text-richblack-50 font-bold text-[18px] mt-7 mb-4">
                Support
              </h1>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 hover:translate-x-1 transition-all duration-300">
                <Link to={"/help-center"}>Help Center</Link>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-bold text-[18px] mb-4">
                Plans
              </h1>

              <div className="flex flex-col gap-3">
                {Plans.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 hover:translate-x-1 transition-all duration-300"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <h1 className="text-richblack-50 font-bold text-[18px] mt-7 mb-4">
                Community
              </h1>

              <div className="flex flex-col gap-3">
                {Community.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 hover:translate-x-1 transition-all duration-300"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {FooterLink2.map((ele, i) => {
              return (
                <div key={i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                  <h1 className="text-richblack-50 font-bold text-[18px] mb-4">
                    {ele.title}
                  </h1>
                  <div className="flex flex-col gap-3">
                    {ele.links.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className="text-[14px] cursor-pointer hover:text-richblack-50 hover:translate-x-1 transition-all duration-300"
                        >
                          <Link to={link.link}>{link.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto pb-14 text-sm">
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    BottomFooter.length - 1 === i
                      ? ""
                      : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 hover:scale-105 transition-all duration-300"
                  } px-3`}
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center text-richblack-300 hover:text-richblack-50 transition-all duration-300">
            Made by Satyam Singh @ 2025 Brainelo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;