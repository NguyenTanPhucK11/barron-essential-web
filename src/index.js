import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { reduxFirestore, getFirestore } from "redux-firestore";
// import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
// import fbConfig from "./config/fbConfig";
// import rootReducer from "./store/reducers/rootReducer";

// const store = createStore(
//   //   rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reduxFirestore(),
//     reactReduxFirebase()
//   )
// );

ReactDOM.render(<App />, document.getElementById("root"));
