import { useState } from 'react'
import {  Hash, Image, Sparkles } from "lucide-react";

const GenerateImages = () => {
  const imageCategory = ['Realistic', 'Ghibli style'];
  
      const [selectedCategory, setselectedCategory] = useState(imageCategory[0]);
      const [inputValue, setInputValue] = useState("");
      const [publish,setPublish] = useState(false);
    
      const onSubmitHandler = async (e) => {
        e.preventDefault();
        //have to write the logic to generate article
      }
  return (
    <div className="h-full overflow-y-scroll p-6 flex ml-3 items-start flex-wrap gap-4 text-slate-700">
      {/*left col */}

      <form onSubmit={onSubmitHandler} className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 shadow-md">

        <div className="flex items-center gap-3 ">
          <Sparkles className="w-6 text-[#41def6]"/>
          <h1 className="text-xl font-semibold">AI Image Generator</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Describe Your Image</p>
        <textarea onChange={(e)=>setInputValue(e.target.value)} value={inputValue} type="text" rows={4} className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300" placeholder="Describe what you want to see in the image..." required/>
        <p className="mt-6 text-sm font-medium">Style</p>
         <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {imageCategory.map((item,idx) => (
             <span onClick={()=>{setselectedCategory(item)}} key={idx} className={`text-xs px-4 py-1  border-2 rounded-full cursor-pointer ${selectedCategory ===item ?  'bg-purple-50 text-[#41def6]' :'text-gray-500 border-gray-300'}`}>{item}</span>
          ))}
         </div>

         <div className='my-6 flex items-center gap-2'>
            <label className='relative cursor-pointer'>
            <input type="checkbox"  onChange={(e)=>setPublish(e.target.checked)} checked={publish} className='sr-only peer'/>
            <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-[#41def6] transition'></div>
            <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full  peer-checked:translate-x-4'></span>
            </label>
            <p className='text-sm'>Make this image Public</p>
         </div>

         <br />
         <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#41def6] to-[#84b3c7] text-white px-4 py-2 rounded-lg text-sm cursor-pointer">
          <Image className="w-5"/>
          Generate Image
         </button>
      </form>
      {/*right col */}

      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 ">
        <div className="flex items-center gap-3 ">
           <Hash className="w-5 h-5  text-[#41def6]"/>
           <h1 className="text-xl font-semibold">Generated Image</h1>
        </div>
       <div className="flex-1 flex justify-center items-center">
           <div className="text-sm flex flex-col items-center gap-5 text-gray-500"> 
                    <Image className="w-9 h-9  "/>
                    <p className="text-md">Describe an Image and click "Generate image" to get started!</p>
           </div>
       </div>
      </div>
    </div>
  )
}

export default GenerateImages
