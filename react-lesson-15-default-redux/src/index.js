import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";

window.store = store;
console.log(store);
ReactDOM.render(<App store={store}/>, document.getElementById("root"));
