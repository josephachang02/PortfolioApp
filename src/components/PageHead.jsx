// Top of each discipline page: colored kicker, title, intro paragraphs
export default function PageHead({ kicker, title, intro }) {
  return (
    <header className="page-head">
      <div className="wrap">
        <div className="kicker">{kicker}</div>
        <h1>{title}</h1>
        <div className="intro">{intro.map((t) => <p key={t.slice(0, 20)}>{t}</p>)}</div>
      </div>
    </header>
  );
}
