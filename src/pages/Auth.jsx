import React, { useState } from "react";
import assets from "../assets/assest";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center px-4 md:px-10 relative"
      style={{ backgroundImage: `url(${assets.bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Auth Card */}
      <div className="relative z-10 bg-gray-500 bg-opacity-30 backdrop-blur-lg p-6 md:p-8 rounded-xl shadow-xl w-full max-w-sm md:max-w-md lg:max-w-lg">
        <h5 className="text-start text-gray-500 mb-6">
          {isSignUp ? "LET'S GET YOU STARTED" : "WELCOME BACK"}
        </h5>
        <h2 className="text-2xl md:text-3xl font-bold text-start text-white mb-6">
          {isSignUp ? "Create an Account" : "Log In to Your Account"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-white bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-white bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-white bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
          />

          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-white bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
            />
          )}

          {/* Remember Me & Forgot Password */}
          {!isSignUp && (
            <div className="flex flex-row justify-between items-center text-white text-sm">
              <label className="flex items-center mb-2 md:mb-0">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="mr-2 accent-blue-500"
                />
                Remember Me
              </label>
              <a href="#" className="text-blue-300 hover:underline">
                Forgot Password??
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Toggle Option */}
        <p className="text-center text-white mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            className="text-blue-400 cursor-pointer hover:underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
