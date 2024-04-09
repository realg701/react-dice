import CasinoIcon from "@mui/icons-material/Casino";
import { useState } from "react";
import StartGame from "./components/StartGame";
import DiceGame from "./components/DiceGame";

export default function Todo() {
  const [value, setValue] = useState("");
  return (
    <>
      <div id="sidebar" className="App">
        {/* other elements */}
        <div className="container-fluid">
          <div className="todo-app aio-app">
            <h1 className="">
              Dice Game <CasinoIcon fontSize="large" />
            </h1>
            <StartGame />
            <DiceGame />
          </div>
        </div>
      </div>
    </>
  );
}
