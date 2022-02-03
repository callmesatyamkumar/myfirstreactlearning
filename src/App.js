import { useState } from "react";
import "./styles.css";

export default function App() {
  let [image, changeimg] = useState(
    "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80"
  );
  let [bot, boot] = useState(0);

  function merafunction() {
    changeimg(event.target.value);
  }

  function badho() {
    let counteksebadho = bot + 1;
    boot(counteksebadho);
  }

  return (
    <div className="App">
      <button onClick={badho}>hello {bot}</button>

      <input type="text" onChange={merafunction} />
      <img width="500px" src={image}></img>
    </div>
  );
}
