export default function RollDice({ currentDice, rollDice, selectedNumber }) {
  return (
    <>
      <div className="dice-container">
        <img
          onClick={rollDice}
          src={`/react-dice/images/dice/${currentDice}.png`}
          alt={`dice ${currentDice}`}
        />
        <p>
          {selectedNumber ? "Click on Dice to roll" : "Select a Dice number"}
        </p>
      </div>
    </>
  );
}
