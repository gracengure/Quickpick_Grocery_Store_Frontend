import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

function Snackbar({ message, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  // Automatically close the Snackbar after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose(); // Close Snackbar after timeout
    }, 6000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    isVisible && (
      <div className="snackbar">
        {message}
        <button
          className="close-snackbar"
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
        >
          <FaTimes />
        </button>
      </div>
    )
  );
}

export default Snackbar;
