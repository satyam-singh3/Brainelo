import React from "react";

const Stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponenet = () => {
  return (
    <div className="bg-gradient-to-br from-richblue-900 to-richblue-800 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Stats.map((data, index) => (
            <div 
              key={index}
              className="bg-richblack-800/50 backdrop-blur-sm rounded-md p-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-richblack-800/70"
            >
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-caribbeangreen-300">
                  {data.count}
                </div>
                <div className="text-richblack-300 text-sm font-medium">
                  {data.label}
                </div>
                <div className="mt-2 w-8 h-0.5 bg-caribbeangreen-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsComponenet;