import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`relative group text-center text-sm sm:text-base px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 ${
          active 
            ? "bg-gradient-to-r from-caribbeangreen-300 to-caribbeangreen-200 text-richblack-900 shadow-lg shadow-caribbeangreen-300/20 hover:shadow-xl hover:shadow-caribbeangreen-300/30" 
            : "bg-richblack-800 text-richblack-5 border border-richblack-700 hover:bg-richblack-700"
        } hover:scale-[1.02] active:scale-[0.98]`}
      >
        <span className="relative z-10">{children}</span>
        {active && (
          <div className="absolute inset-0 bg-gradient-to-r from-caribbeangreen-300 to-caribbeangreen-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:blur-md"></div>
        )}
      </div>
    </Link>
  );
};

export default Button;