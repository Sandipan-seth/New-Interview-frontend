import assets from "@/assets/assest";
import { useNavigate } from "react-router-dom";

function Features() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  return (
    <section
      id="features"
      className="py-16 px-8 text-center mb-10 relative flex flex-col justify-center items-center"
    >
      <h2 className="text-5xl font-extrabold text-white mb-6">
        🚀{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
          Our Features
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
        {[
          {
            title: "Mock Interviews",
            description:
              "Practice with AI-driven mock interviews tailored to your job role.",
            icon: "🎤",
            img: assets.mockInterview,
            route: "/StartInterview/" + user?.id,
          },
          {
            title: "Sample Questions",
            description:
              "Access a curated list of common and technical interview questions.",
            icon: "📚",
            img: assets.sampleQuestions,
            route: "/QuestionBank",
          },
          {
            title: "AI Support",
            description:
              "Get real-time feedback and AI-generated suggestions for improvement.",
            icon: "🤖",
            img: assets.aiSupport,
            route: "/AI-Guidance",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900/60 border border-gray-700 cursor-pointer backdrop-blur-lg rounded-xl shadow-lg flex flex-col items-center justify-between text-center
             hover:-translate-y-3 hover:scale-105 transition-all duration-300 hover:shadow-blue-500/50"
          >
            <div className="text-5xl flex justify-center">
              <img
                className="rounded-lg w-full h-48 object-cover"
                src={feature.img}
                alt="AI Support"
              />
            </div>
            <h3 className="text-2xl font-semibold text-white mt-4 text-center">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-300 text-center">
              {feature.description}
            </p>
            <div className="mt-4 flex justify-center">
              <button
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-black transition duration-300"
                onClick={() =>
                  token ? navigate(feature.route) : navigate("/auth")
                }
              >
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
