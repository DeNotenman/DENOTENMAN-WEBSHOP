import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h2>Pagina niet gevonden</h2>
      <p style={{ margin: "1rem 0" }}>De opgevraagde pagina kon niet worden gevonden.</p>
      <Link 
        href="/"
        style={{ 
          color: "var(--foreground)", 
          textDecoration: "underline",
          fontWeight: 500
        }}
      >
        Terug naar home
      </Link>
    </div>
  );
}
