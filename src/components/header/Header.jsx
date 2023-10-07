import React from "react";
import "./header.css";
import bg from "../../assets/img/rik-i-morti.png";
export default function Header() {
  return (
    <div className="header" style={{ backgroundImage: `url(${bg})` }}></div>
  );
}
