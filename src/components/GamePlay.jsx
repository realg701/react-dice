import RollDice from "./RollDice";
import SelectButtons from "./SelectButtons";

export default function GamePlay() {
  return (
    <>
      <div className="score">
        <h3>Total score: {30}</h3>
        <div>
          <SelectButtons />
          <RollDice />
        </div>
      </div>
      <div className="game-btns">
        <button className="spin-btn custom-btn">Spin</button>
        <button className="reset-btn custom-btn">Reset</button>
      </div>
    </>
  );
}
