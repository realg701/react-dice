export default function GamePlay() {
  return (
    <>
      <div className="score">
        <h3>Total score: {30}</h3>
        <div>
          <img src="/public/images/select-new.png" alt="" />
          <div>{0}</div>
        </div>
      </div>
      <div className="game-btns">
        <button className="spin-btn custom-btn">Spin</button>
        <button className="reset-btn custom-btn">Reset</button>
      </div>
    </>
  );
}
