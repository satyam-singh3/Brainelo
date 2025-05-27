export default function Tab({ tabData, field, setField }) {
    return (
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max shadow-[0_0_20px_rgba(0,0,0,0.1)] backdrop-blur-sm">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setField(tab.type)}
            className={`${
              field === tab.type
                ? "bg-gradient-to-r from-caribbeangreen-300 to-caribbeangreen-200 text-richblack-900 font-semibold shadow-[0_0_10px_rgba(0,255,0,0.2)]"
                : "bg-transparent text-richblack-200 hover:text-richblack-5 hover:bg-richblack-700/50"
            } py-2 px-5 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105`}
          >
            {tab?.tabName}
          </button>
        ))}
      </div>
    );
  }