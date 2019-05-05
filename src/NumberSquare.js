import React from "react";
import { nextOddPerfectSquare } from "./math";
import "./style.css";
import { clone } from "lodash";

const toPixelCoords = (x, y, origin, size) => {
  return { x: x * size + origin.x, y: y * size + origin.y };
};

const moves = ["x -=", "y +=", "x +=", "y -="];

const getCoords = (n, origin, squareSize) => {
  if (n === 1) {
    return toPixelCoords(0, 0, origin, squareSize);
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
    return toPixelCoords(thisPosition.x, thisPosition.y, origin, squareSize);
  }
};

class NumberSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false
    };
  }

  render() {
    const { n, origin, isPrime, size } = this.props;
    const { mouseOver } = this.state;
    const { x, y } = getCoords(n, origin, size);
    return (
      <rect
        x={mouseOver ? x - size : x}
        y={mouseOver ? y - size : y}
        width={mouseOver ? size * 3 : size}
        height={mouseOver ? size * 3 : size}
        style={{
          fill: isPrime ? "lightgreen" : "white",
          stroke: "lightgrey",
          strokeWidth: 0.25
        }}
        className="numberSquare"
        onMouseEnter={() => {
          this.setState({ mouseOver: true });
        }}
        onMouseLeave={() => {
          this.setState({ mouseOver: false });
        }}
      />
    );
  }
}

export default NumberSquare;
