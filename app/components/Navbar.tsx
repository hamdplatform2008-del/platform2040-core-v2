export default function Navbar() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        background: "rgba(7, 11, 20, 0.72)",
        backdropFilter: "blur(18px)",
        position: "sticky",
        top: 0,
        zIndex: 20,
      }}
    >
      <div
        className="container"
        style={{
          minHeight: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <strong style={{ fontSize: "22px" }}>Platform2040</strong>

        <nav
          style={{
            display: "flex",
            gap: "24px",
            color: "var(--muted)",
          }}
        >
          <a href="#learning">التعلّم</a>
          <a href="#skills">المهارات</a>
          <a href="#career">المسار المهني</a>
          <a href="#ai">AI</a>
        </nav>
      </div>
    </header>
  );
}
