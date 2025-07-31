import "./tasks.css";

export default function Task({
  title,
  description,
  points,
  id,
  setcount,
  setobj,
}) {
  function loser() {
    setobj(id);
  }
  function great() {
    setcount((old) => {
      let a = Number(points);
      let b = Number(old);
      localStorage.setItem("count", a + b);
      return a + b;
    });
    setobj(id);
  }

  return (
    <>
      <div className="mission-card">
        <div className="card-header">
          <span className="points">{points}</span>
          <h3 className="title">{title}</h3>
        </div>

        <p className="description">{description}</p>
        <div className="card-actions">
          <button onClick={great} className="btn done">
            done
          </button>
          <button onClick={loser} className="btn miss">
            xkwa lah
          </button>
        </div>
      </div>
    </>
  );
}
