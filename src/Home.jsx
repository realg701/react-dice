import CasinoIcon from "@mui/icons-material/Casino";
import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

export default function Game() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      <div id="sidebar" className="App">
        {/* other elements */}
        <div className="container-fluid">
          <div className=" aio-app">
            <h1 className="">
              Dice Game <CasinoIcon fontSize="large" />
            </h1>
            {isGameStarted ? (
              <GamePlay />
            ) : (
              <StartGame toggle={toggleGamePlay} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
