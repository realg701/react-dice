export default function StartGame({ toggle }) {
  return (
    <>
      <div className="score">
        <h3>Start Game</h3>
        <div>
          <img src="/public/images/start.jpg" alt="" />
        </div>
      </div>
      <div className="game-btns">
        <button onClick={toggle} className="custom-btn">
          Start
        </button>
      </div>
    </>
  );
}
