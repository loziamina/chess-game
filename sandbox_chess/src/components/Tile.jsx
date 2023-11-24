import React, { useState } from "react"
import Button from "./Button"

// eslint-disable-next-line complexity
const Tile = ({ isEven, label, rowIndex, colIndex, onMove, selectedPiece }) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)

    if (isClicked) {
      onMove({ label, rowIndex, colIndex })
      setIsClicked(false) 
    }
  }

  return (
    <Button
      isEven={isEven}
      className={`tile ${isEven ? "bg-blue-200" : "bg-white"} flex items-center justify-center ${
        isClicked ? "clicked" : ""
      } ${selectedPiece && selectedPiece.rowIndex === rowIndex && selectedPiece.colIndex === colIndex ? "selected" : ""}`}
  
      onClick={handleClick}
      label={label}
    ></Button>
  )
}

export default Tile