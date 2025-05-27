import React from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <div
      className={`w-[360px] lg:w-[30%] transition-all duration-300 ${
        currentCard === cardData?.heading
          ? "ring-2 ring-yellow-50 ring-offset-4 ring-offset-richblack-900"
          : "hover:ring-1 hover:ring-yellow-50/50"
      } bg-richblack-800 text-richblack-25 h-[300px] rounded-2xl overflow-hidden cursor-pointer group relative`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-richblack-800 to-richblack-900 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="h-[80%] p-8 flex flex-col gap-4">
          <div className="font-bold text-[22px] text-yellow-50 group-hover:text-white transition-colors duration-300">
            {cardData?.heading}
          </div>

          <div className="text-richblack-300 text-sm leading-relaxed group-hover:text-richblack-100 transition-colors duration-300">
            {cardData?.description}
          </div>
        </div>

        <div className="mt-auto px-8 py-6 bg-richblack-700/50 backdrop-blur-sm border-t border-richblack-600/30">
          <div className="flex justify-between items-center">
            {/* Level */}
            <div className="flex items-center gap-2 text-[16px] text-yellow-50 group-hover:text-white transition-colors duration-300">
              <HiUsers className="text-lg" />
              <p>{cardData?.level}</p>
            </div>

            {/* Flow Chart */}
            <div className="flex items-center gap-2 text-[16px] text-yellow-50 group-hover:text-white transition-colors duration-300">
              <ImTree className="text-lg" />
              <p>{cardData?.lessionNumber} Lession</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;