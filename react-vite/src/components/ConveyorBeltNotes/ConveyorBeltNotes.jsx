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
             
              border: '1px solid black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              boxSizing: 'border-box',
            }}>{note}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConveyorBeltNotes;




