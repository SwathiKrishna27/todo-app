
import React from 'react';
import ReactDOM from "react-dom";
//import AppContainer from "./Components/appcontainer";
//import TaskContainer from "./Components/taskc";
//import SingleTask from "./Components/singletask";

import App from "./App";
//import Greet from "./Greet";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
rootElement
);