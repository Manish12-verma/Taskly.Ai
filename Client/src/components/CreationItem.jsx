import React, { useState } from "react";
import Markdown from "react-markdown";


const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }

  return (
    <div onClick={toggleExpanded} className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-center gap-4 ">
        <div>
          <h2>{item.prompt}</h2>
          <p className="text-gray-500">
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className="bg-primary border border-[#bec9d6] text-[#d7d7d9] px-4 py-1 rounded-full">
          {item.type}
        </button>
      </div>
      {
        expanded  && (
          <div>
            {item.type === "image" ? (
              <div>
                <img src={item.content} alt="image" className="mt-3 w-full max-w-md"/>
              </div>
            ):(
               <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-700">
                   <div className="reset-tw">
                   <Markdown>{item.content}</Markdown> 
                   </div>
               </div>
            )}
          </div>
        )
      }
    </div>
  );
};

export default CreationItem;
