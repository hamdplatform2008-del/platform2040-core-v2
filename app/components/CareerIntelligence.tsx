export default function CareerIntelligence() {
  return (
    <section id="career" className="container" style={{ padding: "40px 0 100px" }}>
      <div style={{ marginBottom: "28px" }}>
        <div style={{ color: "var(--success)", fontWeight: 700 }}>
          CAREER INTELLIGENCE
        </div>

        <h2 style={{ fontSize: "42px", margin: "10px 0" }}>
          ابنِ مستقبلك بالأدلة.
        </h2>

        <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
          لا يكفي أن تقول إنك تمتلك مهارة؛ أثبتها، ثم اربطها
          بالمسار الأكاديمي والمهني المناسب.
        </p>
      </div>

      <div
        id="skills"
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: "20px",
        }}
      >
        <article className="card">
          <div style={{ color: "var(--primary)", fontWeight: 700 }}>
            SKILL PASSPORT
          </div>

          <h3 style={{ fontSize: "28px" }}>
            مهاراتك القابلة للإثبات
          </h3>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "24px",
          }}>
            {[
              "English C1",
              "Data Analysis",
              "Excel",
              "PowerPoint",
              "Research",
              "AI Literacy",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  border: "1px solid var(--border)",
                  background: "var(--surface-2)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </article>

        <article className="card">
          <div style={{ color: "var(--cyan)", fontWeight: 700 }}>
            CAREER READINESS
          </div>

          <strong style={{
            display: "block",
            fontSize: "56px",
            margin: "20px 0 8px",
          }}>
            76%
          </strong>

          <p style={{
            color: "var(--muted)",
            lineHeight: 1.7,
          }}>
            مستوى الجاهزية لمسارك المستهدف بناءً على المهارات
            والأدلة والإنجازات.
          </p>
        </article>
      </div>
    </section>
  );
}
