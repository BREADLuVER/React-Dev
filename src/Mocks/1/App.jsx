import React, { useState, useEffect } from "react";
import "./styles.css";

export default function ErrorMessage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <div className="modal">
        <div className="modal-header">
          <h2>An unexpected error occurred</h2>
        </div>
        <div className="modal-content">
          <p>
            An error occurred while trying to sync your data. Would you like to
            retry?
          </p>
          <div className="buttons">
            <button className="yes">Yes</button>
            <button className="no">No</button>
          </div>
        </div>
      </div>
      <p>Window width: {windowWidth}px</p>
    </div>
  );
}
