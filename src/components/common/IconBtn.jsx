export default function IconBtn({
    text,
    onclick,
    children,
    disabled,
    outline = false,
    customClasses,
    type,
  }) {
    return (
      <button
        disabled={disabled}
        onClick={onclick}
        className={`flex items-center justify-center ${
          outline
            ? "border-2 border-yellow-50 bg-transparent hover:bg-yellow-50/10"
            : "bg-gradient-to-r from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200"
        } cursor-pointer gap-x-2 rounded-lg py-2.5 px-6 font-semibold text-richblack-900 
        transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_12px_rgba(255,214,10,0.3)] 
        active:scale-[0.98] ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : "transform"
        } ${customClasses}`}
        type={type}
      >
        {children ? (
          <>
            <span className={`${
              outline 
                ? "text-yellow-50 group-hover:text-richblack-900" 
                : "text-richblack-900"
            } transition-colors duration-200`}>{text}</span>
            <span className={`${
              outline 
                ? "text-yellow-50 group-hover:text-richblack-900" 
                : "text-richblack-900"
            } transition-colors duration-200`}>
              {children}
            </span>
          </>
        ) : (
          <span className={`${
            outline 
              ? "text-yellow-50 hover:text-richblack-900" 
              : "text-richblack-900"
          } transition-colors duration-200`}>{text}</span>
        )}
      </button>
    )
  }