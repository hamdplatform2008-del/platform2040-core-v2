export default function VisualizeLearning() {
  return (
    <section className="container" style={{ padding: "40px 0 90px" }}>
      <div style={{ marginBottom: "28px" }}>
        <div style={{ color: "var(--secondary)", fontWeight: 700 }}>
          VISUALIZE LEARNING
        </div>

        <h2 style={{ fontSize: "42px", margin: "10px 0" }}>
          حوّل معرفتك إلى صورة.
        </h2>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
      }}>
        <article className="card" style={{ minHeight: "300px" }}>
          <div style={{ color: "var(--cyan)", fontWeight: 700 }}>
            CONCEPT MAP
          </div>

          <div style={{
            height: "160px",
            margin: "24px 0",
            position: "relative",
          }}>
            <span className="concept-node node-a" />
            <span className="concept-node node-b" />
            <span className="concept-node node-c" />
            <span className="concept-node node-d" />
          </div>

          <h3>خريطة المفاهيم</h3>
          <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
            اكتشف العلاقات والمتطلبات بين المفاهيم.
          </p>
        </article>

        <article className="card" style={{ minHeight: "300px" }}>
          <div style={{ color: "var(--primary)", fontWeight: 700 }}>
            MASTERY HEATMAP
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            gap: "8px",
            margin: "50px 0 30px",
          }}>
            {Array.from({ length: 32 }).map((_, index) => (
              <span
                key={index}
                style={{
                  aspectRatio: "1",
                  borderRadius: "6px",
                  background:
                    index % 5 === 0
                      ? "var(--cyan)"
                      : index % 3 === 0
                        ? "var(--primary)"
                        : "rgba(91, 140, 255, 0.18)",
                }}
              />
            ))}
          </div>

          <h3>خريطة الإتقان</h3>
          <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
            رؤية مباشرة لنقاط القوة والفجوات.
          </p>
        </article>
      </div>
    </section>
  );
}
