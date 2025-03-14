import assets from "@/assets/assest";
import UserContext from "@/contexts/UserContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ scrollToFeature }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const { auth, setAuth } = useContext(UserContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [localStorage.getItem("token")]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null); // Update state
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-black bg-opacity-80 backdrop-blur-md border-b border-gray-700 h-[70px] px-4 md:px-10 z-50 font-[Audiowide] text-white shadow-lg">
      <div className="flex items-center">
        <img
          src={assets.logo}
          alt="logo"
          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full object-cover mr-2"
        />
        <h1 className="text-base md:text-lg font-bold">MOCKMATE AI</h1>
      </div>
      <div className="hidden md:flex gap-2">
        <button
          className="flex items-center px-3 py-1 md:px-4 md:py-2 text-sm md:text-lg border border-gray-600 rounded-lg bg-gray-900 bg-opacity-50 transition duration-300 hover:bg-gray-700"
          onClick={(e) => {
            e.preventDefault();
            const featuresSection = document.getElementById("features");
            if (featuresSection) {
              featuresSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span className="mr-2">📌</span> Features
        </button>
        <button
          className="flex items-center px-3 py-1 md:px-4 md:py-2 text-sm md:text-lg border border-gray-600 rounded-lg bg-gray-900 bg-opacity-50 transition duration-300 hover:bg-gray-700"
          onClick={(e) => {
            e.preventDefault();
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span className="mr-2">⚙️</span> About
        </button>
        {/* <button className="flex items-center px-3 py-1 md:px-4 md:py-2 text-sm md:text-lg border border-gray-600 rounded-lg bg-gray-900 bg-opacity-50 transition duration-300 hover:bg-gray-700">
          <span className="mr-2">💬</span> Docs
        </button> */}

        {/* <button className="flex items-center px-3 py-1 md:px-4 md:py-2 text-sm md:text-lg border border-gray-600 rounded-lg bg-gray-900 bg-opacity-50 transition duration-300 hover:bg-gray-700">
          <span className="mr-2">📄</span> Contact
        </button> */}
      </div>

      {/* avatar or login sign in */}
      {token ? (
        <div className="relative" ref={dropdownRef}>
          <div
            className="h-12 w-12 cursor-pointer transition-all duration-200 active:scale-95"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <img className="h-full w-full" src={currentUser?.avatar} alt="" />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg overflow-hidden transition-all duration-300">
              <ul className="py-2 text-sm">
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    navigate(`/profile/${user.id}`);
                  }}
                >
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Settings
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-4 sm:gap-8">
          <button
            className="text-white border border-white px-4 py-2 rounded-md transition duration-300 hover:bg-white hover:text-black hover:shadow-lg"
            onClick={() => {
              setAuth("login");
              navigate("/auth");
            }}
          >
            Login
          </button>
          <button
            className="bg-white text-black px-4 py-2 rounded-md transition duration-300 hover:bg-gray-500 hover:shadow-lg"
            onClick={() => {
              setAuth("signup");
              navigate("/auth");
            }}
          >
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
