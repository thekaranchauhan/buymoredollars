import React from "react";
import losecupon from '../assets/lose_cupon.png'
import '../components/style/Lose.css'

  export default function Lose() {
    return (
      <div className="loseBox">
        <h1>Oh Noooo!</h1>
        <div className="losePrize">
          <img className="" src={losecupon} alt="logo" />
        </div>
      </div>
    )
  }