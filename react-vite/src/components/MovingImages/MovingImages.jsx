import { useState, useEffect, useRef } from 'react';
import './MovingImages.css';

const MovingImages = () => {
  const [position, setPosition] = useState(0); 
  const containerRef = useRef(null); 

  const imageUrl = [
    'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-freestockpro-20659445.jpg',
    'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-ilargian-faus-763704-1629781.jpg',
    'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-nishizuka-25426-485294.jpg',
    'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-nord6-7324407.jpg',
    "https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-sam-lion-5732460.jpg"
  ];

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth; 
    const scrollWidth = containerRef.current.scrollWidth; 

    const interval = setInterval(() => {
      setPosition(prev => {
        if (prev + containerWidth >= scrollWidth) {
          return 0; 
        }
        return prev + 2; 
      });
    }, 20); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div
      ref={containerRef}
      className='scroll-container'
  
    >
      <div
      className='scroll-position'
        style={{
          display: 'flex', 
          transform: `translateX(-${position}px)`, 
        }}
      >
  
        {imageUrl.concat(imageUrl).map((url, index) => (
          <div key={index} >
           <img id='note-style' src={url}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingImages;




