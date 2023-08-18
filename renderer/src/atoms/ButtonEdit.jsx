import React from 'react';
import Button from './button';

export default function ButtonEdit({ text, isDisabled, handleClick }) {
  return (
    <div className="">
      <Button isDisabled={isDisabled} handleClick={handleClick}>
        {text}
      </Button>
    </div>
  );
}
