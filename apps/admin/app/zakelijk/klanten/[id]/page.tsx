import { BusinessModuleNotice } from "../../../../components/b2b/BusinessModuleNotice";
import { getBusinessModuleStatus } from "../../../../lib/business";

export default async function AdminBusinessCustomerDetailPage() {
  const status = await getBusinessModuleStatus();

  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijke klant</p>
        <h1>Klantdetail</h1>
        <span>Zakelijke klantdetails worden pas getoond zodra B2B-opslag is ingericht.</span>
      </section>

      <BusinessModuleNotice status={status} />
    </main>
  );
}
