import React from "react";
import { nextOddPerfectSquare } from "./math";
import "./style.css";
import { clone } from "lodash";

const toPixelCoords = (x, y, origin) => {
  return { x: x * 16 + origin.x, y: y * 16 + origin.y };
};

const moves = ["x -=", "y +=", "x +=", "y -="];

const getCoords = (n, origin) => {
  if (n === 1) {
    return toPixelCoords(0, 0, origin);
  } else {
    const nextSquare = nextOddPerfectSquare(n);
    const size = Math.sqrt(nextSquare);
    const rowNumber = Math.floor(size / 2);
    const nextSquarePosition = { x: rowNumber, y: -rowNumber };
    const thisPosition = clone(nextSquarePosition);
    const distance = nextSquare - n;
    const fullSidesToWalk = Math.floor(distance / (size - 1));
    const remainderSteps = distance % (size - 1);
    let i;
    for (i = 0; i < fullSidesToWalk; i++) {
      eval(`thisPosition.${moves[i]} ${size - 1}`);
    }
    eval(`thisPosition.${moves[i]} ${remainderSteps}`);
    return toPixelCoords(thisPosition.x, thisPosition.y, origin);
  }
};

const NumberSquare = ({ n, origin, isPrime }) => {
  const { x, y } = getCoords(n, origin);
  return (
    <div
      style={{ left: x, top: y, background: isPrime ? "lightgreen" : "" }}
      className="numberSquare"
    >
      {n}
    </div>
  );
};

export default NumberSquare;
