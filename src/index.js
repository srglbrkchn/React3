import React from "react";
import ReactDom from "react-dom";

const name = "Sara";
const luckyNumb = 13;

ReactDom.render(
    <div>
    <h1>Hi {name}</h1>
    <p>Your lucky number is: {luckyNumb}</p>
    </div>
, document.getElementById("root"));