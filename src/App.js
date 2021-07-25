import React from "react";
import "./App.css";
import Profile from "./Profile";

function MyApp() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = count;
  // });

  // function Inc() {
  //   setCount(count + 1);
  // }

  return (
    <>
      <div className="cls">
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
    </>
  );
}

export default MyApp;

/* <div className="center">
  <button onClick={Inc} style={{ flex: 1 }}>
    Click Here
  </button>
</div>; */

/* <p style={{ textAlign: "center" }}> {count} </p>; */

// let curr = new Date().toLocaleTimeString();
// const [time, setTime] = useState(curr);

// setInterval(() => {
//   setTime(new Date().toLocaleTimeString());
// }, 1000);

/* <button> Click Here </button>; */

// function change(event) {
//   console.log(event.target.value);
// }

// function loop(value, index) {
//   if (index % 2 === 0 || index % 2 === 1) {
//     return (
//       <Card
//         key={index}
//         srcUrl={value.srcUrl}
//         title={value.title}
//         text={value.text}
//         buttonLink={value.buttonLink}
//       />
//     );
//   }
// }

// import Card from "./Card";
// import arr from "./Dummy.js";

// Inside curley braces {} we can write JSX too.
// Both examples below are valid example
// {
//   {x === 5 ? <h1> Ashish </h1> : <h1> Adarsh </h1>}
// }
// {
//   <h1> Ashish Ranjan </h1>
// }

/* <nav className="mynav"> My 5 favourite images </nav>
<div className="content">{arr.map(loop)}</div>
<footer className="footer"> Made By Aashish </footer> */

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

// Component is first rendered then useEffect hook runs

// 1). componentDidMount()
// This method is called immediately after the component is rendered first time and is mounted in the
// browser's DOM and this method is called only once in the lifetime of the component.
// 2). componentDidUpdate()
// This method is called every time the component is updated due to change in state or props.
// 3). componentWillUnmount()
// This method is called before removing of the component from the browser's DOM .
// It also run only once in the lifetime of the component.
