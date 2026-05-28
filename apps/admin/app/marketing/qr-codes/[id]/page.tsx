import { notFound } from "next/navigation";
import { QRCodeWorkbench } from "../../../../components/qrcodes/QRCodeWorkbench";
import { listAdminCategories, listAdminProducts } from "../../../../lib/products";
import { getQrCodeDesign } from "../../../../lib/qrcodes";

export const dynamic = "force-dynamic";

type QrCodeDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function QrCodeDetailPage({ params }: QrCodeDetailPageProps) {
  const { id } = await params;
  const [design, products, categories] = await Promise.all([
    getQrCodeDesign(id),
    listAdminProducts(),
    listAdminCategories(),
  ]);

  if (!design) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.denotenman.nl";
  const brandLogoUrl = `${siteUrl.replace(/\/+$/g, "")}/Notenman_onlynoot_icon.png`;

  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>QR-code</p>
        <h1>{design.name}</h1>
        <span>Pas het doel, ontwerp, exportbestand en stickerlabel-raster aan.</span>
      </section>

      <QRCodeWorkbench
        initialDesign={design}
        products={products}
        categories={categories}
        siteUrl={siteUrl}
        brandLogoUrl={brandLogoUrl}
      />
    </main>
  );
}
