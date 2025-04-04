import React from "react";

const Cell = ({ value, onClick }) => {
  let className = "cell";
  if (value === "red") className += " red";
  if (value === "yellow") className += " yellow";

  return <div className={className} onClick={onClick}></div>;
};

export default Cell;
