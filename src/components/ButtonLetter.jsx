import React from "react";
import "./ButtonLetter.css";

function ButtonLetter({ letter, onClick, disabled }) {
  return (
    <button
      onClick={() => onClick(letter)}
      disabled={disabled}
      className="buttonComp"
    >
      {letter}
    </button>
  );
}

export default ButtonLetter;
