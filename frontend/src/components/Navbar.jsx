import React, { useEffect, useMemo, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { Menu, Sparkles, X } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/photographers", label: "Photographers" },
  { to: "/event-booking", label: "Book Event" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const profileLinks = [
  { to: "/my-profile", label: "My Profile" },
  { to: "/my-appointments", label: "My Appointments" },
  { to: "/my-event-bookings", label: "My Event Bookings" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [sessionActive, setSessionActive] = useState(() =>
    Boolean(localStorage.getItem("photistaSession") || localStorage.getItem("userProfile"))
  );
  const [profileImage, setProfileImage] = useState(assets.profile_pic);
  const profileRef = useRef(null);

  const activeLabel = useMemo(() => {
    const current = navItems.find((item) =>
      item.to === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(item.to)
    );
    return current?.label || "Home";
  }, [location.pathname]);

  useEffect(() => {
    const loadProfileState = () => {
      const savedProfile = JSON.parse(localStorage.getItem("userProfile") || "null");
      setProfileImage(savedProfile?.photo || assets.profile_pic);
      setSessionActive(
        Boolean(localStorage.getItem("photistaSession") || savedProfile)
      );
    };

    loadProfileState();
    window.addEventListener("storage", loadProfileState);

    return () => window.removeEventListener("storage", loadProfileState);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProfileOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("photistaSession");
    setSessionActive(false);
    setProfileOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/72 backdrop-blur-xl">
      <div className="app-page">
        <div className="app-surface mt-4 flex items-center justify-between gap-4 rounded-[30px] px-4 py-4 sm:px-6">
          <button
            type="button"
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 text-left"
          >
            <img className="w-36 sm:w-40" src={assets.logo} alt="Photista" />
            <div className="hidden rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary lg:inline-flex">
              Curated photography booking
            </div>
          </button>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-primary text-white shadow-[0_16px_30px_rgba(95,111,255,0.24)]"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-500 sm:inline-flex">
              Viewing: {activeLabel}
            </div>

            {sessionActive ? (
              <div className="relative" ref={profileRef}>
                <button
                  type="button"
                  onClick={() => setProfileOpen((value) => !value)}
                  className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-2 py-2 shadow-sm"
                >
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={profileImage}
                    alt="Profile"
                  />
                  <span className="hidden text-sm font-medium text-slate-700 sm:inline">
                    Account
                  </span>
                </button>

                {profileOpen ? (
                  <div className="app-surface absolute right-0 top-[calc(100%+12px)] w-64 rounded-[26px] p-3">
                    <div className="space-y-1">
                      {profileLinks.map((item) => (
                        <button
                          key={item.to}
                          type="button"
                          onClick={() => navigate(item.to)}
                          className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
                        >
                          {item.label}
                          <span className="text-slate-400">→</span>
                        </button>
                      ))}
                    </div>
                    <div className="mt-3 border-t border-slate-100 pt-3">
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium text-rose-600 hover:bg-rose-50"
                      >
                        Logout
                        <span>↗</span>
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => navigate("/auth")}
                  className="app-button-secondary hidden sm:inline-flex"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/auth")}
                  className="app-button-primary"
                >
                  <Sparkles size={16} />
                  Create account
                </button>
              </>
            )}

            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="app-surface mt-4 rounded-[28px] p-4 lg:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              {sessionActive ? (
                <>
                  {profileLinks.map((item) => (
                    <button
                      key={item.to}
                      type="button"
                      onClick={() => navigate(item.to)}
                      className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      {item.label}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-rose-600 hover:bg-rose-50"
                  >
                    Logout
                  </button>
                </>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Navbar;
