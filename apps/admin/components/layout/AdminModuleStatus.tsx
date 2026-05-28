type AdminModuleStatusProps = {
  title: string;
  description: string;
  items: string[];
};

export function AdminModuleStatus({ title, description, items }: AdminModuleStatusProps) {
  return (
    <section className="admin-card admin-status-panel">
      <div>
        <strong>Nog niet ingericht</strong>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <ul className="admin-plain-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
