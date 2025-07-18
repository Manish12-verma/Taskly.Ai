import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.jpg)] bg-cover bg-no-repeat min-h-screen">
      <div className="text-center mb-6 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold mx-auto leading-[1.2]">
          Unleash Your Creativity with <br /> Smart{" "}
          <span className="text-primary">AI Tools</span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-700">
          Supercharge your content with smart AI tools that do the writing,
          designing, and optimizing for you
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5 text-sm max-sm:text-xs ">
        <button
          onClick={() => navigate('/ai')}
          className="bg-primary text-white px-10  py-3 rounded-lg hover:scale-105 transition duration-700  cursor-pointer"
        >
          Make Something Amazing
        </button>
        <button className="border border-gray-400 bg-white px-10 py-3 rounded-lg hover:scale-105 transition duration-700 cursor-pointer">
          Watch the Magic
        </button>
      </div>
      <div className="flex items-center gap-4 mt-8 mx-auto text-gray-600">
        <img src={assets.user_group} alt="" className="h-8"/> Trusted by 1k+ users
      </div>
    </div>
  );
};

export default Hero;
