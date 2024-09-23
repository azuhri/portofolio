import React, { useState, useEffect } from 'react';

const Typewriter2 = (props) => {
  const { css, tulisan } = props;

  const typingDelay = 200;
  const erasingDelay = 50;
  const newTextDelay = 2000;

  const [tulisanIndex, setTulisanIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let timeout;
    if (typing) {
      if (charIndex < tulisan[tulisanIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText((prev) => prev + tulisan[tulisanIndex].charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        }, typingDelay);
      } else {
        timeout = setTimeout(() => setTyping(false), newTextDelay);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentText((prev) => prev.substring(0, prev.length - 1));
          setCharIndex((prev) => prev - 1);
        }, erasingDelay);
      } else {
        setTulisanIndex((prev) => (prev + 1) % tulisan.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, tulisanIndex, tulisan]);

  return (
    <div className='relative'>
      <span className={`typed-text ${css}`} style={{ backgroundColor: currentText.length ? '' : 'transparent' }}>
        {currentText}
      </span>
      <span className={`cursor  text-5xl absolute top-1 ${currentText.length == 0 ? 'hidden' : ''}`}>|</span>
    </div>
  );
};

export default Typewriter2;
