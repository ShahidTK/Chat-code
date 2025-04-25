import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SunIcon, MoonIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { CodeBracketIcon, ChatBubbleLeftIcon, RectangleGroupIcon, VideoCameraIcon } from '@heroicons/react/24/solid';


const Navbar = () => {
        const [darkMode, setDarkMode] = useState(false);
     const navigate = useNavigate();
      const [isLogin, setIsLogin] = useState(false);

      const handleLoginClick = () => {
        console.log("isLogin: ", isLogin)
        navigate("/login"); // Redirect to the Login Page
      };
  return (
    <div>
       <nav className="bg-white fixed w-full z-10 border-b border-gray-200">
  <div className="px-2">
    <div className="flex items-center justify-between h-16">
      <div>
        <span className="text-black font-bold text-xl">Code n Chat</span>
      </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-black-300 hover:text-white"
              >
                {darkMode ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </button>

              <button className="text-black-300 hover:text-white">
                <Cog6ToothIcon className="h-6 w-6" />
              </button>
              {/* Profile Section */}
              {isLogin ? (
                <div className="flex items-center space-x-4">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                    {/* <span className="text-white text-sm">{user?.name[0]}</span> Show first letter of name */}
                  </div>
                 
                </div>
              ) : (
                <button
                  onClick={handleLoginClick}
                  className="text-white px-4 py-2 rounded bg-green-600 hover:bg-green-700"
                >
                  Log In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
