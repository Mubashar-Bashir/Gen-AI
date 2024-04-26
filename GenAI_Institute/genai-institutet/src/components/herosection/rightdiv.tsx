"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Define the type for the image object
interface ImageObject {
  id: number;
  url: string;
  // Add more properties as needed
}

const Rightdiv = () => {
  const [images, setImages] = useState<ImageObject[]>([]); // Specify the type of images as ImageObject[]
  const [error, setError] = useState<string | null>(null); // Specify the type of error as string or null

  useEffect(() => {
    // Fetch image data
    const fetchData = async () => {
      try {
        const response = await fetch('https://civitai.com/api/v1/images');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setImages(data.items);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred'); // Set error message
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <div className="right-div-wrapper">
      {error ? (
        // Display error message if there's an error
        <div className="error-message">{error}</div>
      ) : (
        // Display fetched image data
        images.map((image, index) => (
          <div key={index} className="subcategory-group bg-slate-500">
            <h1>DIV group {index + 1}</h1>
            <div className="relative w-500 h-300">
              <Image src={image.url} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Rightdiv;
