import React from "react";
import NumberSquare from "./NumberSquare";
import { isPrime, nextPerfectSquare } from "./math";
import "./style.css";

let SIZE = 30000;

const origin = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: SIZE,
      numbers: [...Array(SIZE).keys()].map(n => ({
        value: n + 1,
        isPrime: isPrime(n + 1)
      }))
    };
  }

  render() {
    const numberSquares = this.state.numbers.map(number => (
      <NumberSquare
        key={number.value}
        n={number.value}
        isPrime={number.isPrime}
        origin={origin}
        size={5}
      />
    ));
    return <svg className="App">{numberSquares}</svg>;
  }
}

export default App;
