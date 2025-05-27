import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const TimeLine = [
    {
      Logo: Logo1,
      Heading: "Leadership",
      Description: "Fully committed to the success company",
    },
    {
      Logo: Logo2,
      Heading: "Responsibility",
      Description: "Students will always be our top priority",
    },
    {
      Logo: Logo3,
      Heading: "Flexibility",
      Description: "The ability to switch is an important skills",
    },
    {
      Logo: Logo4,
      Heading: "Solve the problem",
      Description: "Code your way to a solution",
    },
  ];

const TimelineSection = () => {
  return (
    <div className="relative bg-richblack-900 py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-richblack-800 to-richblack-900 opacity-50"></div>
      
      {/* Content Container */}
      <div className="relative max-w-maxContent mx-auto px-4 lg:px-8">
        {/* Stats Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-16">
          <div className="flex flex-col items-center p-8 rounded-xl bg-gradient-to-br from-caribbeangreen-700 to-caribbeangreen-500 text-white shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300 group">
            <h1 className="text-5xl font-bold group-hover:text-caribbeangreen-300 transition-colors duration-300">10</h1>
            <h2 className="text-caribbeangreen-300 text-lg group-hover:text-white transition-colors duration-300">Years Experience</h2>
          </div>
          <div className="flex flex-col items-center p-8 rounded-xl bg-gradient-to-br from-caribbeangreen-700 to-caribbeangreen-500 text-white shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300 group">
            <h1 className="text-5xl font-bold group-hover:text-caribbeangreen-300 transition-colors duration-300">250</h1>
            <h2 className="text-caribbeangreen-300 text-lg group-hover:text-white transition-colors duration-300">Types of Courses</h2>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TimeLine.map((ele, i) => {
            return (
              <div 
                className="group relative p-6 rounded-xl bg-richblack-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-richblack-800/70 hover:scale-105"
                key={i}
              >
                <div className="flex gap-6 items-center">
                  <div className="w-[60px] h-[60px] bg-white rounded-full flex justify-center items-center shadow-[0_0_20px_rgba(0,255,255,0.2)] group-hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300">
                    <img src={ele.Logo} alt="" className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-xl text-richblack-5 group-hover:text-caribbeangreen-300 transition-colors duration-300">
                      {ele.Heading}
                    </h2>
                    <p className="text-base text-richblack-300 group-hover:text-richblack-5 transition-colors duration-300">
                      {ele.Description}
                    </p>
                  </div>
                </div>
                {/* Decorative Line */}
                {i < TimeLine.length - 1 && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0.5 h-8 bg-gradient-to-b from-caribbeangreen-300 to-transparent opacity-50"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;