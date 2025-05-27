import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "Global-Standard Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Brainelo offers flexible, affordable, and career-focused online learning for individuals and organizations around the globe.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Industry-Aligned Curriculum",
    description:
      "Save time and money! The curriculum is designed to be easy to understand and aligned with real industry demands.",
  },
  {
    order: 2,
    heading: "Our Approach to Learning",
    description:
      "We believe learning should be practical, flexible, and deeply connected to real-world outcomes.",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Instructors can issue certificates personally through email after you finish the course.",
  },
  {
    order: 4,
    heading: "Auto-Graded Ratings",
    description:
      "Receive instant feedback with auto-graded ratings that evaluate your performance as you learn.",
  },
  {
    order: 5,
    heading: "Built for Work. Ready to Go.",
    description:
      "Our programs are built for work and ready to go equipping you with practical skills to hit the ground running in your career.",
  },
  {
    order: 6,
    heading: "24/7 Support",
    description:
      "Our dedicated support team is available 24/7 to help you with any questions or concerns.",
  },
];

const LearningGrid = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-richblack-5 mb-4 animate-slideUp">
          {LearningGridArray[0].heading}
          <HighlightText text={LearningGridArray[0].highlightText} />
        </h1>
        <p className="text-richblack-300 text-lg max-w-3xl mx-auto mb-8 animate-slideUp" style={{ animationDelay: '100ms' }}>
          {LearningGridArray[0].description}
        </p>
        <div className="flex justify-center animate-slideUp" style={{ animationDelay: '200ms' }}>
          <CTAButton active={true} linkto={LearningGridArray[0].BtnLink}>
            {LearningGridArray[0].BtnText}
          </CTAButton>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LearningGridArray.slice(1).map((item) => (
          <div className="bg-gradient-to-br from-richblue-900 to-richblue-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-richblue-800 hover:to-richblue-700">
            <h2 className="text-xl font-semibold mb-2 text-richblack-5">{item.heading}</h2>
            <p className="text-richblack-300 mb-4">{item.description}</p>
            <a
              href={item.BtnLink}
              className="text-caribbeangreen-200 hover:text-caribbeangreen-50 font-medium inline-flex items-center"
            >
              {item.BtnText}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningGrid;