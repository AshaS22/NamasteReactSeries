import React from "react";
import ReactDOM from "react-dom/client";
import {HeaderAssignment} from './HeaderAssignment';

//React.createElement => Creates an Object => When we render this Object on DOM, it becomes an HTML Element

// const heading = React.createElement("h1", {}, "Namaste from Reacttttt");

//JSX

// React Element
// JSX ------>(Transpiled)ReactElement => JS Object => HTML ELement
const h1 = <h1>Namaste from React1</h1>;

// React functional component
const Heading = () => <h1>React functional component</h1>;

// Assignment
const header = (
  <div className="title" id="1" tabIndex={0}>
    <h1>
      <h2>
        <h3>Hello from element</h3>
      </h2>
    </h1>
  </div>
);

// Component composition
const Header = () => (
  <div className="title">
    <h1>
      <h2>
        <h3>Hello from Component</h3>
      </h2>
    </h1>
    {header}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderAssignment />);