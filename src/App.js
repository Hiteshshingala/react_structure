import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import MainRouter from "./router/mainRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
      <ToastContainer autoClose={1500} />
    </BrowserRouter>
  );
}

export default App;
