import "./App.css";
import { useCallback, useMemo, useState } from "react";
import AddB from "./button";
import Task from "./tasks";
import img0 from "./assets/img0.jpeg";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.png";
import img6 from "./assets/img6.png";

function App() {
  const [page, showpage] = useState();
  const [count, setcount] = useState(localStorage.getItem("count"));
  const [obj, setobj] = useState(JSON.parse(localStorage.getItem("tasks")));
  const [force, setforce] = useState(0);
  function reset() {
    setcount(() => {
      localStorage.setItem("count", 0);
      return 0;
    });
  }
  const backgroundimage = useMemo(() => {
    if (count <= 1000) return img0;
    if (count <= 2000) return img1;
    if (count <= 3000) return img2;
    if (count <= 4000) return img3;
    if (count <= 5000) return img4;
    return img6; // For points > 500
  }, [count]);
  const loser = useCallback((id) => {
    setobj((old) => {
      let c = old.length;
      for (let i = 0; i < c; i++) {
        if (old[i].id == id) {
          old.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("tasks", JSON.stringify(old));
      return old;
    });
    setforce((old) => old + 1);
  }, []);
  return (
    <>
      {page}
      <div
        className="all"
        style={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="task-manager">
          <div className="counter-section">
            <h1 className="snow-counter">{count}</h1>
            <h1 className="snow-counter breathing"></h1>
            <button onClick={reset} className="reset-btn">
              reset
            </button>
          </div>
          <div className="add-btn">
            <AddB f={showpage} setcount={setcount} setobj={setobj} />
          </div>

          <div className="tasks-container">
            {obj.map((el) => (
              <Task
                title={el.title}
                description={el.description}
                points={el.points}
                id={el.id}
                key={el.key}
                setcount={setcount}
                setobj={loser}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
