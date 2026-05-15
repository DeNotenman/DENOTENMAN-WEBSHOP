export function VariantSelector() {
  return (
    <label className="form-field">
      <span>Variant</span>
      <select name="variant">
        <option>Ongezouten</option>
        <option>Gezouten</option>
        <option>Gebrand</option>
        <option>Ongebrand</option>
      </select>
    </label>
  );
}