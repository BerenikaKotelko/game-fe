import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import DeathScenario from "./components/DeathScenario";
import VictoryScenario from "./components/VictoryScenario";
import HomePage from "./components/HomePage";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [username, setUsername] = useState<string>("");
  // const handleAddUsername = async (username: string) => {
  //   console.log(username);
  //   await axios.post(`http://localhost:4000/username`, {
  //     userName: username,
  //   });
  // };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <WelcomePage username={username} setUsername={setUsername} />
            }
          />
          <Route
            path="/home-page"
            element={<HomePage username={username} setUsername={setUsername} />}
          />

          <Route path="/home-page/result/death" element={<DeathScenario />} />
          <Route
            path="/home-page/result/victory"
            element={<VictoryScenario />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
