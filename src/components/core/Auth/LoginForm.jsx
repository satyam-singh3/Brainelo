import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../../services/operations/authAPI"

function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className="space-y-6 bg-richblack-800/50 backdrop-blur-sm rounded-xl shadow-lg p-8"
    >
      <div className="space-y-2">
        <label className="text-richblack-5 text-base font-bold block text-left">
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

      <div className="space-y-2 relative">
        <label className="text-richblack-5 text-base font-bold block text-left">
          Password <sup className="text-pink-200">*</sup>
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

      <div className="flex justify-end">
        <p className="text-sm text-blue-100 cursor-pointer hover:text-blue-50 transition-all duration-200">
          Forgot Password?
        </p>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-caribbeangreen-300 text-richblack-900 font-semibold rounded-lg hover:bg-caribbeangreen-200 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-caribbeangreen-300 focus:ring-offset-2 focus:ring-offset-richblack-800"
      >
        Sign In
      </button>
    </form>
  )
}

export default LoginForm