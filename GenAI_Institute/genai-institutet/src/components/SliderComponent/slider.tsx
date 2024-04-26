import React from 'react';
import TextSlider from '@/components/ColorChanger/TextSlider';
const Slider = () => {
  return (
    <div className="relative w-full h-60">
       {/* Background animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-green-600 animate-neon-cobra" />

          {/* Slider content */}
          <div className="relative z-10 flex items-center justify-center h-full text-white text-8xl font-bold font-poppins">
              <div className="py-4 text-center font-lato ">  <p > Welcome To </p>  
               {/* This div serves as a spacer */}
               <div className='flex items-center'>
               <span className='font-poppins'>The <TextSlider />    Era </span>  
               </div>
               </div>
              
        </div>
            
    </div>
 

  );
};

export default Slider;
