import React from "react";
import "./style.css";

const UserCounter = ({ text, count, className }) => {
  return (
    <div className={className}>
      <span className="cnUserCounterCount">{count}</span>
      <span className="cnUserCounterText">{text}</span>
    </div>
  );
};

export default UserCounter;
