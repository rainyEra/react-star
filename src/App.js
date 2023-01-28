import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [text, setText] = useState([1, 2, 3, 4, 5]);
  const [stars, setStars] = useState(null);
  const [checkedx, setChecked] = useState(false);
  function asd(i) {
    console.log(i);
    if (i === stars) {
      setStars(null);
    } else {
      setStars(i);
    }
  }
  useEffect(() => {
    console.log('stars', stars);
  }, [stars]);
  return (
    <div className={'App'}>
      {text.map((el) => (
        <div
          className={`${stars >= el ? 'Dq' : ''}`}
          onClick={(e) => asd(el)}
        >
          *
        </div>
      ))}
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <h1>{text} </h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <br />
      <input type="checkbox" onChange={() => setChecked(!checkedx)}/>
      <button disabled={!checkedx}>True</button>
      {checkedx.toString()} */}
    </div>
  );
}
