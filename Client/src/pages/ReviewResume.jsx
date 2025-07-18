import { useState } from "react";
import { File, Sparkles } from "lucide-react";

const ReviewResume = () => {
  const [inputValue, setInputValue] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //have to write the logic to generate article
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex ml-3 items-start flex-wrap gap-4 text-slate-700">
      {/*left col */}

      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 shadow-md"
      >
        <div className="flex items-center gap-3 ">
          <Sparkles className="w-6 text-[#ab476c]" />
          <h1 className="text-xl font-semibold">Resume Review</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Upload Resume</p>
        <input
          onChange={(e) => setInputValue(e.target.files[0])}
          type="file"
          accept="application/pdf*"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
          required
        />
        <p className="mt-2 text-xs text-gray-500 font-light">
          Supports PDF resume only{" "}
        </p>
        <br />
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#ab476c] to-[#ce4cb2] text-white px-4 py-2 rounded-lg text-sm cursor-pointer">
          <File className="w-5" />
          Review Resume
        </button>
      </form>
      {/*right col */}

      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3 ">
          <File className="w-5 h-5  text-[#ab476c]" />
          <h1 className="text-xl font-semibold">Analysis Results </h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-500">
            <File className="w-9 h-9  " />
            <p className="text-md">
              Upload your resume and click "Review Resume" to get started!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;
