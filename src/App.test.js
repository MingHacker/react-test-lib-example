import React from "react";
import { App } from "./App";

// In the place of the commented out code comes
// in testing-library/react
import { render } from "@testing-library/react";

// import ReactDOM from "react-dom";
// import { within } from "@testing-library/dom";
// const render = (component) => {
//   const root = document.createElement("div");
//   ReactDOM.render(component, root);

//   return within(root);
// };

test("it works", () => {
  const { getByText, getByLabelText } = render(<App />);

  getByText("TODOS");
  getByLabelText("What needs to be done?");
  getByText("Add #1");
});
