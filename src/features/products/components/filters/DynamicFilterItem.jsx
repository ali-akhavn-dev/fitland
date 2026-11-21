import Checkbox from "@/components/ui/Checkbox";

function DynamicFilterItem({
  inputId,
  option,
  onToggleFilter,
  selectedFilter,
  slug,
}) {
  const EXCEPTIONS = ["shoe_size"];

  return (
    <label
      htmlFor={`${inputId}${option.value}`}
      className="w-full flex-between gap-4 py-2 pl-2 border-b border-ededed cursor-pointer"
    >
      <div className="flex-ic gap-3">
        <Checkbox
          id={`${inputId}${option.value}`}
          onChange={() => onToggleFilter(slug, option.value)}
          checked={selectedFilter.includes(option.value)}
          size={16}
        />

        <span
          key={option.value}
          className={`block transition-all text-sm border border-transparent`}
          style={{ background: option.hex }}
        >
          {option.label}
        </span>
      </div>

      {!EXCEPTIONS.includes(slug) && (
        <span className="font-IRANSansX-Light text-xs">{option.value}</span>
      )}
    </label>
  );
}

export default DynamicFilterItem;
