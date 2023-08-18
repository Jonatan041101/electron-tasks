import React from 'react';
import Button from './button';

export default function ButtonComplete({ text, isDisabled, handleClick }) {
  return (
    <div className="button__complete">
      <Button isDisabled={isDisabled} handleClick={handleClick}>
        {text}
      </Button>
    </div>
  );
}
