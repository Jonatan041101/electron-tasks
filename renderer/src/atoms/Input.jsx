import React from 'react';

export default function Input({
  name,
  value,
  placeholder,
  type = 'text',
  handleChange,
}) {
  return (
    <div className="input">
      <input
        className="input__input"
        onChange={handleChange}
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
