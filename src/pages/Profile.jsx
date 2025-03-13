import Card from "@/components/profileComponent/Card";
import { Particles } from "@/components/ui/particles";
import { ArrowLeft } from "lucide-react";
import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center relative px-6 ">
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 h-full"
        quantity={150}
        ease={80}
        color="#ffffff"
        refresh
      />

      {/* Back Button */}
      <button
        className="fixed top-5 left-5 border border-white rounded-full p-3 hover:bg-white hover:text-black transition-all duration-200"
        onClick={() => window.history.back()}
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* User Profile Content */}
      <div className="z-10 w-full max-w-4xl flex flex-col items-center gap-6">
        <div className="overflow-hidden w-full">
          <Card user={user} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
