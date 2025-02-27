import { useState, useEffect, useRef } from 'react';

const ConveyorBeltImages = () => {
  const [scrollPosition, setScrollPosition] = useState(0); 
  const scrollContainerRef = useRef(null); 

  const images = [
    'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/2498ae5db812410784477ebda1d52497.jpg',
    'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-jozef-feher-356581-1633522.jpg',
    'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-edd1egalaxy-3628100.jpg',
    'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-ilargian-faus-763704-1629780.jpg',
    "https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-valeriya-9157299.jpg"
  ];

  useEffect(() => {
    const containerWidth = scrollContainerRef.current.clientWidth; 
    const scrollWidth = scrollContainerRef.current.scrollWidth; 


    const interval = setInterval(() => {
      setScrollPosition(prevPosition => {
        if (prevPosition + containerWidth >= scrollWidth) {
          return 0; 
        }
        return prevPosition + 1; 
      });
    }, 30);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      style={{
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex', 
          transform: `translateX(-${scrollPosition}px)`, 
          transition: 'transform 0.05s linear', 
        }}
      >
       
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index}`}
            style={{
              width: '300px', 
              height: 'auto',
              marginRight: '10px', 
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ConveyorBeltImages;

