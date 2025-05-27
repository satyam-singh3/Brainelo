// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import Read from "../assets/Images/Read.svg"
// Component Imports
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/TimelineSection"

function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white pt-24 pb-16">
        {/* Main Content with GIF */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
          {/* Content Section */}
          <div className="flex flex-col items-center lg:items-start lg:w-[45%]">
            {/* Heading */}
            <div className="text-center lg:text-left text-4xl font-semibold text-richblack-5">
            Shape your future through
              <HighlightText text={"Coding"} />
            </div>

            {/* Sub Heading */}
            <div className="mt-4 w-[90%] text-center lg:text-left text-lg font-medium text-richblack-200">
            Our online coding courses are designed to fit your schedule. Learn whenever and wherever it works best for you. Each course includes hands-on projects, fun quizzes, and helpful feedback from real instructors — so you can build real skills, step by step.
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-center gap-8">
              <div className="flex flex-row gap-7">
                <CTAButton active={true} linkto={"/signup"}>
                  Learn More
                </CTAButton>
                <CTAButton active={false} linkto={"/login"}>
                  Book a Demo
                </CTAButton>
              </div>
              <Link to={"/signup"}>
                <div className="group w-fit rounded-full bg-richblack-800 p-1 font-bold text-caribbeangreen-300 drop-shadow-[0_1.5px_rgba(0,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
                  <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                    <p>Become an Instructor</p>
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* SVG Section */}
          <div className="w-full lg:w-[40%]">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-richblack-800 to-richblack-900 p-1 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={Read} 
                  alt="Learning Experience" 
                  className="w-full h-auto max-h-[400px] object-contain transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-richblack-900/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>



        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%] text-richblack-5">
                Begin
                <HighlightText text={" coding right away"} />
              </div>
            }
            subheading={
              <div className="text-richblack-200">
                Try it out — you'll start writing real code from your very first lesson with our hands-on learning platform.</div>
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-richblack-900">
        <div className=" h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] text-richblack-5">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px] text-richblack-200">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-[1px] bg-richblack-100/20"></div>

      {/* Section 3 */}
      <div className="relative mx-auto my-4 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8 text-richblack-5">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home