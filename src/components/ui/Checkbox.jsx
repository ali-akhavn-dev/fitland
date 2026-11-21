import Tick from "./Icon/Tick";

function Checkbox({ name, checked = false, onChange, size = 16, id }) {
  const handleChange = (e) => {
    onChange?.(e);
  };

  return (
    <label
      style={{ width: size, height: size }}
      className={`${checked ? "bg-primary border-primary" : "border-secondary-700"} flex-center border rounded-sm transition-colors cursor-pointer`}
    >
      <input
        id={id}
        hidden
        name={name}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      {checked && <Tick className="text-white" />}
    </label>
  );
}

export default Checkbox;
