import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import  store  from "./store/store.js";
import * as actions from './store/actions.js'
store.dispatch(actions.addBug())
store.dispatch(actions.addBug())
store.dispatch(actions.addBug())
console.log(store.getState());
store.dispatch(actions.removeBug(3))
console.log(store.getState());
store.dispatch(actions.resolveBug(1))
console.log(store.getState());



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
