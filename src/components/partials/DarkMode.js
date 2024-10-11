import React, { useState, useEffect } from 'react';

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  useEffect(() => {
    document.body.className = theme; // Apply theme class to body
    localStorage.setItem("theme", theme); // Store theme in localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className='relative'>
      <i
        onClick={toggleTheme}
        className={`ri-sun-line w-12 cursor-pointer ml-6 text-2xl ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      ></i>
      <i
        onClick={toggleTheme}
        className={`ri-moon-line w-12 cursor-pointer ml-6 text-2xl ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
      ></i>
    </div>
  );
};

export default DarkMode;
