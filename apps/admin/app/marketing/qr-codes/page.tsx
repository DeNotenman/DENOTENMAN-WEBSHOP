import Link from "next/link";
import { archiveQrCodeAction, restoreQrCodeAction } from "../../../actions/qrcode.actions";
import { QRCodeWorkbench } from "../../../components/qrcodes/QRCodeWorkbench";
import { listAdminCategories, listAdminProducts } from "../../../lib/products";
import { listQrCodeDesigns } from "../../../lib/qrcodes";

export const dynamic = "force-dynamic";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("nl-NL", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function getTargetLabel(value: string) {
  const labels: Record<string, string> = {
    product: "Product",
    category: "Categorie",
    discount: "Kortingsactie",
    whatsapp: "WhatsApp",
    email: "E-mail",
    wifi: "WiFi",
    url: "URL",
    text: "Tekst",
  };

  return labels[value] ?? value;
}

export default async function QrCodesPage() {
  const [designs, products, categories] = await Promise.all([
    listQrCodeDesigns(),
    listAdminProducts(),
    listAdminCategories(),
  ]);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.denotenman.nl";
  const brandLogoUrl = `${siteUrl.replace(/\/+$/g, "")}/Notenman_onlynoot_icon.png`;

  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Marketing</p>
        <h1>QR-codes</h1>
        <span>Ontwerp, render, bewaar, exporteer en print De Notenman QR-codes als stickerlabels.</span>
      </section>

      <section className="admin-section">
        <h2>Nieuw ontwerp</h2>
        <QRCodeWorkbench
          products={products}
          categories={categories}
          siteUrl={siteUrl}
          brandLogoUrl={brandLogoUrl}
        />
      </section>

      <section className="admin-section">
        <h2>Opgeslagen ontwerpen</h2>
        <div className="admin-list">
          {designs.length === 0 ? <p>Nog geen QR-code ontwerpen opgeslagen.</p> : null}
          {designs.map((design) => (
            <article key={design.id} className="admin-list-row qr-design-row">
              <div>
                <h2>
                  <Link href={`/marketing/qr-codes/${design.id}`}>{design.name}</Link>
                </h2>
                <p>
                  {getTargetLabel(design.targetType)} - bijgewerkt {formatDate(design.updatedAt)}
                </p>
              </div>
              <span>{design.createdBy ?? "Admin"}</span>
              <strong>{design.status === "active" ? "Actief" : "Gearchiveerd"}</strong>
              <form action={design.status === "active" ? archiveQrCodeAction : restoreQrCodeAction}>
                <input type="hidden" name="id" value={design.id} />
                <button className="admin-button admin-button--ghost" type="submit">
                  {design.status === "active" ? "Archiveren" : "Herstellen"}
                </button>
              </form>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
