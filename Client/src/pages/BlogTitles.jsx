import { useState } from 'react'
import {  Hash, Sparkles } from "lucide-react";

const BlogTitles = () => {
  const blogCategory = ['General', 'Technology', 'Health', 'Lifestyle', 'Travel', 'Education','Bussiness', 'Finance', 'Entertainment', 'Food'];

    const [selectedCategory, setselectedCategory] = useState(blogCategory[0]);
    const [inputValue, setInputValue] = useState("");
  
    const onSubmitHandler = async (e) => {
      e.preventDefault();
      //have to write the logic to generate article
    }
  return (
    <div className="h-full overflow-y-scroll p-6 flex ml-3 items-start flex-wrap gap-4 text-slate-700">
      {/*left col */}

      <form onSubmit={onSubmitHandler} className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 shadow-md">

        <div className="flex items-center gap-3 ">
          <Sparkles className="w-6 text-[#8E37EB]"/>
          <h1 className="text-xl font-semibold">AI Title Generator</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Keyword</p>
        <input onChange={(e)=>setInputValue(e.target.value)} value={inputValue} type="text" className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300" placeholder="What's on your mind today?" required/>
        <p className="mt-6 text-sm font-medium">Category</p>
         <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {blogCategory.map((item,idx) => (
             <span onClick={()=>{setselectedCategory(item)}} key={idx} className={`text-xs px-4 py-1  border-2 rounded-full cursor-pointer ${selectedCategory ===item ? 'bg-purple-50 text-purple-700' :'text-gray-500 border-gray-300'}`}>{item}</span>
          ))}
         </div>

         <br />
         <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#C341F6] to-[#9d84c7] text-white px-4 py-2 rounded-lg text-sm cursor-pointer">
          <Hash className="w-5"/>
          Generate title
         </button>
      </form>
      {/*right col */}

      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 ">
        <div className="flex items-center gap-3 ">
           <Hash className="w-5 h-5  text-[#8E37EB]"/>
           <h1 className="text-xl font-semibold">Generated Titles</h1>
        </div>
       <div className="flex-1 flex justify-center items-center">
           <div className="text-sm flex flex-col items-center gap-5 text-gray-500"> 
                    <Hash className="w-9 h-9  "/>
                    <p className="text-md">Enter a topic and click "Generate title" to get started!</p>
           </div>
       </div>
      </div>
    </div>
  )
}

export default BlogTitles
