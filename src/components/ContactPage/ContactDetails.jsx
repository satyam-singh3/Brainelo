import React from "react"
import * as Icon1 from "react-icons/bi"
import * as Icon3 from "react-icons/hi2"
import * as Icon2 from "react-icons/io5"

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat on us",
    description: "Our friendly team is here to help.",
    details: "info@Brainelo.com",
  },
  {
    icon: "BiWorld",
    heading: "Visit us",
    description: "Come and say hello at our office HQ.",
    details: "XYZ Building, 2nd Floor, Vishal Khand, Lucknow-445010",
  },
  {
    icon: "IoCall",
    heading: "Call us",
    description: "Mon - Fri From 8am to 5pm",
    details: "+123 456 7869",
  },
]

const ContactDetails = () => {
  return (
    <div className="grid gap-6 rounded-2xl bg-gradient-to-br from-indigo-900 to-purple-900 p-6 shadow-xl">
      {contactDetails.map((ele, i) => {
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon]
        return (
          <div key={i} className="group flex items-start gap-4 rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/10">
            <div className="rounded-full bg-white/10 p-3 group-hover:bg-white/20">
              <Icon size={24} className="text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-white">{ele.heading}</h3>
              <p className="text-sm text-white/80">{ele.description}</p>
              <p className="text-sm font-medium text-white/90">{ele.details}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ContactDetails