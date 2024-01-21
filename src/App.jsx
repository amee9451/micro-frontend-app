import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import Header from "nav/Header";
// import Footer from "nav/Footer";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const Footer = lazy(() => import("nav/Footer"));

import { StoreProvider, useStore } from "store/store";
import "./App.css";
const App = () => {
  const { count, increment } = useStore();
  return (
    <div className="AppShell">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        Container
        <div>Name: host</div>
        <div>Count: {count}</div>
        <div>
          <button
            onClick={increment}
            className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
          >
            Add To Cart
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/auth" element={<Register />} />
        </Routes>
      </div>
      <div className="footer">
        <Suspense fallback="<div>Loading....</div>">
          <Footer />
        </Suspense>
        {/* <Footer /> */}
      </div>
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById("app")
);
