export default function Hero() {
  return (
    <section className="container" style={{ padding: "90px 0 70px" }}>
      <div style={{ maxWidth: "800px" }}>
        <div style={{ color: "var(--cyan)", fontWeight: 700 }}>
          LEARNING & CAREER INTELLIGENCE
        </div>

        <h1 style={{
          fontSize: "clamp(42px, 8vw, 76px)",
          lineHeight: 1.05,
          margin: "20px 0"
        }}>
          تعلّم → أتقن → أثبت → اعمل
        </h1>

        <p style={{
          color: "var(--muted)",
          fontSize: "20px",
          lineHeight: 1.8
        }}>
          منصة تربط المعرفة بالمهارات والأدلة والفرص المهنية.
        </p>

        <button style={{
          marginTop: "24px",
          padding: "14px 24px",
          border: 0,
          borderRadius: "14px",
          background: "var(--primary)",
          color: "white",
          fontWeight: 700
        }}>
          ابدأ التشخيص
        </button>
      </div>
    </section>
  );
}
