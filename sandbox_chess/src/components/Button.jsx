import React, {useState} from "react"

// eslint-disable-next-line complexity
const Button = ({ isEven, label, rowIndex, colIndex, onMove, selectedPiece }) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)

    if (isClicked) {
      onMove({ label, rowIndex, colIndex })
      setIsClicked(false) 
    }
  }

  return (
    <button
      // eslint-disable-next-line react/no-unknown-property
      isEven={isEven}
      className={`tile ${isEven ? "bg-blue-200" : "bg-white"} flex items-center justify-center w-0 h-30 ${
        isClicked ? "clicked" : ""
      } ${selectedPiece && selectedPiece.rowIndex === rowIndex && selectedPiece.colIndex === colIndex ? "selected" : ""}`}
      onClick={handleClick}
      label={label}
    ></button>
  )
}


export default Button
