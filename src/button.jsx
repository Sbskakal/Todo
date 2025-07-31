import "./button.css";
import { useState, useRef } from "react";

function Page({ f, setobj }) {
  class tack {
    constructor(title, description, points, key, id) {
      (this.title = title),
        (this.description = description),
        (this.points = points),
        (this.key = key),
        (this.id = id);
    }
  }
  const [text1, settext1] = useState("");
  const [text2, settext2] = useState("");
  const [number, setnumber] = useState(0);
  function deletes() {
    f(() => {
      return <></>;
    });
  }

  function addT() {
    const newId = Date.now();
    let a = new tack(text1, text2, number, newId, newId);
    setobj((old1) => {
      old1.push(a);
      localStorage.setItem("tasks", JSON.stringify(old1));
      return old1;
    });
    f(() => {
      return <></>;
    });
  }
  const textref = useRef();
  const numberef = useRef();
  const handlekeydown = (e) => {
    if (e.key == "Enter") {
      textref.current.focus();
    }
  };
  const handlekeydown2 = (e) => {
    if (e.key == "Enter") {
      numberef.current.focus();
    }
  };
  const finalkey = (e) => {
    if (e.key == "Enter") {
      addT();
    }
  };

  return (
    <>
      <div className="alladd">
        <div className="water-card">
          <h3 className="card-title">Add tasks</h3>
          <button onClick={deletes} className="close-btn">
            close
          </button>
          <div className="inputs">
            <input
              type="text"
              onChange={(e) => {
                settext1(e.target.value);
              }}
              value={text1}
              className="water-input2"
              onKeyDown={handlekeydown}
            />
            <input
              ref={textref}
              type="text"
              onChange={(e) => {
                settext2(e.target.value);
              }}
              value={text2}
              className="water-input"
              onKeyDown={handlekeydown2}
            />
          </div>

          <input
            className="number-input-water"
            type="number"
            onChange={(e) => {
              setnumber(e.target.value);
            }}
            value={number}
            ref={numberef}
            onKeyDown={finalkey}
          />
          <button onClick={() => addT()} className="ok-btn">
            OK
          </button>
        </div>
      </div>
    </>
  );
}

export default function AddB({ f, setcount, setobj }) {
  function handleclick() {
    f(() => {
      return <Page f={f} setcount={setcount} setobj={setobj} />;
    });
  }
  return (
    <>
      <div>
        <button className="plus-button" onClick={handleclick}>
          +
        </button>
      </div>
    </>
  );
}
