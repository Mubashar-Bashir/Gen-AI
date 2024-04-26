import React from 'react';

const CentralDiv = () => {
  return (
// {/* <>
//   <div className="flex items-center justify-center">
//     {/* Vertical line (thread or rope) */}
//     <div className="h-full w-1 bg-gray-500 border-r border-black-500 mr-10 shadow"></div>
//     {/* Vertical line (thread or rope) with gradient background and custom border */}
//     {/* <div className="h-72 w-1 border-r border-black mr-10 shadow-lg bg-gradient-to-b from-gray-400 to-gray-700">
//     </div> */}
//     {/* Luminous beads positioned vertically */}
//     <div className="flex flex-col justify-center">
//       {[...Array(10)].map((_, index) => 
//       (
//         <div key={index} className="w-6 h-6 rounded-full bg-green-500 animate-color-change transform rotate-45 my-5"></div> 
//       ))}
//     </div>
//   </div>
// </> */}
<>

<div className="flex items-center justify-center">
    {/* Container for the line and beads */}
    <div className="relative">
      {/* Vertical line (thread or rope) with gradient background and custom border */}
      <div className="absolute top-0 bottom-0 left-0 h-full w-6 border-r border-black mr-10 shadow-lg bg-gradient-to-b from-gray-300 to-gray-700"></div>

      {/* Luminous beads positioned vertically */}
      <div className="flex flex-col justify-center">
        {[...Array(5)].map((_, index) => (
            
          <div key={index} className="w-6 h-6 rounded-full bg-green-500 transform  animate-color-change rotate-45 my-6"></div> 
          
        ))}
      </div>
    </div>
  </div>
</>
  );
};

export default CentralDiv;
