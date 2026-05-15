const reviews = [
  { customer: "Jan Jansen", product: "Amandelen ongezouten", rating: "5/5", status: "Goedgekeurd" },
  { customer: "Sanne van Dijk", product: "Notenmix luxe", rating: "4/5", status: "In review" },
];

export default function ReviewsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Reviews</p>
        <h1>Productreviews</h1>
        <span>Bekijk, keur goed en beheer klantreviews.</span>
      </section>

      <section className="admin-list">
        {reviews.map((review) => (
          <article key={`${review.customer}-${review.product}`} className="admin-list-row">
            <div>
              <h2>{review.product}</h2>
              <p>{review.customer}</p>
            </div>

            <span>{review.rating}</span>
            <strong>{review.status}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}