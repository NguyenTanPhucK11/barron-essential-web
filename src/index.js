import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import thunk from "redux-thunk";
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))
);

ReactDOM.render(<App />, document.getElementById("root"));
