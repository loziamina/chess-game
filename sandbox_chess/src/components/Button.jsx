import React from "react"

const Button = ({ isEven, label }) => (
  <button
    className={`tile ${
      isEven ? "bg-blue-200" : "bg-white"
    } flex items-center justify-center`}
    style={{ width: "80px", height: "80px" }}>
    {label && typeof label === "string" ? (
      <img src={label} alt="piece" />
    ) : (
      label
    )}
  </button>
)

export default Button
