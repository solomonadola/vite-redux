import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import * as actions from "./store/bugs.js"
import  store  from "./store/configureStore.js";

store.dispatch(actions.bugAdded({description:"bug added"}))
store.dispatch(actions.bugAdded({description:"bug added"}))
store.dispatch(actions.bugAdded({description:"bug added"}))
console.log(store.getState());
store.dispatch(actions.bugRemoved({id:1}))
console.log(store.getState());
store.dispatch(actions.bugResolved({id:2}))
console.log(store.getState());



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
