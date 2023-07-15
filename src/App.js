import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/signin" Component={SignInPage} exact />
      </Routes>
    </Router>
  );
}

export default App;
