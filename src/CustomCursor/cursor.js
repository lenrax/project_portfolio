import React, { useState, useEffect } from "react";
import "./cursor.css"; // Import the CSS file for the custom cursor styles

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Add event listeners to track the cursor position
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up the event listeners when the component unmounts
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.pageX, y: event.pageY });
  };

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${cursorPosition.x - 10}px`, // Adjust the offset based on cursor size
        top: `${cursorPosition.y - 10}px`, // Adjust the offset based on cursor size
      }}
    ></div>
  );
};

export default CustomCursor;