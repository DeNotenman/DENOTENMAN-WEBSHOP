import Link from "next/link";

const pages = [
  { title: "Over ons", slug: "/over-ons", status: "Gepubliceerd" },
  { title: "Privacyverklaring", slug: "/privacyverklaring", status: "Gepubliceerd" },
  { title: "Retourbeleid", slug: "/retourbeleid", status: "Gepubliceerd" },
];

export default function CmsPagesPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>CMS</p>
        <h1>Pagina’s</h1>
        <span>Beheer vaste pagina’s, juridische content en SEO-inhoud.</span>
      </section>

      <section className="admin-list">
        {pages.map((page) => (
          <Link key={page.slug} href="/cms/paginas/over-ons" className="admin-list-row">
            <div>
              <h2>{page.title}</h2>
              <p>{page.slug}</p>
            </div>

            <strong>{page.status}</strong>
          </Link>
        ))}
      </section>
    </main>
  );
}
