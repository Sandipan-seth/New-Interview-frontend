import Questions from "@/components/InterviewComponents/Questions";
import { Particles } from "@/components/ui/particles";
import UserContext from "@/contexts/UserContext";
import { useAnalysis } from "@/hooks/useAnalysis";
import { ArrowLeft, Loader2 } from "lucide-react";
import React, { useState, useContext } from "react";

const InterViewQuestions = () => {
  const { course, level, questions } = useContext(UserContext);
  const [answers, setAnswers] = useState({});
  const [apiResponse, setApiResponse] = useState(null);

  const { isPending, isSuccess, error, mutateAsync } = useAnalysis();

  const handleAnswerChange = (index, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [`question${index + 1}`]: questions[index],
      [`answer${index + 1}`]: answer,
    }));
  };

  const handleSubmit = async () => {
    setApiResponse(null);
    try {
      const data = await mutateAsync(answers);
      setApiResponse(data?.data);
    } catch (err) {
      setApiResponse("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-black w-screen min-h-screen text-white flex flex-col items-center relative py-10">
      <Particles className="absolute inset-0" quantity={150} ease={80} color="#ffffff" refresh />

      <div className="fixed top-5 left-5 border border-white rounded-full p-3 hover:bg-white hover:text-black transition-all duration-200 cursor-pointer">
        <ArrowLeft className="w-6 h-6" onClick={() => window.history.back()} />
      </div>

      <div className="text-center mb-6 px-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Questions on <span className="text-blue-500">{course}</span> ({level} Level)
        </h1>
      </div>

      {!questions ? (
        <div className="text-lg text-gray-400">Loading questions...</div>
      ) : (
        <>
          <div className="w-full max-w-3xl space-y-4 px-6 pb-10">
            {questions.map((question, index) => (
              <Questions key={index} question={question} onAnswerChange={(answer) => handleAnswerChange(index, answer)} />
            ))}
          </div>
          <div className="mt-6 flex flex-col items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 flex items-center justify-center gap-2"
              onClick={handleSubmit}
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" /> Submitting...
                </>
              ) : (
                "Submit Answers"
              )}
            </button>

            {isSuccess && apiResponse && (
              <div className="mt-4 text-lg text-green-400 bg-gray-900 p-4 rounded-lg max-w-2xl text-center shadow-lg">
                {apiResponse}
              </div>
            )}

            {error && (
              <div className="mt-4 text-lg text-red-400 bg-gray-900 p-4 rounded-lg max-w-2xl text-center shadow-lg">
                Something went wrong. Please try again.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default InterViewQuestions;
