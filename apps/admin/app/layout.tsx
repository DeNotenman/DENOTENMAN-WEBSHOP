import "../styles/globals.css";

export const metadata = {
  title: "Admin | De Notenman",
  description: "Beheeromgeving voor De Notenman.",
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body>
        <div className="admin-shell">{children}</div>
      </body>
    </html>
  );
}