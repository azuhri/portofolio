import React, { useState } from 'react';
import canvasIcon from '../../../assets/canvas.svg'

const ThemeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const themes = [
    { color: 'bg-blue-500', name: 'Blue' },
    { color: 'bg-red-500', name: 'Red' },
    { color: 'bg-green-500', name: 'Green' },
    { color: 'bg-yellow-500', name: 'Yellow' }
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="btn text-white px-4 py-2 rounded-lg focus:outline-none"
      >
       <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
      </button>

      {isOpen && (
        <ul className="absolute z-[100] right-0 mt-2 w-[250px] bg-transparent border border-gray-100 rounded-lg shadow-md p-4 grid grid-cols-2 gap-1">
          {themes.map((theme, index) => (
            <li
              key={index}
              className={`flex items-center text-center justify-center p-2 py-8 ${theme.color} text-white rounded-lg cursor-pointer hover:bg-opacity-50`}
            >
              <span className="">{theme.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThemeDropdown;
