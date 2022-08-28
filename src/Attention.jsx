import React from "react";
import logo from "./assets/billede2.jpg"
import "./App.css"

function AttentionPic() {
    return(
        <div className="section1">
    <img className="attention_pic" src={logo} alt="Picture of the author" />
    <h1>Johannes Andersen</h1>
    <h3>Front-End Developer</h3>
    <p>Johannes Andersen Website</p>
        </div>
    )
}

export default AttentionPic;