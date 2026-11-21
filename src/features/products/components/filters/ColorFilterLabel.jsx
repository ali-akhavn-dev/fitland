import Checkbox from "@/components/ui/Checkbox";

function ColorFilterItem({ inputId, option, onToggleFilter, selectedColors }) {
  const isChecked = selectedColors.includes(option.value);

  return (
    <label
      htmlFor={`${inputId}${option.value}`}
      className="w-full flex-between gap-4 py-1.5 pl-2 cursor-pointer"
    >
      <div className="flex-ic gap-3">
        <Checkbox
          id={`${inputId}${option.value}`}
          onChange={() => onToggleFilter("color", option.value)}
          checked={isChecked}
        />
        <div
          key={option.value}
          className={`w-10 h-4 rounded-sm transition-all border ${isChecked ? "opacity-100" : "opacity-60"} shadow-[0_0_4px_rgba(0,0,0,0.2)]`}
          style={{ background: option.hex }}
        >
          {isChecked && (
            <span className="size-full block rounded-sm border-2 border-white"></span>
          )}
        </div>
      </div>

      <span className="font-IRANSansX-Light text-xs">{option.label}</span>
    </label>
  );
}

export default ColorFilterItem;
