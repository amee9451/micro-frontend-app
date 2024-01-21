import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

import { StoreProvider } from "store/store";

import "./index.scss";
import Footer from "./Footer";

const App = () => (
  <StoreProvider>
    <BrowserRouter basename="/">
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Header />
        <Footer />
        <div>Name: nav</div>
      </div>
    </BrowserRouter>
  </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
