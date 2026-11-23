function RadioButton({ name, value, id, checked, onChange }) {
  return (
    <div>
      <label className="relative after:scale-0 after:absolute after:inset-0 after:border-3 after:border-white after:rounded-full after:bg-primary after:transition-all size-5 block border rounded-full cursor-pointer has-checked:border has-checked:border-primary has-checked:after:scale-100">
        <input
          id={id}
          type="radio"
          hidden
          checked={checked}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default RadioButton;
