export function CouponForm() {
  return (
    <form className="auth-form">
      <label>
        Kortingscode
        <input type="text" name="coupon" placeholder="Vul kortingscode in" />
      </label>

      <button className="button button--secondary" type="submit">
        Toepassen
      </button>
    </form>
  );
}