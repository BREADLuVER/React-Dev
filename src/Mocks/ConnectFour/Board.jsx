import React from "react";
import Cell from "./Cell";

const Board = ({ board, onPlayerMove }) => {
  return (
    <div className="board">
      {board.map((row) => (
        <div className="row">
          {row.map((cell, colIndex) => (
            <Cell
              value={cell}
              onClick={() => onPlayerMove(colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
