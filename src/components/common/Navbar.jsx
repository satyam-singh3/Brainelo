import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import logo from "../../assets/Logo/Brainelo_logo2.png"
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiconnector"
import { categories } from "../../services/apis"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../core/Auth/ProfileDropDown"

function Navbar() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location = useLocation()

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        setSubLinks(res.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [])

  // console.log("sub links", subLinks)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div className={`sticky top-0 z-50 flex h-16 items-center justify-center border-b border-richblack-700 bg-richblack-800/95 backdrop-blur-sm transition-all duration-300 ${location.pathname !== "/" ? "shadow-lg" : ""}`}>
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/" className="hover:scale-105 transition-transform duration-300">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-8 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="group relative">
                    <div className={`flex cursor-pointer items-center gap-1 transition-all duration-200 ${
                      matchRoute("/catalog/:catalogName") ? "text-yellow-25" : "text-richblack-25 hover:text-yellow-25"
                    }`}>
                      <p>{link.title}</p>
                      <BsChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
                    </div>
                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-xl bg-richblack-5 p-4 text-richblack-900 opacity-0 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : (subLinks && subLinks.length) ? (
                        <>
                          {subLinks
                            ?.filter((subLink) => subLink?.courses?.length > 0)
                            ?.map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                                className="rounded-lg bg-transparent py-3 pl-4 transition-all duration-200 hover:bg-richblack-50 hover:translate-x-1"
                                key={i}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))}
                        </>
                      ) : (
                        <p className="text-center">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p className={`transition-all duration-200 hover:text-yellow-25 ${
                      matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"
                    }`}>
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className="flex items-center gap-x-4">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100 transition-all duration-200 hover:text-yellow-25" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-yellow-25 text-[12px] font-bold text-richblack-900">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-lg border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 transition-all duration-200 hover:bg-richblack-700">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-lg border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 transition-all duration-200 hover:bg-richblack-700">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  )
}

export default Navbar