import React from "react";
import "./App.css";
import Card from "./Card";
import arr from "./Dummy.js";

function MyApp() {
  // const [time, setTime] = useState(0);

  function loop(value, index) {
    return (
      <Card
        key={index}
        srcUrl={value.srcUrl}
        title={value.title}
        text={value.text}
        buttonLink={value.buttonLink}
      />
    );
  }

  return (
    <>
      <nav className="mynav"> My 5 favourite images </nav>
      <div className="content">{arr.map(loop)}</div>
      <footer className="footer"> Made By Aashish </footer>
    </>
  );
}

export default MyApp;

/* <div className="cls">
  <div className="center" style={{ textAlign: "center" }}>
    <p> You clicked {time} times </p>
    <button onClick={(e) => setTime(time + 1)}> Click Here </button>
  </div>
</div>; */

// import Greet from './Greet';
// import Add , { sub , mul , div } from './Math';

// Inside React Fragments we can only pass JSX , not React.createElement();

// function add(a, b) {
// 	return a + b;
// }

// Whenever we call a method it is first searched inside the components then only
// outside the components

// function subtract(a, b) {
// 	return a - b;
// }
