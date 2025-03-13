import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Card = ({ user }) => {
  const navigate = useNavigate();

  // Hardcoded Data
  const totalInterviews = 20;
  const interviewsByTopic = [
    { topic: "DSA", count: 7 },
    { topic: "Web Dev", count: 5 },
    { topic: "AI/ML", count: 3 },
    { topic: "System", count: 5 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 mt-20 md:mt-10">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl">
        {/* Dashboard Title */}
        <h2 className="text-center text-xl font-semibold text-gray-800">
          Dashboard: {user.username}
        </h2>

        {/* Total Interviews Info */}
        <p className="text-center text-gray-600 mt-1">
          Total Interviews Done:{" "}
          <span className="text-indigo-600 font-bold">{totalInterviews}</span>
        </p>

        {/* User Profile */}
        <div className="flex flex-col items-center mt-5 bg-gray-50 p-5 rounded-lg shadow-md">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-20 h-20 rounded-full border-4 border-indigo-500 shadow-md"
          />
          <h1 className="mt-3 text-lg font-bold text-gray-800">
            {user.username?.charAt(0).toUpperCase() + user.username.slice(1) ||
              "Guest"}
          </h1>
          <p className="text-gray-500 text-sm">{user.email}</p>
          <button
            className="mt-3 px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition-all duration-200"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              navigate("/");
            }}
          >
            Log Out
          </button>
        </div>

        {/* Chart: Interviews by Topic */}
        <div className="bg-white mt-6 p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-semibold text-gray-700 text-center mb-3">
            Interviews by Topic
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={interviewsByTopic}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="topic" stroke="#333" />
              <YAxis stroke="#333" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Card;
