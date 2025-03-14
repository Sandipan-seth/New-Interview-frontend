import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "@/contexts/UserContext";
import { ArrowLeft } from "lucide-react";
import { useInterview } from "@/hooks/useInterview";

const Chat = () => {
  const navigate = useNavigate();
  const { userid } = useParams();
  const {
    course,
    setCourse,
    level,
    setLevel,
    questions,
    setQuestions,
    difficulty,
    setDifficulty,
  } = useContext(UserContext);


  const { isPending, isSuccess, error, mutateAsync } = useInterview();
  
  async function handleclick() {
    const data = await mutateAsync({
      topic: course,
      experience: difficulty,
    });
    console.log(data?.data);
    setQuestions(data?.data);
    navigate(`/InterView/${course}/${difficulty}`);
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center relative">
      {/* Header */}
      <div className="fixed top-5 left-5 border border-white rounded-full p-3 hover:bg-white hover:text-black transition-all duration-200 cursor-pointer">
        <ArrowLeft className="w-6 h-6" onClick={() => window.history.back()} />
      </div>

      {/* Course Selection Section */}
      <div className="flex items-center justify-center bg-black/50 backdrop-blur-md z-50 p-4">
        <div className="bg-gray-900 text-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-center">
            Tell us more about the job you{" "}
            <span className="underline">wish</span> to prepare for
          </h2>
          <p className="text-gray-400 text-center mt-2">
            Add details about your job position, job description, and years of
            experience so that we can help you practice with the best questions.
          </p>

          {/* Job Position */}
          <label className="block text-lg font-medium mt-4">
            Type of Job-Role
          </label>
          <input
            type="text"
            value={course}
            className="w-full p-3 mt-1 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a Job-Role"
            onChange={(e) => setCourse(e.target.value)}
          />

          {/* input:range */}
          <div className="mt-20 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="mt-4 p-4 sm:p-6 rounded-lg shadow-md max-w-lg mx-auto">
              <label className="block text-base sm:text-lg font-medium text-center">
                Level {difficulty}:{" "}
                {difficulty === 1
                  ? "Easy"
                  : difficulty === 2
                  ? "Medium"
                  : "Hard"}{" "}
                Difficulty
              </label>
              <input
                type="range"
                min="1"
                max="3"
                value={difficulty}
                onChange={(e) => setDifficulty(Number(e.target.value))}
                className="w-full mt-3 accent-blue-500"
              />
              <div className="flex justify-between text-xs sm:text-sm mt-1 text-gray-400">
                <span>Easy</span>
                <span>Medium</span>
                <span>Hard</span>
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <div className="flex justify-center mt-6">
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full text-lg sm:text-xl font-semibold flex items-center gap-2 transition transform hover:scale-105 active:scale-95"
              onClick={handleclick}
            >
              Generate Questions
              <span className="text-2xl">↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
