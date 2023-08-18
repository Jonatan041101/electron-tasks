import React from 'react';
import Button from './button';

export default function ButtonComplete({ text, handleClick }) {
  return (
    <div className="button__complete">
      <Button handleClick={handleClick}>{text}</Button>
    </div>
  );
}
