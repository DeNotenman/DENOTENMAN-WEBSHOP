type VariantSelectorProps = {
  variants: Array<{
    id: string;
    label: string;
  }>;
};

export function VariantSelector({ variants }: VariantSelectorProps) {
  if (variants.length === 0) {
    return null;
  }

  return (
    <label className="form-field">
      <span>Variant</span>
      <select name="variantId">
        {variants.map((variant) => (
          <option key={variant.id} value={variant.id}>
            {variant.label}
          </option>
        ))}
      </select>
    </label>
  );
}
