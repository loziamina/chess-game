/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import Tile from "./Tile"
import { pieceImages } from "./pieces"

const Chessboard = () => {
  const initialBoard = [
    ["bR", "bKn", "bB", "bQ", "bK", "bB", "bKn", "bR"],
    ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
    ["wR", "wKn", "wB", "wQ", "wK", "wB", "wKn", "wR"]
  ]
const [board, setBoard] = useState(initialBoard)
const [selectedPiece, setSelectedPiece] = useState(null)
// eslint-disable-next-line complexity
const movePiece = (start, destination) => {
    const newBoard = [...Array(8)]

    // eslint-disable-next-line no-plusplus
    for (let row = 0; row < 8; row++) {
      newBoard[row] = [...Array(8)]

      // eslint-disable-next-line no-plusplus
      for (let col = 0; col < 8; col++) {
        if (row === destination.row && col === destination.col) {
          newBoard[row][col] = selectedPiece.label
        } else if (row === start.row && col === start.col) {
          newBoard[row][col] = null
        } else {
          newBoard[row][col] = board[row][col]
        }
      }
    }

    return newBoard
  }
  const handleMove = ({ label, rowIndex, colIndex }) => {
    // eslint-disable-next-line no-console
    console.log("Piece clicked:", label)

    if (selectedPiece) {
      const newBoard = movePiece(
        { row: selectedPiece.rowIndex, col: selectedPiece.colIndex },
        { row: rowIndex, col: colIndex }
      )

      setBoard(newBoard)
      setSelectedPiece(null)
    } else {
      setSelectedPiece({ label, rowIndex, colIndex })
    }
  }
  const myChessboard = () => (
    <div className="grid grid-cols-8 grid-rows-8 gap-0 w-800 h-800 bg-bisque">
      {board.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((piece, colIndex) => (
            <Tile
              key={`${colIndex}-${rowIndex}`}
              label={pieceImages[piece]}
              isEven={(rowIndex + colIndex) % 2 === 0}
              onMove={handleMove}
              rowIndex={rowIndex}
              colIndex={colIndex}
              selectedPiece={selectedPiece}
            />
          ))}
        </div>
      ))}
    </div>
  )

  return <div className="chessBoard">{myChessboard()}</div>
}

export default Chessboard