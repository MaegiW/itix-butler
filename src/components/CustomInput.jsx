import { useState } from "react";

function CustomInput({
  type,
  placeholder,
  htmlFor,
  labelText,
  value,
  onChange,
}) {
  return (
    <div className="mb-2">
      <label htmlFor={htmlFor} className="form-label">
        {labelText}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`form-control`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CustomInput;
