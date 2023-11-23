import React, { useState } from "react"
import Button from "./Button"

const Tile = ({ isEven, label, onMove }) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
    onMove(label)
  }

  return (
    <Button
      isEven={isEven}
      className={`tile ${
        isEven ? "bg-blue-200" : "bg-white"
      } flex items-center justify-center ${isClicked ? "clicked" : ""}`}
      style={{ width: "80px", height: "80px" }}
      onClick={handleClick}
      label={label}></Button>
  )
}

export default Tile
