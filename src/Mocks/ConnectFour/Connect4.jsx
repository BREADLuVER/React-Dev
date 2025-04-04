import React, { useState } from "react";
import Board from "./Board"
import "./Connect4.css";

// setRows, setColumns
// logic to create and changeBoard
// logic to swap player
// logic for checking winner (DFS)
// logic for player input (changeBoard, checkWinner, changePlayer)

function createBoard(rows, cols) {
    const board = [];

    for (let row = 0; row < rows; row++) {
        const newRow = [];
        for (let col = 0; col < cols; col++) {
            newRow.push(null)
        }
        board.push(newRow)
    }

    return board
}

const ConnectFour = () => {
    const [rows, setRows] = useState(6)
    const [cols, setColumns] = useState(7)
    const [board, setBoard] = useState(() => createBoard(rows, cols));
    const [currentPlayer, setCurrentPlayer] = useState("yellow");
    const [winner, setWinner] = useState(null);

    function switchPlayer() {
        setCurrentPlayer((prevPlayer) =>
            (prevPlayer === "yellow" ? "red" : "yellow"))
    }

    function checkWinner(board, row, col) {
        //all directions for dfs
        const directions = [
            {dx:0, dy:1},
            {dx:0, dy:-1},
            {dx:1, dy:1},
            {dx:-1, dy:-1},
            {dx:1, dy:-1},
            {dx:-1, dy:1},
            {dx:1, dy:0},
            {dx:-1, dy:0},
        ]

        for (const {dx, dy} of directions) {
            const totalConnected = dfs(board, row, col, dx, dy) + 1; // need to plus one
            
            if (totalConnected >= 4){
                setWinner(currentPlayer)
                return
            }
        }
    }

    function dfs(board, Row, Column, dx, dy) {
        let count = 0;
        let row = Row + dx;
        let column = Column + dy;
    
        while (
          row >= 0 && row < rows &&
          column >= 0 && column < cols &&
          board[row][column] === currentPlayer
        ) {
          count++;
          row += dx;
          column += dy;
        }
    
        return count;
    }

    function playerInput(column) {
        const updatedBoard = board.map((row) => [...row])
        //start from bottom, check for first empty, drop piece check winner
        for (let row = rows-1; row >= 0; row --) {
            if (updatedBoard[row][column] === null) {
                updatedBoard[row][column] = currentPlayer
                setBoard(updatedBoard)
                checkWinner(updatedBoard, row, column)
                switchPlayer()
                return
            }
        }
    }

    return (
        <div className="game">
          <h2 className="winner">winner: {winner}</h2>
          {/* broke component into board, cell */}
          <Board board={board} onPlayerMove={playerInput} />
        </div>
      );
}

export default ConnectFour;