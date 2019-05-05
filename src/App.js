import React from "react";
import NumberSquare from "./NumberSquare";
import { isPrime, nextPerfectSquare } from "./math";
import "./style.css";

const SIZE = 20000;
const numbers = [...Array(SIZE).keys()].map(n => ({
  value: n + 1,
  isPrime: isPrime(n + 1)
}));
const origin = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

function App() {
  const numberSquares = numbers.map(number => (
    <NumberSquare
      key={number.value}
      n={number.value}
      isPrime={number.isPrime}
      origin={origin}
      size={5}
    />
  ));
  return <div className="App">{numberSquares}</div>;
}

export default App;
