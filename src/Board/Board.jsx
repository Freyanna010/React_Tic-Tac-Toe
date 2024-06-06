import React from "react";
import Square from "../Square/Square";
  
const Board = ({xIsNext, squares, onPlay}) =>{
const handlerClick = (i) =>{
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
 }

   const winner = calculateWinner(squares);
   let status;
   if (winner) {
     status = "Winner: " + winner;
   } else {
     status = "Next player: " + (xIsNext ? "X" : "O");
   }

    return (
      <>
        <div className="status">{status}</div>

        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handlerClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handlerClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handlerClick(2)} />
        </div>

        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handlerClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handlerClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handlerClick(5)} />
        </div>

        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handlerClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handlerClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handlerClick(8)} />
        </div>
      </>
    );
    
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default Board;
