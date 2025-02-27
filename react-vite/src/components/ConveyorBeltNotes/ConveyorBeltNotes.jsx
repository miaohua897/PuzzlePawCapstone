import { useState, useEffect, useRef } from 'react';

const ConveyorBeltNotes = () => {
  const [scrollPosition, setScrollPosition] = useState(0); 
  const scrollContainerRef = useRef(null); 

  const notes = [
    'Note 1: This is the first note.',
    'Note 2: Here is the second note.',
    'Note 3: The third one is here.',
    'Note 4: And now, the fourth note.',
    "Note 5: Finally, the fifth note."
  ];

  useEffect(() => {
    const containerWidth = scrollContainerRef.current.clientWidth; 
    const scrollWidth = scrollContainerRef.current.scrollWidth; 

    const interval = setInterval(() => {
      setScrollPosition(prevPosition => {
        if (prevPosition + containerWidth >= scrollWidth) {
          return 0; // If we reached the end, reset to 0
        }
        return prevPosition + 2; // Increase step for more visible movement
      });
    }, 20); // Make the interval faster for smoother movement

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
        }}
      >
        {/* Display the notes array */}
        {notes.concat(notes).map((note, index) => (
          <div
            key={index}
            style={{
            marginBottom:'40px'   
            }}
          >
       <p style={{
          width: '400px',
          height: '100px',
          marginRight: '10px',
          border: '1px solid #3498db',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '15px',
          boxSizing: 'border-box',
          background: 'linear-gradient(135deg, rgb(80, 232, 255), rgb(99, 71, 255), rgb(255, 118, 118), rgb(255, 255, 99))', // 多重渐变色
          backgroundSize: '400% 400%', // 设置渐变的扩展
          color: 'white',
          fontSize: '18px',
          fontWeight: '600',
          fontFamily: 'Arial, sans-serif',
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', 
          borderRadius: '15px',
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', 
          transition: 'all 0.3s ease-in-out',
          animation: 'gradientAnimation 5s ease infinite', // 动态渐变动画
        }}>{note}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ConveyorBeltNotes;




