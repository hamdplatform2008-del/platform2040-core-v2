export default function IntelligenceCards() {
  const cards = [
    {
      label: "MASTERY",
      value: "82%",
      text: "مستوى الإتقان عبر المفاهيم التي تعلمتها.",
      accent: "var(--primary)",
    },
    {
      label: "SKILL GAP",
      value: "03",
      text: "فجوات معرفية ومهارية تحتاج إلى معالجة.",
      accent: "var(--secondary)",
    },
    {
      label: "NEXT ACTION",
      value: "Physics",
      text: "الخطوة التالية المقترحة بناءً على تشخيصك.",
      accent: "var(--cyan)",
    },
  ];

  return (
    <section id="learning" className="container" style={{ padding: "50px 0 90px" }}>
      <div style={{ marginBottom: "28px" }}>
        <div style={{ color: "var(--cyan)", fontWeight: 700 }}>
          LEARNING INTELLIGENCE
        </div>
        <h2 style={{ fontSize: "42px", margin: "10px 0" }}>
          اعرف أين أنت.
        </h2>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}>
        {cards.map((card) => (
          <article className="card" key={card.label}>
            <div style={{
              color: card.accent,
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.12em",
            }}>
              {card.label}
            </div>

            <strong style={{
              display: "block",
              fontSize: "42px",
              margin: "24px 0 12px",
            }}>
              {card.value}
            </strong>

            <p style={{
              color: "var(--muted)",
              lineHeight: 1.8,
              margin: 0,
            }}>
              {card.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
