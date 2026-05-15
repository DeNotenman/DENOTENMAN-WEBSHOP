const posts = [
  { title: "Waarom ongebrande noten populair zijn", category: "Noten", status: "Gepubliceerd" },
  { title: "Zakelijk noten bestellen", category: "Zakelijk", status: "Concept" },
];

export default function BlogPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>CMS</p>
        <h1>Blog</h1>
        <span>Beheer blogartikelen, categorieën en publicatiestatussen.</span>
      </section>

      <section className="admin-list">
        {posts.map((post) => (
          <a key={post.title} href="/cms/blog/voorbeeld-artikel" className="admin-list-row">
            <div>
              <h2>{post.title}</h2>
              <p>{post.category}</p>
            </div>

            <strong>{post.status}</strong>
          </a>
        ))}
      </section>
    </main>
  );
}