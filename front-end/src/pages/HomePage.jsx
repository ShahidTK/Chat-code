// src/components/HomePage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SunIcon, MoonIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { CodeBracketIcon, ChatBubbleLeftIcon, RectangleGroupIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import { useAuthStore } from "../store/useAuthStore";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const { login, isLoggingIn } = useAuthStore();
  const [isLogin, setIsLogin] = useState(false);  // Add state to track login status
  const [user, setUser] = useState(null); // To hold user data

  // useEffect(() => {
  //   // Check if user is logged in (e.g., from localStorage)
  //   const storedUser = JSON.parse(localStorage.getItem("user"));
  //   if (storedUser) {
  //     setIsLogin(true);
  //     setUser(storedUser); // Set user data from localStorage or context
  //   }
  // }, []);

  
  console.log(user)
  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar/> 

      {/* Hero Section */}
      <main className="pt-20 pb-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-col items-center">
        <div className="py-5 mb-12 text-center">
  <h1 className={`pt-10 text-7xl font-extrabold leading-tight ${darkMode ? "text-gray-100" : "text-blue-900"} mb-4`}>
  Code Together. 
  <br />
  Build Better.
  </h1>
  <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"} max-w-3xl mx-auto`}>
    <span className="font-bold text-xl block mb-3">
    A real-time collaborative coding platform with an integrated code editor and live chat. Perfect for remote teams, mentors, and peer programmers.    </span>
   
  </p>
</div>
              <div>
          
               
                <button className="bg-green-600 text-xl bold border px-3 py-2 rounded-md shadow-2xl text-white w-auto hover:bg-green-700 cursor-pointer flex items-center justify-center" onClick={() => navigate(`/codeEditor`)}>
                  Start new session
                </button>
              </div>
          
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#232F3E] mt-12 py-6 fixed bottom-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Code n Chat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
