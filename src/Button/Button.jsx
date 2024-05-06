import "./Button.css"
import React from "react";

const Button = ({numbers}) => {
  const [number, setNumber] = React.useState(0)

  
  return(
    <button
    className="btn-numbers"
    onClick={() => setNumber(number = numbers)}
    >{numbers}</button>
  )
}

export default Button;