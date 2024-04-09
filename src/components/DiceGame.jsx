export default function DiceGame() {
  return (
    <>
      <div className="score">
        <h3>Total score: {30}</h3>
        <img src="/src/assets/select-new.png" alt="" />
      </div>
      <div className="game-btns">
        <button className="spin-btn custom-btn">Spin</button>
        <button className="reset-btn custom-btn">Reset</button>
      </div>
    </>
  );
}
