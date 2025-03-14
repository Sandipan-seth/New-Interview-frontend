import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Particles } from "@/components/ui/particles";
import assets from "@/assets/assest";
import UserContext from "@/contexts/UserContext";
import { ArrowLeft } from "lucide-react";
import { useInterview } from "@/hooks/useInterview";

const Chat1 = () => {
  const navigate = useNavigate();
  const { userid } = useParams();
  const { course, setCourse, level, setLevel, questions, setQuestions } =
    useContext(UserContext);

  const [jobRole, setJobRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [experience, setExperience] = useState(0);

  const { isPending, isSuccess, error, mutateAsync } = useInterview();
  async function handleclick() {
    const data = await mutateAsync({
      topic: course,
      experience: level,
    });
    console.log(data?.data);
    setQuestions(data?.data);
    navigate(`/InterView/${course}/${level}`);
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center relative">
      {/* Header */}
      <div className="fixed top-5 left-5 border border-white rounded-full p-3 hover:bg-white hover:text-black transition-all duration-200 cursor-pointer">
        <ArrowLeft className="w-6 h-6" onClick={() => window.history.back()} />
      </div>

      {/* Course Selection Section */}
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50 p-4">
        <div className="bg-gray-900 text-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white text-xl rounded-md transition"
            onClick={() => navigate("/features")}
          >
            &times;
          </button>

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
            Job Position / Job Role
          </label>
          <input
            type="text"
            value={jobRole}
            className="w-full p-3 mt-1 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a Job-Role"
            onChange={(e) => setJobRole(e.target.value)}
          />

          {/* Job Description */}
          <label className="block text-lg font-medium mt-4">
            Job Description
          </label>
          <div className="relative">
            <textarea
              className="w-full p-3 mt-1 bg-gray-800 border border-gray-600 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter job description..."
              maxLength={300}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
            <span className="absolute bottom-3 right-3 text-sm text-gray-400">
              {jobDescription.length}/300
            </span>
          </div>

          {/* Years of Experience */}
          <label className="block text-lg font-medium mt-4">
            Years of Experience
          </label>
          <input
            type="number"
            min="0"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full p-3 mt-1 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Generate Button */}
          <div className="flex justify-center mt-6">
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center gap-2 transition transform hover:scale-105"
              onClick={() => navigate("/difficulty")}
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

export default Chat1;
