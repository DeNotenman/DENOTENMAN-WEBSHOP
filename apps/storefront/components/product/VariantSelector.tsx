type VariantSelectorProps = {
  variants: string[];
};

export function VariantSelector({ variants }: VariantSelectorProps) {
  if (variants.length === 0) {
    return null;
  }

  return (
    <label className="form-field">
      <span>Variant</span>
      <select name="variant">
        {variants.map((variant) => (
          <option key={variant}>{variant}</option>
        ))}
      </select>
    </label>
  );
}
