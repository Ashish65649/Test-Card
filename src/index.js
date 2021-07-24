import ReactDOM from "react-dom";
import "./index.css";
import MyApp from "./App";

// Rendering simply means loading the component inside the memory to
// create Virtual DOM

ReactDOM.render(<MyApp />, document.querySelector("#root"));
