import { useState, useEffect, useRef } from 'react';
import './MovingNotes.css';

const MovingNotes = () => {
  const [position, setPosition] = useState(0); 
  const containerRef = useRef(null); 

  const notes = [
    'Note 1: This is the first note.',
    'Note 2: Here is the second note.',
    'Note 3: The third one is here.',
    'Note 4: And now, the fourth note.',
    "Note 5: Finally, the fifth note."
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
  
        {notes.concat(notes).map((note, index) => (
          <div key={index} >
           <p id='note-style'>{note}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingNotes;




