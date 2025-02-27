import { useState, useEffect, useRef } from 'react';
import './MovingNotes.css';

const MovingNotes = () => {
  const [position, setPosition] = useState(0); 
  const containerRef = useRef(null); 

  const notes = [
    'This place for the most liked comment in forum I',
    'This place for the most liked comment in forum II',
    'This place for the most liked comment in forum III',
    'This place for the most liked comment in forum IV',
    "This place for the most liked comment in forum V"
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




