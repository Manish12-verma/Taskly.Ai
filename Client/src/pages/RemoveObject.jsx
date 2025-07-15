import { useState } from "react";
import { Eraser, Hash, Scissors, Sparkles } from "lucide-react";

const RemoveObject = () => {
  const [inputValue, setInputValue] = useState("");
  const [description, setDescription] = useState("");

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
          <Sparkles className="w-6 text-[#51b38a]" />
          <h1 className="text-xl font-semibold">Object Removal</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Upload Image</p>
        <input
          onChange={(e) => setInputValue(e.target.files[0])}
          type="file"
          accept="image/*"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
          required
        />
        <p className="mt-2 text-xs text-gray-500 font-light">
          Supports JPG, PNG and other image formats
        </p>
        <p className="mt-6 text-sm font-medium">Describe object to remove</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          rows={4}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="e.g., car in the background , house from the image "
          required
        />
        <p className="mt-1 text-xs text-gray-500 font-light">
          Be specific about what you want to remove
        </p>
        <button className="mt-6 w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#51b38a] to-[#3ad61e] text-white px-4 py-2 rounded-lg text-sm cursor-pointer">
          <Scissors className="w-5" />
          Remove Object
        </button>
      </form>
      {/*right col */}

      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 ">
        <div className="flex items-center gap-3 ">
          <Scissors className="w-5 h-5  text-[#51b38a]" />
          <h1 className="text-xl font-semibold">Processed Image </h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-500">
            <Scissors className="w-9 h-9  " />
            <p className="text-md">
              Upload an image and describe what to remove
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveObject;
