import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";
import toast from "react-hot-toast";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const handleToolClick = (path) => {
  if (user) {
    navigate(path);
  } else {
    toast.error("Please sign in first!");
    openSignIn();
  }
};
  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24">
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold ">
          Intelligent Tools for Limitless Creation
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Powerful AI-driven tools to generate, elevate, and perfect your
          content like never before.
        </p>
      </div>
      <div className="flex flex-wrap mt-10 justify-center">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100  hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={() => handleToolClick(tool.path)}
          >
            <tool.Icon
              className="w-12 h-12 p-3 text-white rounded-xl"
              style={{
                background: `linear-gradient(to bottom,${tool.bg.from},${tool.bg.to})`,
              }}
            />

            <h3 className="flex mt-6 mb-3 text-lg font-semibold">
              {tool.title}
            </h3>
            <p className="text-gray-500 text-sm max-w-[95%]">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;
