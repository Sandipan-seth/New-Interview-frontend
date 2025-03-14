import React, { useContext, useEffect } from "react";
import { Particles } from "../ui/particles";
import { useNavigate } from "react-router-dom";
import { ScrollProgress } from "../magicui/scroll-progress";
import UserContext from "@/contexts/UserContext";
import Features from "../Features/Feature";
import Heroimage from "../Heroimage/Heroimage";
import { TerminalDemo } from "../Terminal/Terminal";
import {
  FaUserFriends,
  FaTachometerAlt,
  FaChartBar,
  FaBalanceScale,
} from "react-icons/fa";

const Background = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const navigate = useNavigate();
  const cardData = [
    {
      title: "User Friendly",
      icon: <FaUserFriends />,
      description:
        "Our platform is designed with simplicity in mind, ensuring a smooth and intuitive user experience.",
    },
    {
      title: "Performance",
      icon: <FaTachometerAlt />,
      description:
        "Experience blazing-fast speed and optimized performance for seamless operations at all times.",
    },
    {
      title: "Statistic Chart",
      icon: <FaChartBar />,
      description:
        "Visualize key insights with real-time data analytics and interactive statistic charts.",
    },
    {
      title: "Proportion",
      icon: <FaBalanceScale />,
      description:
        "We maintain a perfect balance of features, ensuring efficiency and effectiveness in every aspect.",
    },
  ];

  return (
    <>
      <ScrollProgress className="top-[75px]" />

      <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 space-y-6">
        {/* Hero Section */}
        <h1 className="text-2xl md:text-7xl font-bold text-white leading-tight">
          Ace Your Next <span className="text-[#38BDF8]">Interview</span> with
          AI-Powered Mock Sessions
        </h1>

        <p className="text-lg md:text-5xl text-gray-200 max-w-3xl">
          Practice, Improve, Succeed.....
        </p>

        <button
          className="mt-4 border border-white bg-black/50 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-[#38BDF8] hover:shadow-xl"
          onClick={() => {
            if (localStorage.getItem("token")) {
              const featuresSection = document.getElementById("features");
              if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: "smooth" });
              }
            } else {
              navigate("/auth");
            }
          }}
        >
          Get Started for Free
        </button>
      </div>

      {/* Features Section */}
      <Features />

      {/* Terminal Demo */}
      <div className="w-full flex justify-center items-center min-h-screen">
        <TerminalDemo />
      </div>

      {/* About Section */}

      <section
        className="w-full flex flex-col justify-center items-center"
        id="about"
      >
        <h2 className="text-3xl font-bold text-white mb-10">
          Why People Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 
                       hover:border-blue-500 hover:shadow-blue-500/50 transition-all duration-300
                       flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="text-5xl text-blue-400 mb-4">{card.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image section */}
      <div className="relative">
        <Heroimage />
      </div>
    </>
  );
};

export default Background;
