import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import CountryCode from "../../data/countrycode.json"
import { apiConnector } from "../../services/apiconnector"
import { contactusEndpoint } from "../../services/apis"

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm()

  const submitContactForm = async (data) => {
    try {
      setLoading(true)
      await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data)
      setLoading(false)
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: "", firstname: "", lastname: "", message: "", phoneNo: "" })
    }
  }, [reset, isSubmitSuccessful])

  return (
    <div className="max-w-[500px] w-11/12 mx-auto rounded-xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-5 shadow-2xl">
      <form onSubmit={handleSubmit(submitContactForm)} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-white/90">First Name</label>
            <input
              type="text"
              {...register("firstname", { required: true })}
              className="w-full rounded-lg bg-white/5 px-3 py-2 text-white placeholder-white/50 outline-none transition-all duration-200 focus:bg-white/10 focus:ring-2 focus:ring-caribbeangreen-500"
              placeholder="Enter first name"
            />
            {errors.firstname && <span className="text-sm text-red-400">Please enter your name</span>}
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-white/90">Last Name</label>
            <input
              type="text"
              {...register("lastname")}
              className="w-full rounded-lg bg-white/5 px-3 py-2 text-white placeholder-white/50 outline-none transition-all duration-200 focus:bg-white/10 focus:ring-2 focus:ring-caribbeangreen-500"
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-white/90">Email Address</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full rounded-lg bg-white/5 px-3 py-2 text-white placeholder-white/50 outline-none transition-all duration-200 focus:bg-white/10 focus:ring-2 focus:ring-caribbeangreen-500"
            placeholder="Enter email address"
          />
          {errors.email && <span className="text-sm text-red-400">Please enter your email address</span>}
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-white/90">Phone Number</label>
          <div className="flex gap-2">
            <select
              {...register("countrycode")}
              className="w-20 rounded-lg bg-black/80 px-2 py-2 text-white outline-none transition-all duration-200 focus:bg-black/90 focus:ring-2 focus:ring-caribbeangreen-500"
            >
              {CountryCode.map((code, i) => (
                <option key={i} value={code.code} className="bg-blue-900">
                  {code.code} - {code.country}
                </option>
              ))}
            </select>
            <input
              type="tel"
              {...register("phoneNo", { required: true })}
              className="flex-1 rounded-lg bg-white/5 px-3 py-2 text-white placeholder-white/50 outline-none transition-all duration-200 focus:bg-white/10 focus:ring-2 focus:ring-caribbeangreen-500"
              placeholder="12345 67890"
            />
          </div>
          {errors.phoneNo && <span className="text-sm text-red-400">Please enter your phone number</span>}
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-white/90">Message</label>
          <textarea
            {...register("message", { required: true })}
            className="h-20 w-full rounded-lg bg-white/5 px-3 py-2 text-white placeholder-white/50 outline-none transition-all duration-200 focus:bg-white/10 focus:ring-2 focus:ring-caribbeangreen-500"
            placeholder="Enter your message here"
          />
          {errors.message && <span className="text-sm text-red-400">Please enter your message</span>}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-gradient-to-r from-caribbeangreen-500 to-caribbeangreen-400 px-6 py-2.5 text-center text-[13px] font-bold text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] transition-all duration-200 hover:scale-95 hover:shadow-none disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactUsForm