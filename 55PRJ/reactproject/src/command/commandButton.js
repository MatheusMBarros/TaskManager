import React from "react";

const CommandButton = ({ onClick, children }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default CommandButton;
