import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from "../../../components/core/HomePage/Button";
import language1 from "../../../assets/Images/language1.svg";
import language2 from "../../../assets/Images/language2.svg";
import chat_bot from "../../../assets/Images/chat_bot.svg";

const LearningLanguageSection = () => {
  return (
    <div className="relative">
      <div className="text-4xl font-semibold text-center my-10 text-richblack-5">
        Your swiss knife for
        <HighlightText text={"learning any language"} />
        <div className="text-center text-richblack-200 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
          Using spin making learning multiple languages easy. with 20+
          languages realistic voice-over, progress tracking, custom schedule
          and more.
        </div>
        
        {/* Images Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center mt-20 lg:mt-24 gap-16 lg:gap-10">
          {/* Image 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-caribbeangreen-500/30 via-caribbeangreen-300/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-richblack-900/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <img
              src={language1}
              alt="learning language1"
              className="object-contain w-[320px] lg:w-[480px] lg:-mr-24 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(0,255,255,0.4)]"
            />
          </div>

          {/* Image 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-caribbeangreen-500/30 via-caribbeangreen-300/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-richblack-900/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <img
              src={language2}
              alt="learning language2"
              className="object-contain w-[320px] lg:w-[480px] lg:-mb-20 lg:-mt-0 -mt-8 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(0,255,255,0.4)]"
            />
          </div>

          {/* Image 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-caribbeangreen-500/30 via-caribbeangreen-300/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-richblack-900/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <img
              src={chat_bot}
              alt="chat_bot"
              className="object-contain w-[320px] lg:w-[480px] lg:-ml-24 lg:-mt-8 -mt-8 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(0,255,255,0.4)]"
            />
          </div>
        </div>
      </div>

      {/* Button Container */}
      <div className="w-fit mx-auto lg:mb-20 mb-12 mt-32">
        <CTAButton active={true} linkto={"/signup"} px-3>
          <div className="flex items-center gap-2 px-3 py-2 text-base">
            Learn More
          </div>
        </CTAButton>
      </div>
    </div>
  )
}

export default LearningLanguageSection