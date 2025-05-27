import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
// import Footer from "../components/common/Footer"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"
import ReviewSlider from "../components/common/ReviewSlider"
import Footer from "../components/common/Footer"

const About = () => {
  return (
    <div>


      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                A Journey of Growth
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
Our learning journey began by exploring various resources like YouTube tutorials, official documentation, and online articles. These materials helped us build a strong foundation in coding and web development. Drawing from this experience, we created our platform to provide structured, easy-to-follow courses so others can learn efficiently without the hassle of searching through scattered resources.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
Our website is an online learning platform designed to connect students with expert tutors through video-based courses. It offers a flexible and accessible way for learners to enroll, study at their own pace, and build valuable skills. With a user-friendly interface and quality content, we aim to make education convenient and effective for everyone, anywhere.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
Driven by the vision to make learning more accessible and effective, this platform was created to transform the way people acquire new skills. It combines advanced technology with a simple, intuitive design to offer engaging courses that anyone can access anytime, anywhere, making learning easy and flexible.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
              Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Our mission is more than just offering online courses. We aim to build a lively community where learners can connect, share ideas, and support each other. We believe learning is stronger when people collaborate, so we encourage this through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <div className="h-[1px] w-full bg-white/20"></div>
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        {/* <ReviewSlider /> */}
        <ReviewSlider />
      </div>
      {/* <Footer /> */}
      <Footer />
    </div>
  )
}

export default About