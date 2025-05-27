import { useSelector } from "react-redux"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-center gap-y-4 py-4">
          <div className="w-full max-w-[450px] text-center">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5 mb-2">
              {title}
            </h1>
            <div className={`${formType === "signup" ? "h-[calc(100vh-12rem)]" : "h-[500px]"} flex items-center justify-center`}>
              {formType === "signup" ? <SignupForm /> : <LoginForm />}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Template