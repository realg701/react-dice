import { useState } from "react";

export default function SelectButtons() {
  const arrNum0 = [
    "/public/images/1.png",
    "/public/images/2.png",
    "/public/images/3.png",
  ];
  const arrNum1 = [
    "/public/images/4.png",
    "/public/images/5.png",
    "/public/images/6.png",
  ];
  const [selectedNumber, setSelectedNumber] = useState();
  console.log(selectedNumber);
  return (
    <>
      <div className="game-btns">
        {arrNum0.map((value, i) => (
          <button
            onClick={() => setSelectedNumber(value)}
            className="select-btn"
            key={i}
          >
            <img src={value} alt="" />
          </button>
        ))}
      </div>
      <div className="game-btns">
        {arrNum1.map((value, i) => (
          <button
            onClick={() => setSelectedNumber(value)}
            className="select-btn"
            key={i}
          >
            <img src={value} alt="" />
          </button>
        ))}
      </div>
    </>
  );
}
