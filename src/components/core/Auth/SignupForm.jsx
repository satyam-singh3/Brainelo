import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "../../../slices/authSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"
import Tab from "../../common/Tab"

function SignupForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // student or instructor
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { firstName, lastName, email, password, confirmPassword } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData,
      accountType,
    }

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate))

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setAccountType(ACCOUNT_TYPE.STUDENT)
  }

  // data to pass to Tab component
  const tabData = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[500px] space-y-8">
        {/* Account Type Selection */}
        <div className="flex justify-center">
          <Tab
            tabData={tabData}
            field={accountType}
            setField={setAccountType}
          />
        </div>

        {/* Form Section */}
        <form onSubmit={handleOnSubmit} className="space-y-6 bg-richblack-800/50 backdrop-blur-sm rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-richblack-5 text-base font-medium block text-left">
                First Name <sup className="text-pink-200">*</sup>
              </label>
              <input
                required
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleOnChange}
                placeholder="Enter first name"
                className="w-full px-4 py-3 rounded-lg bg-richblack-700 border border-richblack-600 text-richblack-5 focus:outline-none focus:ring-2 focus:ring-caribbeangreen-300 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label className="text-richblack-5 text-base font-medium block text-left">
                Last Name <sup className="text-pink-200">*</sup>
              </label>
              <input
                required
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleOnChange}
                placeholder="Enter last name"
                className="w-full px-4 py-3 rounded-lg bg-richblack-700 border border-richblack-600 text-richblack-5 focus:outline-none focus:ring-2 focus:ring-caribbeangreen-300 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-richblack-5 text-base font-medium block text-left">
              Email Address <sup className="text-pink-200">*</sup>
            </label>
            <input
              required
              type="text"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email address"
              className="w-full px-4 py-3 rounded-lg bg-richblack-700 border border-richblack-600 text-richblack-5 focus:outline-none focus:ring-2 focus:ring-caribbeangreen-300 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 relative">
              <label className="text-richblack-5 text-base font-medium block text-left">
                Create Password <sup className="text-pink-200">*</sup>
              </label>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-lg bg-richblack-700 border border-richblack-600 text-richblack-5 focus:outline-none focus:ring-2 focus:ring-caribbeangreen-300 focus:border-transparent transition-all duration-200 pr-12"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[42px] cursor-pointer text-richblack-300 hover:text-richblack-5 transition-colors duration-200"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={20} />
                ) : (
                  <AiOutlineEye fontSize={20} />
                )}
              </span>
            </div>

            <div className="space-y-2 relative">
              <label className="text-richblack-5 text-base font-medium block text-left">
                Confirm Password <sup className="text-pink-200">*</sup>
              </label>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-lg bg-richblack-700 border border-richblack-600 text-richblack-5 focus:outline-none focus:ring-2 focus:ring-caribbeangreen-300 focus:border-transparent transition-all duration-200 pr-12"
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-[42px] cursor-pointer text-richblack-300 hover:text-richblack-5 transition-colors duration-200"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={20} />
                ) : (
                  <AiOutlineEye fontSize={20} />
                )}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-caribbeangreen-300 text-richblack-900 font-semibold rounded-lg hover:bg-caribbeangreen-200 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-caribbeangreen-300 focus:ring-offset-2 focus:ring-offset-richblack-800"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignupForm