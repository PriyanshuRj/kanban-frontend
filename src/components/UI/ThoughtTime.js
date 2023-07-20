import React from 'react'
import { LampOn } from 'iconsax-react'
export default function ThoughtTime() {
  return (
    <div className='flex flex-col items-center mb-8'>
    <span className='dark:bg-gray-700 bg-[#F5F5F5] h-[4.125rem] w-[4.125rem] flex items-center justify-center rounded-full relative'>
      <LampOn
        size="24"
        color="#FBCB18"
        variant="Bulk"
      />
      <svg className='absolute ' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_1_309)">
          <circle cx="30" cy="30" r="15" className='fill-[#FCD64A]' fillOpacity="0.7" />
        </g>
        <defs>
          <filter id="filter0_f_1_309" x="0" y="0"  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="17" result="effect1_foregroundBlur_1_309" />
          </filter>
        </defs>
      </svg>
    </span>
        <div className='dark:bg-gray-700 bg-[#F5F5F5] dark:shadow-slate-700 shadow-md shadow-[#F5F5F5] border-md mx-4 rounded-2xl flex flex-col items-center p-4 px-5 pt-8 -mt-8'>
          <p className='text-[0.9rem] font-medium'>
            Thoughts Time
          </p>
          <p className='text-[0.75rem] text-center text-[#787486] mt-1'>
          We don’t have any notice for you, till then you can share your thoughts with your peers.
          </p>
          <span  className='flex items-center justify-center dark:bg-black bg-white rounded-md py-2 w-full mt-3 text-[0.9rem] font-medium'>
            Write a message
          </span>
        </div>
  </div>
  )
}
