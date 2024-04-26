import Slider from '@/components/SliderComponent/slider';
import Leftdiv from '@/components/herosection/leftdiv';
import Rightdiv from '@/components/herosection/rightdiv';
import CentralDiv from '@/components/herosection/cnetraldiv';
import React from 'react';
// import SliderComponent from  // Import your slider component
// import LeftComponent from './LeftComponent'; // Import your left component
// import RightComponent from './RightComponent'; // Import your right component

const Home = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-row justify-center items-start md:items-stretch "></div>
      {/* Full-width slider */}
      <div className="w-full">
        {/*--------------------- Slider welcome to the GenAI -------------- */}
        <Slider />
             <div className="grid text-center">
                <p className="text-white">
                  "Exploring the Boundaries of AI: Empowering Learning with GenAI"
                </p>
              </div>
      </div>

      {/* Two equally sized divs for left and right sections */}
      <div className="flex justify-between mt-8 border-2 border-gray-300  shadow-lg border rounded-tl-20 rounded-tr-20">
  {/* Content goes here */}


        {/* Left component */}
        <div className="w-1/2 pr-4 px-5 border rounded ">
          <Leftdiv />
        </div>
        {/* Centeral Component */}
        <div className="flex justify-between mt-8 border rounded-full">
      {/* Other content */}
      <CentralDiv />
      {/* Other content */}
    </div>
       {/* Right component */}
        <div className="w-1/2 pl-4 border rounded-tl-10 rounded-full">
          <Rightdiv /> {/* Render the Rightdiv component */}
        </div>
      </div>
    </div>
  );
};

export default Home;
