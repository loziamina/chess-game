import React from "react"
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
  const myChessboard = () => (
    <div className="grid grid-cols-8 grid-rows-8 gap-0 w-800 h-800 bg-bisque">
      {initialBoard[0].map((_, colIndex) => (
        <div key={colIndex} className="flex flex-col">
          {initialBoard.map((row, rowIndex) => (
            <Tile
              key={`${rowIndex}-${colIndex}`}
              label={pieceImages[row[colIndex]]}
              isEven={(rowIndex + colIndex) % 2 === 0}
            />
          ))}
        </div>
      ))}
    </div>
  )

  return <div className="chessboard">{myChessboard()}</div>
}

export default Chessboard
