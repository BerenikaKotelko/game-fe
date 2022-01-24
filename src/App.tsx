import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import DeathScenario from "./components/DeathScenario";
import VictoryScenario from "./components/VictoryScenario";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/result/death" element={<DeathScenario />} />
          <Route path="/result/victory" element={<VictoryScenario />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
