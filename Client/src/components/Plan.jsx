import React from 'react'
import {PricingTable} from '@clerk/clerk-react'

const Plan = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-30'>
        <div className='text-center'>
               <h2 className='text-[42px] font-semibold text-slate-700 text-center'>Choose Your Plan</h2>
               <p className='text-gray-500 max-w-lg mx-auto'>Start with zero cost and unlock more as you expand. Choose the ideal plan tailored to your creative journey.</p>
        </div>
        <div className='mt-14 max-sm:mx-8'>
             <PricingTable/>
        </div>
    </div>
  )
}

export default Plan
