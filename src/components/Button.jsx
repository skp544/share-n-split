import React from "react";

const Button = ({ children, onClickHandler }) => {
  return (
    <button className="button" onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;
