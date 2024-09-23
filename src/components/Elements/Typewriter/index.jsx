import React, { useState, useEffect } from 'react';

function Typewriter(props) {
  const { text, speed = 100, css } = props;
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((value) => value + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <p className={css}>{displayedText}</p>;
}

export default Typewriter;
