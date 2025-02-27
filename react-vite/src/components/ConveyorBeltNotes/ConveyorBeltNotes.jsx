import { useState, useEffect, useRef } from 'react';
import './ConveyorBeltNotes.css';

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
          return 0; 
        }
        return prevPosition + 2; 
      });
    }, 20); 

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
  
        {notes.concat(notes).map((note, index) => (
          <div
            key={index}
            style={{
            marginBottom:'40px'   
            }}
          >
       <p id='note-style'>{note}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConveyorBeltNotes;




