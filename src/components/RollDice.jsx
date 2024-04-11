export default function RollDice({ currentDice, rollDice, selectedNumber }) {
  return (
    <>
      <div className="dice-container">
        <img
          onClick={rollDice}
          src={`/public/images/dice/${currentDice}.png`}
          alt={`dice ${currentDice}`}
        />
        <p>{selectedNumber ? "Click on Dice to roll" : "Select a Number"}</p>
      </div>
    </>
  );
}
