import { useState } from "react";
import RollDice from "./RollDice";
import SelectButtons from "./SelectButtons";

export default function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(0);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice = () => {
    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  return (
    <>
      <div className="score">
        <h3>Total score: {score}</h3>
        <div>
          <SelectButtons
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
          <RollDice
            rollDice={rollDice}
            currentDice={currentDice}
            setSelectedNumber={setSelectedNumber}
            selectedNumber={selectedNumber}
            error={error}
            setError={setError}
          />
        </div>
      </div>
      <div className="game-btns">
        <button className="spin-btn custom-btn">Rules</button>
        <button
          onClick={() => {
            setScore(0);
            setSelectedNumber(undefined);
            setCurrentDice(0);
          }}
          className="reset-btn custom-btn"
        >
          Reset
        </button>
      </div>
    </>
  );
}
