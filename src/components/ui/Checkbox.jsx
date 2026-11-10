import { useState } from "react";

import Tick from "./Icon/Tick";

function Checkbox({ checked = false, onChange, size = 16, id }) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e) => {
    setIsChecked((prev) => !prev);
    onChange?.(e);
  };

  return (
    <label
      style={{ width: size, height: size }}
      className={`${isChecked ? "bg-primary border-primary" : "border-secondary-700"} flex-center border rounded-sm transition-colors cursor-pointer`}
    >
      <input
        id={id}
        hidden
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      {isChecked && <Tick className="text-white" />}
    </label>
  );
}

export default Checkbox;
