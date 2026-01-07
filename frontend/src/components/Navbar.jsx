import React, { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { EllipsisVertical } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(assets.profile_pic);
  const [token, setToken] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setShowProfileMenu(false);
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const loadProfileImage = () => {
      const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
      if (savedProfile?.photo) {
        setProfileImage(savedProfile.photo);
      }
    };

    loadProfileImage();

    // 🔁 Listen for profile updates from other tabs/pages
    window.addEventListener("storage", loadProfileImage);

    return () => {
      window.removeEventListener("storage", loadProfileImage);
    };
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      setToken(false);
      setShowProfileMenu(false);
      setShowMobileMenu(false);
      navigate("/");
      scrollTo(top);
    }
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* Logo */}
      <img
        onClick={() => {
          navigate("/");
          scrollTo(0, 0);
        }}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="logo"
      />

      {/* Navigation Links */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/photographers">
          <li className="py-1">ALL PHOTOGRAPHERS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/event-booking">
          <li className="py-1">BOOK EVENT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-3 relative">
        {token ? (
          <>
            {/* Profile Icon */}
            <div
              ref={profileRef}
              className="flex items-center gap-2 cursor-pointer group relative"
              onClick={(e) => {
                e.stopPropagation();
                setShowProfileMenu(!showProfileMenu);
                setShowMobileMenu(false);
              }}
            >
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={profileImage}
                alt="profile"
              />

              <img
                className="w-2.5 hidden md:block"
                src={assets.dropdown_icon}
                alt="dropdown"
              />

              {/* Desktop Dropdown */}
              <div
                className={`absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 
                            ${
                              showProfileMenu ? "block" : "hidden"
                            } md:hidden md:group-hover:block`}
              >
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p
                    onClick={() => {
                      navigate("my-profile");
                      setShowProfileMenu(false);
                      setShowMobileMenu(false);
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => {
                      navigate("my-appointments");
                      setShowProfileMenu(false);
                      setShowMobileMenu(false);
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={() => {
                      navigate("my-event-bookings");
                      setShowProfileMenu(false);
                      setShowMobileMenu(false);
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    My Event Bookings
                  </p>
                  <p
                    onClick={handleLogout}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Ellipsis Menu Button */}
            <button
              ref={mobileMenuRef}
              onClick={(e) => {
                e.stopPropagation();
                setShowMobileMenu(!showMobileMenu);
                setShowProfileMenu(false);
              }}
              className="md:hidden"
            >
              <EllipsisVertical className="w-6 h-6 text-gray-700" />
            </button>

            {/* Mobile Dropdown Menu */}
            {showMobileMenu && (
              <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg w-48 p-4 flex flex-col gap-3 text-sm z-30 md:hidden">
                <p
                  onClick={() => navigate("/")}
                  className="cursor-pointer hover:text-primary"
                >
                  HOME
                </p>
                <p
                  onClick={() => navigate("photographers")}
                  className="cursor-pointer hover:text-primary"
                >
                  ALL PHOTOGRAPHERS
                </p>
                <p
                  onClick={() => navigate("event-booking")}
                  className="cursor-pointer hover:text-primary"
                >
                  BOOK EVENT
                </p>
                <p
                  onClick={() => navigate("about")}
                  className="cursor-pointer hover:text-primary"
                >
                  ABOUT
                </p>
                <p
                  onClick={() => navigate("contact")}
                  className="cursor-pointer hover:text-primary"
                >
                  CONTACT
                </p>
              </div>
            )}
          </>
        ) : (
          <button
            onClick={() => navigate("/auth")}
            className="cursor-pointer bg-primary text-white px-4 py-2 md:px-6 md:py-2 rounded-full font-light hover:bg-primary/90"
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
