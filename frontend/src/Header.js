import React from 'react'
import Logo from "./assets/nozama_logo.png";
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="logo" />
            <h1>Challenge</h1>
        </div>
    )
}
