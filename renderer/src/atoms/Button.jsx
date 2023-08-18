import React from 'react';

export default function Button({ children, handleClick, isDisabled }) {
  return (
    <button disabled={isDisabled} onClick={handleClick} className="button">
      {children}
    </button>
  );
}
