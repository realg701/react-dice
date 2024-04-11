import { useState } from "react";

export default function SelectButtons({ selectedNumber, setSelectedNumber }) {
  const arrNum = [
    { images: "/public/images/dice/1.png", number: 1 },
    { images: "/public/images/dice/2.png", number: 2 },
    { images: "/public/images/dice/3.png", number: 3 },
    { images: "/public/images/dice/4.png", number: 4 },
    { images: "/public/images/dice/5.png", number: 5 },
    { images: "/public/images/dice/6.png", number: 6 },
  ];

  return (
    <>
      <div className="select-btns">
        {arrNum.map((value) => (
          <button
            key={value.number}
            className={
              value.number == selectedNumber
                ? "select-btn selected"
                : "select-btn"
            }
            onClick={() => setSelectedNumber(value.number)}
          >
            <img src={value.images} alt="" />
          </button>
        ))}
      </div>
    </>
  );
}
