import React from "react";
import Card from "./Card";
import { cardsData } from "../assets/assets";

const Testimonial = () => {
  return (
       <div className="px-4 sm:px-20 xl:px-32 my-24">
     <div className="text-center">
       <h1 className="text-slate-700 text-[42px] text-center font-semibold ">
        Customer Testimonials
      </h1>
      <p className="text-gray-500 max-w-lg mx-auto">
        Hear what our users say about us. We're always looking for ways to improve. If you have a positive  experience with us, leave a review.
      </p> 
     </div>
      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>

      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Testimonial;
