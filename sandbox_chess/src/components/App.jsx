import React from "react"
import Chessboard from "./Chessboard"


export default function App() {
  return (
    <div id="app" className="grid place-content-center ">
      <h1 className="no-underline hover:underline ..."> Welcome to the chessGame ♟</h1>
      <Chessboard />
    </div>
  )
}
